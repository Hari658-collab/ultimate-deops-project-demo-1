<<<<<<< HEAD
<<<<<<< HEAD
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { data } = await request.json();
    const filePath = path.join(process.cwd(), "data", "demo.flagd.json");

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json(
      { message: "File written successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error writing to file:", error);
    return NextResponse.json(
      { message: "Error writing to file" },
      { status: 500 },
    );
  }
}
=======
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { data } = await request.json();
    const filePath = path.join(process.cwd(), "data", "demo.flagd.json");

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json(
      { message: "File written successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error writing to file:", error);
    return NextResponse.json(
      { message: "Error writing to file" },
      { status: 500 },
    );
  }
}
<<<<<<< HEAD
>>>>>>> 9594cd0 (chore: verify github actions)
=======
>>>>>>> e3cfa673a16b249f79fbbe636908819d58b798d2
