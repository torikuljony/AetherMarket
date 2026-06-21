import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const prompts = await db.collection("prompts").find().toArray();

    return NextResponse.json(prompts);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}