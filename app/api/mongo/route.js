// import { MongoClient, ServerApiVersion } from "mongodb";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//   const uri =
//     "mongodb+srv://avtar92749:avtar92749@cluster0.w6oq7zn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   try {
//     // await client.connect();

//     const db = client.db("management"); // your database name
//     const collection = db.collection("stocks"); // your collection name

//     const data = await collection.find({}).toArray(); // fetch all data

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     console.error("Mongo error:", error);
//     return NextResponse.json({ success: false, error: error.message });
//   } finally {
//     await client.close();
//   }
// }
