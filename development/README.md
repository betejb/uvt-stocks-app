# Local environment setup 

### Prerequisites:

1. Install Docker: https://docs.docker.com/get-docker/
2. Docker-compose: https://docs.docker.com/compose/install/
3. Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
4. Install IntelliJ Idea: https://www.jetbrains.com/help/idea/installation-guide.html#standalone

### Setup dev environment

1. Clone project and open in IntelliJ
    ```shell
    git clone https://github.com/EndavaCollab/uvt-stocks-app.git
    ```

2. Setup SDK
   - ProjectSettings | Project, set the Project SDK to JDK 17
   - Download JDK 17 (semeru-17) if necessary

3. Build application
   
   ```shell
   ./gradlew clean build
   ```

4. Run application 

   4.1 Start mysql databse
   ```shell
   cd development
   docker-compose up -d
   ```
   
   4.2 Run application from IntelliJ
      - stocks-app-api: run main class `StocksApiApplication`
        - Check that application is running: http://localhost:8080/api/stocks/
      - stocks-app-ui: `ng serve`
        - Check that application is running: http://localhost:4200
