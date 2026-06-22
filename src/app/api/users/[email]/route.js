import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req, context) {
  try {
    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    // FIX
    const { email } = await context.params;

    const user = await db.collection("users").findOne({
      email,
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}