pipeline{  
  environment {
    registry = "imagensdoyuripoc.azurecr.io/node-helloworld"
    AZURE_SUBSCRIPTION_ID='e1941690-2579-4be3-8a8c-7c6e36f9fd9b'
    AZURE_TENANT_ID='1d6b1acb-d44f-4c19-95a8-6f5e42f49234'
    CONTAINER_REGISTRY='imagensDoYuriPoc'
    RESOURCE_GROUP='POC'
  }
  agent any
    stages {
        stage('Build'){
           steps{
              script{
                sh 'npm install'
                def version = readFile('version.txt')
                    def versions = version.split('\\.')
                    def major = versions[0]
                    def minor = versions[0] + '.' + versions[1]
                    def patch = version.trim()
                    
              withCredentials([usernamePassword(credentialsId: 'AzureServicePrincipal', passwordVariable: 'AZURE_CLIENT_SECRET', usernameVariable: 'AZURE_CLIENT_ID')]) {
                            sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t $AZURE_TENANT_ID'
                            sh 'az account set -s $AZURE_SUBSCRIPTION_ID'
                            sh 'az acr login --name $CONTAINER_REGISTRY --resource-group $RESOURCE_GROUP'
                            sh 'az acr build --image $registry:$major --registry $CONTAINER_REGISTRY --file Dockerfile . '
                            sh 'az acr build --image $registry:$minor --registry $CONTAINER_REGISTRY --file Dockerfile . '
                            sh 'az acr build --image $registry:$patch --registry $CONTAINER_REGISTRY --file Dockerfile . '

                        }
           }   
        }
        }
           stage('Deploying into k8s'){
            steps{
                sh 'kubectl apply -f deployment.yml' 
            }
        }
    }
}