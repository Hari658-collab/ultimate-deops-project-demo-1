<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { CypressFields } from '../../utils/Cypress';
import { useAd } from '../../providers/Ad.provider';
import ProductCard from '../ProductCard';
import * as S from './Recommendations.styled';

const Recommendations = () => {
  const { recommendedProductList } = useAd();

  return (
    <S.Recommendations data-cy={CypressFields.RecommendationList}>
      <S.TitleContainer>
        <S.Title>You May Also Like</S.Title>
      </S.TitleContainer>
      <S.ProductList>
        {recommendedProductList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductList>
    </S.Recommendations>
  );
};

export default Recommendations;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { CypressFields } from '../../utils/Cypress';
import { useAd } from '../../providers/Ad.provider';
import ProductCard from '../ProductCard';
import * as S from './Recommendations.styled';

const Recommendations = () => {
  const { recommendedProductList } = useAd();

  return (
    <S.Recommendations data-cy={CypressFields.RecommendationList}>
      <S.TitleContainer>
        <S.Title>You May Also Like</S.Title>
      </S.TitleContainer>
      <S.ProductList>
        {recommendedProductList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductList>
    </S.Recommendations>
  );
};

export default Recommendations;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
