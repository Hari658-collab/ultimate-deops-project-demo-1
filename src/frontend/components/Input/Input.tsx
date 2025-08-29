<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import * as S from './Input.styled';

interface IProps extends InputHTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  type: HTMLInputTypeAttribute | 'select';
  children?: React.ReactNode;
  label: string;
}

const Input = ({ type, id = '', children, label, ...props }: IProps) => {
  return (
    <S.InputRow>
      <S.InputLabel>{label}</S.InputLabel>
      {type === 'select' ? (
        <>
          <S.Select id={id} {...props}>
            {children}
          </S.Select>
          <S.Arrow />
        </>
      ) : (
        <S.Input id={id} {...props} type={type} />
      )}
    </S.InputRow>
  );
};

export default Input;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import * as S from './Input.styled';

interface IProps extends InputHTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  type: HTMLInputTypeAttribute | 'select';
  children?: React.ReactNode;
  label: string;
}

const Input = ({ type, id = '', children, label, ...props }: IProps) => {
  return (
    <S.InputRow>
      <S.InputLabel>{label}</S.InputLabel>
      {type === 'select' ? (
        <>
          <S.Select id={id} {...props}>
            {children}
          </S.Select>
          <S.Arrow />
        </>
      ) : (
        <S.Input id={id} {...props} type={type} />
      )}
    </S.InputRow>
  );
};

export default Input;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
