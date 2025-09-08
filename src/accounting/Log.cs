<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

using Microsoft.Extensions.Logging;
using Oteldemo;

namespace Accounting
{
    internal static partial class Log
    {
        [LoggerMessage(
            Level = LogLevel.Information,
            Message = "Order details: {@OrderResult}.")]
        public static partial void OrderReceivedMessage(ILogger logger, OrderResult orderResult);
    }
}
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

using Microsoft.Extensions.Logging;
using Oteldemo;

namespace Accounting
{
    internal static partial class Log
    {
        [LoggerMessage(
            Level = LogLevel.Information,
            Message = "Order details: {@OrderResult}.")]
        public static partial void OrderReceivedMessage(ILogger logger, OrderResult orderResult);
    }
}
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
