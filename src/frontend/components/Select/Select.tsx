<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { InputHTMLAttributes } from 'react';
import * as S from './Select.styled';

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = ({ children, ...props }: IProps) => {
  return (
    <S.SelectContainer>
      <S.Select {...props}>{children}</S.Select>
      <S.Arrow />
    </S.SelectContainer>
  );
};

export default Select;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { InputHTMLAttributes } from 'react';
import * as S from './Select.styled';

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = ({ children, ...props }: IProps) => {
  return (
    <S.SelectContainer>
      <S.Select {...props}>{children}</S.Select>
      <S.Arrow />
    </S.SelectContainer>
  );
};

export default Select;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
