import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    const { email, role } = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const result = await db.collection("users").updateOne(
      { email },
      {
        $set: { role },
      }
    );

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}