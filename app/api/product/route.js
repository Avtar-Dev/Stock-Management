import { MONGO_URI } from "@/lib/mongo";
import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const uri = MONGO_URI;
  console.log("MONGO_URI:", uri);

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    const body = await request.json();
    console.log("Received body:", body);

    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("stock");
    const inventory = db.collection("inventory");

    const product = await inventory.insertOne(body);
    console.log("Product inserted:", product);

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  // const client = new MongoClient(uri);
  try {
    console.log("zzz");

    const db = client.db("stock");
    const inventory = db.collection("inventory");
    const query = {};
    const allProducts = await inventory.find(query).toArray();
    console.log("abc", allProducts);

    return NextResponse.json({ success: true, products: allProducts });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
