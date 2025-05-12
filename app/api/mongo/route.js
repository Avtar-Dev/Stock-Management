import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

// export async function GET(request) {
//   const uri =
//     "mongodb+srv://avtar92749:avtar92749@cluster0.w6oq7zn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//   // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("management").command({ ping: 1 });
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

//   return NextResponse.json({ a: 34 });
// }

export async function GET(request) {
  const uri =
    "mongodb+srv://avtar92749:avtar92749@cluster0.w6oq7zn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();

    const db = client.db("management"); // your database name
    const collection = db.collection("stocks"); // your collection name

    const data = await collection.find({}).toArray(); // fetch all data

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Mongo error:", error);
    return NextResponse.json({ success: false, error: error.message });
  } finally {
    await client.close();
  }
}
