import { MONGO_URI } from "@/lib/mongo";
import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

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

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing ID" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("stock");
    const inventory = db.collection("inventory");

    const result = await inventory.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing ID in query" },
        { status: 400 }
      );
    }

    const body = await req.json(); // Read JSON body (e.g., { name: 'Updated', price: 100 })

    await client.connect();

    const db = client.db("stock");
    const inventory = db.collection("inventory");

    const result = await inventory.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    return NextResponse.json({
      success: true,
      modifiedCount: result,
    });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
