<<<<<<< HEAD
<<<<<<< HEAD
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

FROM golang:1.22-alpine

WORKDIR /build

RUN apk add --no-cache protobuf-dev

COPY ./src/product-catalog/go.mod ./
COPY ./src/product-catalog/go.sum ./
COPY ./src/product-catalog/tools.go ./

RUN go env -w GOMODCACHE=/root/.cache/go-build
RUN --mount=type=cache,target=/root/.cache/go-build \
    go list -e -f '{{range .Imports}}{{.}} {{end}}' tools.go | CGO_ENABLED=0 xargs go install -mod=readonly \
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

FROM golang:1.22-alpine

WORKDIR /build

RUN apk add --no-cache protobuf-dev

COPY ./src/product-catalog/go.mod ./
COPY ./src/product-catalog/go.sum ./
COPY ./src/product-catalog/tools.go ./

RUN go env -w GOMODCACHE=/root/.cache/go-build
RUN --mount=type=cache,target=/root/.cache/go-build \
    go list -e -f '{{range .Imports}}{{.}} {{end}}' tools.go | CGO_ENABLED=0 xargs go install -mod=readonly \
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
