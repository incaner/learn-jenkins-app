pipeline {
    agent any

    environment{
        NETLIFY_SITE_ID = '38b67bdc-47af-46a3-94fe-6316ac28879c'
        NETLIFY_AUTH_TOKEN = credentials('netlify')
    }
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
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod

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