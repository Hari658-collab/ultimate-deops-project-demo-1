<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import type { NextApiRequest, NextApiResponse } from 'next';
import InstrumentationMiddleware from '../../utils/telemetry/InstrumentationMiddleware';
import CurrencyGateway from '../../gateways/rpc/Currency.gateway';
import { Empty } from '../../protos/demo';

type TResponse = string[] | Empty;

const handler = async ({ method }: NextApiRequest, res: NextApiResponse<TResponse>) => {
  switch (method) {
    case 'GET': {
      const { currencyCodes = [] } = await CurrencyGateway.getSupportedCurrencies();

      return res.status(200).json(currencyCodes);
    }

    default: {
      return res.status(405);
    }
  }
};

export default InstrumentationMiddleware(handler);
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import type { NextApiRequest, NextApiResponse } from 'next';
import InstrumentationMiddleware from '../../utils/telemetry/InstrumentationMiddleware';
import CurrencyGateway from '../../gateways/rpc/Currency.gateway';
import { Empty } from '../../protos/demo';

type TResponse = string[] | Empty;

const handler = async ({ method }: NextApiRequest, res: NextApiResponse<TResponse>) => {
  switch (method) {
    case 'GET': {
      const { currencyCodes = [] } = await CurrencyGateway.getSupportedCurrencies();

      return res.status(200).json(currencyCodes);
    }

    default: {
      return res.status(405);
    }
  }
};

export default InstrumentationMiddleware(handler);
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
