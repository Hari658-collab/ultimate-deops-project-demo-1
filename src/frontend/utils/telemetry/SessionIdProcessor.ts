<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { Context } from "@opentelemetry/api";
import { ReadableSpan, Span, SpanProcessor } from "@opentelemetry/sdk-trace-web";
import SessionGateway from "../../gateways/Session.gateway";
import { AttributeNames } from "../enums/AttributeNames";

const { userId } = SessionGateway.getSession();

export class SessionIdProcessor implements SpanProcessor {
    forceFlush(): Promise<void> {
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onStart(span: Span, parentContext: Context): void {
        span.setAttribute(AttributeNames.SESSION_ID, userId);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    onEnd(span: ReadableSpan): void {}

    shutdown(): Promise<void> {
        return Promise.resolve();
    }
}
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { Context } from "@opentelemetry/api";
import { ReadableSpan, Span, SpanProcessor } from "@opentelemetry/sdk-trace-web";
import SessionGateway from "../../gateways/Session.gateway";
import { AttributeNames } from "../enums/AttributeNames";

const { userId } = SessionGateway.getSession();

export class SessionIdProcessor implements SpanProcessor {
    forceFlush(): Promise<void> {
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onStart(span: Span, parentContext: Context): void {
        span.setAttribute(AttributeNames.SESSION_ID, userId);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    onEnd(span: ReadableSpan): void {}

    shutdown(): Promise<void> {
        return Promise.resolve();
    }
}
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
