import { connectToDb } from "../db/dbConection.js";
import { env } from "../utils/env.js";

const dbDriver = await connectToDb(env.MONGO_URI);

export async function buscarTodosOsPosts() {
	const db = dbDriver.db("imersao-instabyte");
	const collection = db.collection("posts");

	const posts = await collection.find().toArray();

	return posts;
}
