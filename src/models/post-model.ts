import { ObjectId } from "mongodb";
import { connectToDb } from "../config/dbConection.js";
import { env } from "../utils/env.js";
import z from "zod";

const dbDriver = await connectToDb(env.MONGO_URI);
const db = dbDriver.db("imersao-instabyte");
const collection = db.collection("posts");

export const postSchema = z.object({
	description: z.string().max(255).nullable(),
	imgUrl: z.string().url(),
	imgAlt: z.string(),
});

export async function buscarTodosOsPosts() {
	const posts = await collection.find().toArray();

	return posts;
}

export async function CreatePost(post: z.infer<typeof postSchema>) {
	const createdPost = collection.insertOne(post);
	return createdPost;
}

export async function atualizaPOst(
	postId: string,
	post: z.infer<typeof postSchema>,
) {
	const objectId = ObjectId.createFromHexString(postId);

	return collection.updateOne({ _id: new ObjectId(objectId) }, { $set: post });
}
