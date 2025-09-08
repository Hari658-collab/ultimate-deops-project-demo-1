<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import {Address, Cart, OrderItem, OrderResult, Product} from '../protos/demo';

export interface IProductCartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface IProductCheckoutItem extends OrderItem {
  item: IProductCartItem;
}

export interface IProductCheckout extends OrderResult {
  items: IProductCheckoutItem[];
  shippingAddress: Address;
}

export interface IProductCart extends Cart {
  items: IProductCartItem[];
}
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import {Address, Cart, OrderItem, OrderResult, Product} from '../protos/demo';

export interface IProductCartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface IProductCheckoutItem extends OrderItem {
  item: IProductCartItem;
}

export interface IProductCheckout extends OrderResult {
  items: IProductCheckoutItem[];
  shippingAddress: Address;
}

export interface IProductCart extends Cart {
  items: IProductCartItem[];
}
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
