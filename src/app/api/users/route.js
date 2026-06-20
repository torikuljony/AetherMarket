import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// CREATE USER
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
      createdAt: new Date(),
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// GET USER BY EMAIL
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}