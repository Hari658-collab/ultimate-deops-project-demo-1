<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useState } from 'react';
import { CypressFields } from '../../utils/Cypress';
import { useCart } from '../../providers/Cart.provider';
import CartDropdown from '../CartDropdown';
import * as S from './CartIcon.styled';

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart: { items },
  } = useCart();

  return (
    <>
      <S.CartIcon data-cy={CypressFields.CartIcon} onClick={() => setIsOpen(true)}>
        <S.Icon src="/icons/CartIcon.svg" alt="Cart icon" title="Cart" />
        {!!items.length && <S.ItemsCount data-cy={CypressFields.CartItemCount}>{items.length}</S.ItemsCount>}
      </S.CartIcon>
      <CartDropdown productList={items} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CartIcon;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useState } from 'react';
import { CypressFields } from '../../utils/Cypress';
import { useCart } from '../../providers/Cart.provider';
import CartDropdown from '../CartDropdown';
import * as S from './CartIcon.styled';

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart: { items },
  } = useCart();

  return (
    <>
      <S.CartIcon data-cy={CypressFields.CartIcon} onClick={() => setIsOpen(true)}>
        <S.Icon src="/icons/CartIcon.svg" alt="Cart icon" title="Cart" />
        {!!items.length && <S.ItemsCount data-cy={CypressFields.CartItemCount}>{items.length}</S.ItemsCount>}
      </S.CartIcon>
      <CartDropdown productList={items} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CartIcon;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
