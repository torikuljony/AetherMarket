import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const users = await db
      .collection("users")
      .find({})
      .toArray();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}