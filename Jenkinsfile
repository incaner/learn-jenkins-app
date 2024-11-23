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
        stage('Deploy'){
            steps{
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify --version 

                '''
            }
        }
    }
    post {
        always{
            junit 'test-results/junit.xml'
        }
    }
}