cd /ubp-ui-automation/cypress/
ubpDate=$(date +"%Y-%m-%dT%H-%M-%S")
#gpName=gp-reports
ubpVariable=$ubpDate
zipFolder=$ubpVariable.zip
zip -r $zipFolder reports
scp -o StrictHostKeyChecking=no -i /ubp-ui-automation/reportServer.pem $zipFolder centos@10.91.10.124:/home/centos/UBP
scp -o StrictHostKeyChecking=no -i /ubp-ui-automation/reportServer.pem test.done centos@10.91.10.124:/home/centos/UBP
echo "Report will be available in this link after 30 min. Please visit the link for details and go to date wise folder: "
echo "http://10.91.10.124:8888/rvm/$ubpDate/index.html"