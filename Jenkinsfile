pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Build'){
            steps{
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci 
                    npm run build
                    ls -la
                '''
            }

        }
        stage('Test'){
            steps{
                sh 'test -f build/index.html'
                catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE'){
                    sh 'npm test'
                }
            }
        }
    }
    post {
        always{
            junit 'test-results/junit.xml'
        }
    }
}