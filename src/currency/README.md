<<<<<<< HEAD
<<<<<<< HEAD
# Currency Service

The Currency Service does the conversion from one currency to another.
It is a C++ based service.

## Building docker image

To build the currency service, run the following from root directory
of opentelemetry-demo

```sh
docker-compose build currency
```

## Run the service

Execute the below command to run the service.

```sh
docker-compose up currency
```

## Run the client

currencyclient is a sample client which sends some request to currency
service. To run the client, execute the below command.

```sh
docker exec -it <container_name> currencyclient 7000
```

'7000' is port where currency listens to.
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
# Currency Service

The Currency Service does the conversion from one currency to another.
It is a C++ based service.

## Building docker image

To build the currency service, run the following from root directory
of opentelemetry-demo

```sh
docker-compose build currency
```

## Run the service

Execute the below command to run the service.

```sh
docker-compose up currency
```

## Run the client

currencyclient is a sample client which sends some request to currency
service. To run the client, execute the below command.

```sh
docker exec -it <container_name> currencyclient 7000
```

'7000' is port where currency listens to.
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
