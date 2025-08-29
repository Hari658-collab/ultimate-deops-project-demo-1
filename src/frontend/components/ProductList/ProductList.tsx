<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { CypressFields } from '../../utils/Cypress';
import { Product } from '../../protos/demo';
import ProductCard from '../ProductCard';
import * as S from './ProductList.styled';

interface IProps {
  productList: Product[];
}

const ProductList = ({ productList }: IProps) => {
  return (
    <S.ProductList data-cy={CypressFields.ProductList}>
      {productList.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.ProductList>
  );
};

export default ProductList;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { CypressFields } from '../../utils/Cypress';
import { Product } from '../../protos/demo';
import ProductCard from '../ProductCard';
import * as S from './ProductList.styled';

interface IProps {
  productList: Product[];
}

const ProductList = ({ productList }: IProps) => {
  return (
    <S.ProductList data-cy={CypressFields.ProductList}>
      {productList.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.ProductList>
  );
};

export default ProductList;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
