
## Spring Rest Initialization

### 1-In your project root folder, create a env.properties.
```java
DB_DATABASE=NameofyourappSavedIntoYourDB
DB_USER=yourUsername
DB_PASSWORD=SuperStrongPassword
```

### 2-Update your application.properties File
`spring.config.import=file:env.properties`
	
### 3-Then use your Environment variable freshly created in your env.properties file with ${ENV_VAR}:

```java
spring.datasource.url=jdbc:h2:file:~/${DB_DATABASE}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
```

Reference-style: 
![directory structure](https://www.dropbox.com/scl/fi/zvic8fy6x421ibjpyh5pp/spring_app_dir.png?rlkey=39wpyesziir4n5htii000qpsw&st=58slbtvr&raw=0)
	
[source:]( https://medium.com/@Marou_arnault/spring-boot-hide-your-credentials-fb1ca22ae911)
