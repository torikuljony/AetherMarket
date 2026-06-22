import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const userData = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({
      email: userData.email,
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 200 }
      );
    }

    const result = await usersCollection.insertOne({
      ...userData,
      membership: "free",
      createdAt: new Date(),
    });

    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const user = await db.collection("users").findOne({
      email,
    });

    return NextResponse.json(user || {});
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}