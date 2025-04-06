pipeline {
    agent any
environment {
    NEW_VERSION = '1.3.0'
    SERVER_CREDENTIALS = credentials('git_id')
}
    stages {
        stage('Print Hello') {
            echo "building verison ${ NEW_VERSION}"
            }
            steps {
                echo 'Hello, Jenkins!'
            }
        }
    }
}
