<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

using Accounting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

Console.WriteLine("Accounting service started");

Environment.GetEnvironmentVariables()
    .FilterRelevant()
    .OutputInOrder();

var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddSingleton<Consumer>();
    })
    .Build();

var consumer = host.Services.GetRequiredService<Consumer>();
consumer.StartListening();

host.Run();
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

using Accounting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

Console.WriteLine("Accounting service started");

Environment.GetEnvironmentVariables()
    .FilterRelevant()
    .OutputInOrder();

var host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddSingleton<Consumer>();
    })
    .Build();

var consumer = host.Services.GetRequiredService<Consumer>();
consumer.StartListening();

host.Run();
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
