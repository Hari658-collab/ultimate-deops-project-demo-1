<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
using System.Threading.Tasks;

namespace cart.cartstore;

public interface ICartStore
{
    void Initialize();

    Task AddItemAsync(string userId, string productId, int quantity);
    Task EmptyCartAsync(string userId);

    Task<Oteldemo.Cart> GetCartAsync(string userId);

    bool Ping();
}
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
using System.Threading.Tasks;

namespace cart.cartstore;

public interface ICartStore
{
    void Initialize();

    Task AddItemAsync(string userId, string productId, int quantity);
    Task EmptyCartAsync(string userId);

    Task<Oteldemo.Cart> GetCartAsync(string userId);

    bool Ping();
}
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
