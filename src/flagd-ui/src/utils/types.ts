<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
export interface FlagConfig {
  description: string;
  state: FlagState;
  variants: {};
  defaultVariant: string;
}

export type Flags = {
  [key: string]: FlagConfig;
};

export type ConfigFile = {
  $schema: string;
  flags: Flags;
};

export enum FlagState {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
}
=======
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
export interface FlagConfig {
  description: string;
  state: FlagState;
  variants: {};
  defaultVariant: string;
}

export type Flags = {
  [key: string]: FlagConfig;
};

export type ConfigFile = {
  $schema: string;
  flags: Flags;
};

export enum FlagState {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
}
>>>>>>> 9594cd0 (chore: verify github actions)
