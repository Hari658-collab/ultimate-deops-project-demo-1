<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

fn main() -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(feature = "dockerproto")]
    tonic_build::compile_protos("/app/proto/demo.proto")?;
    #[cfg(not(feature = "dockerproto"))]
    tonic_build::compile_protos("../../pb/demo.proto")?;
    Ok(())
}
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

fn main() -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(feature = "dockerproto")]
    tonic_build::compile_protos("/app/proto/demo.proto")?;
    #[cfg(not(feature = "dockerproto"))]
    tonic_build::compile_protos("../../pb/demo.proto")?;
    Ok(())
}
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
