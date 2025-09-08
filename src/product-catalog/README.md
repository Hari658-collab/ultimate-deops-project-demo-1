<<<<<<< HEAD
<<<<<<< HEAD
# Product Catalog Service

When this service is run the output should be similar to the following

```
INFO[0000] Loaded 10 products                           
INFO[0000] Product Catalog gRPC server started on port: 8088 
```

## Local Build

To build the service binary, run:

```sh
export PRODUCT_CATALOG_PORT=<any-unique-port>
go build -o product-catalog . 
```

## Docker Build

From the root directory, run:

```sh
docker compose build product-catalog
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
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
# Product Catalog Service

When this service is run the output should be similar to the following

```
INFO[0000] Loaded 10 products                           
INFO[0000] Product Catalog gRPC server started on port: 8088 
```

## Local Build

To build the service binary, run:

```sh
export PRODUCT_CATALOG_PORT=<any-unique-port>
go build -o product-catalog . 
```

## Docker Build

From the root directory, run:

```sh
docker compose build product-catalog
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
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
