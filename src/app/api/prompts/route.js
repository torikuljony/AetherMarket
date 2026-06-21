import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// CREATE PROMPT
export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");
    const promptsCollection = db.collection("prompts");

    const result = await promptsCollection.insertOne({
      ...body,
      price: Number(body.price),
      createdAt: new Date(),
      updatedAt: new Date(),        // ← যোগ করা হয়েছে
      status: body.status || "pending",
    });

    return NextResponse.json({
      success: true,
      result,
      message: "Prompt uploaded successfully"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}

// GET ALL PROMPTS
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const prompts = await db
      .collection("prompts")
      .find({})
      .sort({ createdAt: -1 })   // সবচেয়ে নতুন আগে দেখাবে
      .toArray();

    return NextResponse.json(prompts);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    }, { status: 500 });
  }
}