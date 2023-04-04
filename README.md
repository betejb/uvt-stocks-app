# uvt-project

## Development
- [Development evironment setup](development#readme)

## Build
```shell
./gradlew clean build
```
This could take a few minutes at the first run as it will download all dependencies.

## Run application
```shell
cd development
docker-compose up -d
```

```shell
cd stocks-app-api
./gradlew bootRun
```

```shell
cd stocks-app-ui
ng serve
```

Open http://localhost:4200
