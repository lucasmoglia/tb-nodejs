# Toolbox - NodeJS API 

## Requirements

🐳 Docker

## Packages 

### Server
```javascript
"body-parser": "^1.5.1",
"chai": "^4.2.0",
"express": "^4.7.1",
"method-override": "^2.1.2",
"mocha": "^5.2.0",
"morgan": "^1.9.1",
"supertest": "^3.3.0"
```

### Client
```javascript
"request": "^2.88.0",
"request-promise": "^4.2.2"
```

## Launch instructions

Inside the root folder run:
> docker-compose build && docker-compose up

  
### Client
  
  The text parameter used to call the server api can be modify by editing the file named **docker-compose.yml**.
  
```javascript
...
client:
  environment:
  - text_param="example test"
...
```
>**Note:** The parameter is passed to the main nodeJS program (client/client.js) at the end of its Dockerfile. `CMD ["sh", "-c", "node client.js ${text_param}"]`. 

### Server

* The server will be listening at port 8090.


## Tests

Tests can be launched running this commands (being at root directory):

```bash
> cd server
> npm run test
```
> **Note:** Also you can launch the tests running `./test.sh` from root directory.

### Test cases

Sending a string to the main api `localhost:8090/api/` ...

* 👾 The response status should be 200 sending just one word
* 👾 The response status should be 404 if we dont send any word
* 👾 The response status should be 200 sending more than one word at time
* 👾 The response text message always should be equal
