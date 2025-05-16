import { MONGO_URI } from "@/lib/mongo";
import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

const uri = MONGO_URI;
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    const body = await request.json();
    await client.connect();
    const db = client.db("stock");
    const inventory = db.collection("inventory");
    const product = await inventory.insertOne(body);

    return NextResponse.json({ success: true, product });
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

export async function GET() {
  try {
    await client.connect();
    const db = client.db("stock");
    const inventory = db.collection("inventory");
    const query = {};
    const allProducts = await inventory.find(query).toArray();

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
