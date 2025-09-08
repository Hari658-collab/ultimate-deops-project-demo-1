<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  background-color: #5262a8;
  color: white;
  display: inline-block;
  border: solid 1px #5262a8;
  padding: 8px 16px;
  outline: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  border-radius: 10px;
  height: 62px;
  cursor: pointer;

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: none;
      color: #5262a8;
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      background: none;
      color: #5262a8;
      border: none;
    `};
`;

export default Button;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  background-color: #5262a8;
  color: white;
  display: inline-block;
  border: solid 1px #5262a8;
  padding: 8px 16px;
  outline: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  border-radius: 10px;
  height: 62px;
  cursor: pointer;

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: none;
      color: #5262a8;
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      background: none;
      color: #5262a8;
      border: none;
    `};
`;

export default Button;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
