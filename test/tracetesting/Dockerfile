<<<<<<< HEAD
<<<<<<< HEAD
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0


FROM alpine

WORKDIR /app

# The build-images workflow action does not set a build-arg so we need to specify a default value here
ARG TRACETEST_IMAGE_VERSION

RUN apk --update add bash jq curl
RUN curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash -s -- $TRACETEST_IMAGE_VERSION

WORKDIR /app/test/tracetesting

ENTRYPOINT ["/bin/bash", "/app/test/tracetesting/run.bash"]
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0


FROM alpine

WORKDIR /app

# The build-images workflow action does not set a build-arg so we need to specify a default value here
ARG TRACETEST_IMAGE_VERSION

RUN apk --update add bash jq curl
RUN curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash -s -- $TRACETEST_IMAGE_VERSION

WORKDIR /app/test/tracetesting

ENTRYPOINT ["/bin/bash", "/app/test/tracetesting/run.bash"]
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
