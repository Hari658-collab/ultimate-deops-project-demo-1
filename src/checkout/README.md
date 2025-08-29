<<<<<<< HEAD
# Checkout Service

This service provides checkout services for the application.

## Local Build

To build the service binary, run:

```sh
go build -o /go/bin/checkout/
```

## Docker Build

From the root directory, run:

```sh
docker compose build checkout
```

## Regenerate protos

To build the protos, run from the root directory:

```sh
make docker-generate-protobuf
```

## Bump dependencies

To bump all dependencies run:

```sh
go get -u -t ./...
go mod tidy
```
=======
# Checkout Service

This service provides checkout services for the application.

## Local Build

To build the service binary, run:

```sh
go build -o /go/bin/checkout/
```

## Docker Build

From the root directory, run:

```sh
docker compose build checkout
```

## Regenerate protos

To build the protos, run from the root directory:

```sh
make docker-generate-protobuf
```

## Bump dependencies

To bump all dependencies run:

```sh
go get -u -t ./...
go mod tidy
```
>>>>>>> 9594cd0 (chore: verify github actions)
