import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET SINGLE PROMPT
export async function GET(req, context) {
  try {
    const { id } = await context.params;

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const prompt = await db.collection("prompts").findOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json(prompt);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

// UPDATE PROMPT STATUS
export async function PATCH(req, context) {
  try {
    const { id } = await context.params;
    const { status } = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const result = await db.collection("prompts").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { status },
      }
    );

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

// DELETE PROMPT
export async function DELETE(req, context) {
  try {
    const { id } = await context.params;

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const result = await db.collection("prompts").deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}