<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

const pino = require('pino')

const logger = pino({
    mixin() {
      return {
        'service.name': process.env['OTEL_SERVICE_NAME'],
      }  
    },
    formatters: {
        level: (label) => {
          return { 'level': label };
        },
      },
});

module.exports = logger;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

const pino = require('pino')

const logger = pino({
    mixin() {
      return {
        'service.name': process.env['OTEL_SERVICE_NAME'],
      }  
    },
    formatters: {
        level: (label) => {
          return { 'level': label };
        },
      },
});

module.exports = logger;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
