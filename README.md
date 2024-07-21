
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

open http://localhost:3000/graphql and try:

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
