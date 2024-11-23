pipeline {
    agent vm1

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Build'){
            sh '''
                ls -la
                node --version
                npm --version
                npm ci 
                npm run build
                ll
            '''
        }
    }
}