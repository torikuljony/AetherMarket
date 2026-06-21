import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { email } = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const result = await db.collection("users").deleteOne({
      email,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}