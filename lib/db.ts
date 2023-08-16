import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://nicholashibbits:cqlotQQ7QjMN07YJ@cluster0.qhrjk8k.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

export async function connnectToDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const _client = await new MongoClient(uri).connect();

    return _client;
  } catch (error: any) {
    console.log("❌ Error", error);
  }
}
