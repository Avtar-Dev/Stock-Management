// import { MongoClient, ServerApiVersion } from "mongodb";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//   const url =
//     "mongodb+srv://avtar92749:avtar92749@cluster0.w6oq7zn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//   try {
//     const client = await connect();
//     const db = client.db("stock");
//     const inventory = db.collection("inventory");

//     const allProducts = await inventory.find({}).toArray();

//     return NextResponse.json({ allProducts });
//   } catch (error) {
//     console.error("Mongo error:", error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }

// export async function POST(request) {
//   let body = await request.json();
//   const url =
//     "mongodb+srv://avtar92749:avtar92749@cluster0.w6oq7zn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//   const client = new MongoClient(url);
//   try {
//     // await client.connect();

//     const database = client.db("stock"); // your database name
//     const inventory = database.collection("inventory"); // your collection name

//     const product = await inventory.insertOne(body); // fetch all data

//     return NextResponse.json({ product, ok: true });
//   } catch (error) {
//     console.error("Mongo error:", error);
//     return NextResponse.json({ ok: false, error: error.message });
//   }
// }

import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("stock");
    const inventory = db.collection("inventory");

    const allProducts = await inventory.find({}).toArray();

    return NextResponse.json({ success: true, allProducts });
  } catch (error) {
    console.error("Mongo GET error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;

    const db = client.db("stock");
    const inventory = db.collection("inventory");

    const result = await inventory.insertOne(body);

    return NextResponse.json({ ok: true, product: result });
  } catch (error) {
    console.error("Mongo POST error:", error);
    return NextResponse.json({ ok: false, error: error.message });
  }
}
