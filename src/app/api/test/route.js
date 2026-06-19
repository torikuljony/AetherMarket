import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;

  const db = client.db(process.env.DB_NAME);

  await db.collection("user").insertOne({
    message: "MongoDB Connected Hoise Ajke",
    createdAt: new Date(),
  });

  return Response.json({
    success: true,
  });
}