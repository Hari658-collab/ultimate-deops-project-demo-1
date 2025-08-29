<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import Button from '../Button';
import * as S from '../../styles/Cart.styled';

const EmptyCart = () => {
  return (
    <S.EmptyCartContainer>
      <S.Title>Your shopping cart is empty!</S.Title>
      <S.Subtitle>Items you add to your shopping cart will appear here.</S.Subtitle>

      <S.ButtonContainer>
        <Link href="/">
          <Button type="submit">Continue Shopping</Button>
        </Link>
      </S.ButtonContainer>
    </S.EmptyCartContainer>
  );
};

export default EmptyCart;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import Button from '../Button';
import * as S from '../../styles/Cart.styled';

const EmptyCart = () => {
  return (
    <S.EmptyCartContainer>
      <S.Title>Your shopping cart is empty!</S.Title>
      <S.Subtitle>Items you add to your shopping cart will appear here.</S.Subtitle>

      <S.ButtonContainer>
        <Link href="/">
          <Button type="submit">Continue Shopping</Button>
        </Link>
      </S.ButtonContainer>
    </S.EmptyCartContainer>
  );
};

export default EmptyCart;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
