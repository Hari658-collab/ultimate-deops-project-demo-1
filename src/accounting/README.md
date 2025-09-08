<<<<<<< HEAD
<<<<<<< HEAD
# Accounting Service

This service consumes new orders from a Kafka topic.

## Local Build

To build the service binary, run:

```sh
cp pb/demo.proto src/accouting/proto/demo.proto # root context
dotnet build # accounting service context
```

## Docker Build

From the root directory, run:

```sh
docker compose build accounting
```

## Bump dependencies

To bump all dependencies run in Package manager:

```sh
Update-Package -ProjectName Accounting
```
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
# Accounting Service

This service consumes new orders from a Kafka topic.

## Local Build

To build the service binary, run:

```sh
cp pb/demo.proto src/accouting/proto/demo.proto # root context
dotnet build # accounting service context
```

## Docker Build

From the root directory, run:

```sh
docker compose build accounting
```

## Bump dependencies

To bump all dependencies run in Package manager:

```sh
Update-Package -ProjectName Accounting
```
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
