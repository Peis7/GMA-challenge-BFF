
## Description

BFF - [Nest](https://github.com/nestjs/nest) + GraphQL + Docker.
The BFF app connects to two different REST API's that use mongo with test data from .json files that is autoloaded at app start
Those two REST API's are written in python, using Flask.




Below, I detail the steps I have followed and the results obtained:



- Review of the test PDF: I have carefully read all the questions and ensured that I understand all the requirements.
- Analysis of the database schemas: I have visualized the structure and relationships between the tables, which has allowed me to better understand the context of the test.
- Consideration of customerCode as equivalent to client_id: I was tempted to use this relationship for mapping to establish the necessary relationships between the collections. However, a reference to clientId in the client_portfolios collection seems like a more intuitive option to me.
- Assignment of necessary values: I have assigned the required values to advance with the test, ensuring that the information is consistent for the purposes of this evaluation.
- Development of the APIs: I have implemented the APIs in the language of my preference, given that I have no experience with Go or Java, in this case, Flask. I have ensured to meet the requirements specified in the test PDF.
## Running the app (Docker)

```bash
# build
$ make rebuild

# stop
$ make stop

# start
$ make start

```

## How to test
1. Clone the [Client API repo](https://github.com/Peis7/GMA-challenge-client-API.git) and run the client API app
2. Clone the [CLient-Porfolio API repo](https://github.com/Peis7/-GMA-challenge-client-portfolio-API.git) and run the Client Portfolio API app
3. create a .development.env file at the root of project with the next variables:
   ```
      PORT = 3000    
      CLIENT_API_BASE_URL = 'clients_api:5000'            
      CLIENT_PORTAFOLIO_API_BASE_URL  = 'client_portfolio_api:5001'
   ```
4. Run the app
5. Open [http://localhost:3000/graphql](http://localhost:3000/graphql) and try the following query:

```
{
  client(id: "9999999999"){
    address,
    blocked,
    cellPhone ,
    channel,
    country,
    portfolioData{
      channel,
      items {
        sku,
        title,
      }
    }
  }
}
```


## License

Nest is [MIT licensed](LICENSE).
