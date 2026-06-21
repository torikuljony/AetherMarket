import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// CREATE ORDER
export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const ordersCollection = db.collection("orders");

    const existing = await ordersCollection.findOne({
      buyerEmail: body.buyerEmail,
      promptId: body.promptId,
    });

    if (existing) {
      return NextResponse.json({
        success: false,
        message: "Already purchased",
      });
    }

    const result = await ordersCollection.insertOne({
      ...body,
      status: "completed",
      createdAt: new Date(),
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