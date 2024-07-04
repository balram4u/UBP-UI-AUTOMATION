releaseTag=$(awk -F'"' '/"version": ".+"/{ print $4; exit; }' package.json)
DOCKER_TAG=`echo $releaseTag`
DOCKER_REPOSITORY=docker.io/sdsdockerhub/ubp-ui-automation
echo "image.repository=$DOCKER_REPOSITORY"  >> docker-image.properties
echo "image.tag=$DOCKER_TAG" >> docker-image.properties
cat docker-image.properties

