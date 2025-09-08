<<<<<<< HEAD
<<<<<<< HEAD
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0


FROM node:22-alpine AS build

WORKDIR /usr/src/app/

COPY ./src/payment/package*.json ./

RUN apk add --no-cache python3 make g++ && npm ci --omit=dev

# -----------------------------------------------------------------------------

FROM node:22-alpine

USER node
WORKDIR /usr/src/app/
ENV NODE_ENV=production

COPY --chown=node:node --from=build /usr/src/app/node_modules/ ./node_modules/
COPY ./src/payment/ ./
COPY ./pb/demo.proto ./

EXPOSE ${PAYMENT_PORT}
ENTRYPOINT [ "npm", "run", "start" ]
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0


FROM node:22-alpine AS build

WORKDIR /usr/src/app/

COPY ./src/payment/package*.json ./

RUN apk add --no-cache python3 make g++ && npm ci --omit=dev

# -----------------------------------------------------------------------------

FROM node:22-alpine

USER node
WORKDIR /usr/src/app/
ENV NODE_ENV=production

COPY --chown=node:node --from=build /usr/src/app/node_modules/ ./node_modules/
COPY ./src/payment/ ./
COPY ./pb/demo.proto ./

EXPOSE ${PAYMENT_PORT}
ENTRYPOINT [ "npm", "run", "start" ]
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
