import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// CREATE PURCHASE
export async function POST(req) {
  try {
    const purchaseData = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const purchases = db.collection("purchases");

    const exists = await purchases.findOne({
      userEmail: purchaseData.userEmail,
      promptId: purchaseData.promptId,
    });

    if (exists) {
      return NextResponse.json({
        message: "Already purchased",
      });
    }

    const result = await purchases.insertOne({
      ...purchaseData,
      purchasedAt: new Date(),
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}