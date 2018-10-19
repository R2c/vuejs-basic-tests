# vuejs-basic-tests

docker-compose run -p 8080:8080 --rm node yarn install

# localhost:8080 to view the app.
docker-compose run -p 8080:8080 --rm node yarn encore dev-server --https --port 8080 --host 0.0.0.0 --disable-host-check
