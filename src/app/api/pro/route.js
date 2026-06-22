import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    await db.collection("users").updateOne(
      { email },
      {
        $set: {
          membership: "pro",
        },
      }
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}