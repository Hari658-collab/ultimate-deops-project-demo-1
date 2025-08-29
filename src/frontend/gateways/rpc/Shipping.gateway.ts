<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { ChannelCredentials } from '@grpc/grpc-js';
import { Address, CartItem, GetQuoteResponse, ShippingServiceClient } from '../../protos/demo';

const { SHIPPING_ADDR = '' } = process.env;

const client = new ShippingServiceClient(SHIPPING_ADDR, ChannelCredentials.createInsecure());

const ShippingGateway = () => ({
  getShippingCost(itemList: CartItem[], address: Address) {
    return new Promise<GetQuoteResponse>((resolve, reject) =>
      client.getQuote({ items: itemList, address: address }, (error, response) =>
        error ? reject(error) : resolve(response)
      )
    );
  },
});

export default ShippingGateway();
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { ChannelCredentials } from '@grpc/grpc-js';
import { Address, CartItem, GetQuoteResponse, ShippingServiceClient } from '../../protos/demo';

const { SHIPPING_ADDR = '' } = process.env;

const client = new ShippingServiceClient(SHIPPING_ADDR, ChannelCredentials.createInsecure());

const ShippingGateway = () => ({
  getShippingCost(itemList: CartItem[], address: Address) {
    return new Promise<GetQuoteResponse>((resolve, reject) =>
      client.getQuote({ items: itemList, address: address }, (error, response) =>
        error ? reject(error) : resolve(response)
      )
    );
  },
});

export default ShippingGateway();
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
