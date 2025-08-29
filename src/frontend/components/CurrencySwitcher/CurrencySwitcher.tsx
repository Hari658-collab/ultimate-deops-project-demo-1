<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useMemo } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useCurrency } from '../../providers/Currency.provider';
import * as S from './CurrencySwitcher.styled';
import { CypressFields } from '../../utils/Cypress';

const CurrencySwitcher = () => {
  const { currencyCodeList, setSelectedCurrency, selectedCurrency } = useCurrency();

  const currencySymbol = useMemo(() => getSymbolFromCurrency(selectedCurrency), [selectedCurrency]);

  return (
    <S.CurrencySwitcher>
      <S.Container>
        <S.SelectedConcurrency>{currencySymbol}</S.SelectedConcurrency>
        <S.Select
          name="currency_code"
          onChange={(event: { target: { value: string; }; }) => setSelectedCurrency(event.target.value)}
          value={selectedCurrency}
          data-cy={CypressFields.CurrencySwitcher}
        >
          {currencyCodeList.map(currencyCode => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </S.Select>
        <S.Arrow />
      </S.Container>
    </S.CurrencySwitcher>
  );
};

export default CurrencySwitcher;
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useMemo } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useCurrency } from '../../providers/Currency.provider';
import * as S from './CurrencySwitcher.styled';
import { CypressFields } from '../../utils/Cypress';

const CurrencySwitcher = () => {
  const { currencyCodeList, setSelectedCurrency, selectedCurrency } = useCurrency();

  const currencySymbol = useMemo(() => getSymbolFromCurrency(selectedCurrency), [selectedCurrency]);

  return (
    <S.CurrencySwitcher>
      <S.Container>
        <S.SelectedConcurrency>{currencySymbol}</S.SelectedConcurrency>
        <S.Select
          name="currency_code"
          onChange={(event: { target: { value: string; }; }) => setSelectedCurrency(event.target.value)}
          value={selectedCurrency}
          data-cy={CypressFields.CurrencySwitcher}
        >
          {currencyCodeList.map(currencyCode => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </S.Select>
        <S.Arrow />
      </S.Container>
    </S.CurrencySwitcher>
  );
};

export default CurrencySwitcher;
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
