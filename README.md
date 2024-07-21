
## Description

BFF - [Nest](https://github.com/nestjs/nest) + GraphQL.



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
1. Clone the [Client API repo](https://github.com/Peis7/GMA-challenge-client-API.git) and run the app
2. Clone the [CLient-Porfolio API repo](https://github.com/Peis7/-GMA-challenge-client-portfolio-API.git) and run the app
3. Run the app
4. open http://localhost:3000/graphql and try the following query:

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
