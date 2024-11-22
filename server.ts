import express from "express";
import z from "zod";
import { connectToDb } from "./src/db/dbConection.js";
import { env } from "./src/utils/env.js";

const dbDriver = await connectToDb(env.MONGO_URI);

interface Posts {
	id: number;
	desc: string;
	image: string | "none";
}

const posts: Posts[] = [
	{
		id: 1,
		desc: "Gato persa com olhos azuis vibrantes",
		image: "https://placekitten.com/300/400",
	},
	{
		id: 2,
		desc: "Gatinho siamês brincalhão",
		image: "https://placekitten.com/300/400",
	},
	{
		id: 3,
		desc: "Gato preto misterioso",
		image: "https://placekitten.com/300/400",
	},
	{
		id: 4,
		desc: "Gato espreguiçando no sol",
		image: "https://placekitten.com/300/400",
	},
	{
		id: 5,
		desc: "Gato preto misterioso",
		image: "https://placekitten.com/300/400",
	},
	{
		id: 6,
		desc: "Gato espreguiçando no sol",
		image: "https://placekitten.com/300/400",
	},
];

const app = express();

app.use(express.json());
const port = 3000;

async function buscarTodosOsPosts() {
	const db = dbDriver.db("imersao-instabyte");
	const collection = db.collection("posts");

	const posts = await collection.find().toArray();

	return posts;
}

app.get("/posts", async (_request, reply) => {
	const posts = await buscarTodosOsPosts();
	reply.status(200).json({ posts });
	return;
});

async function buscarPost(id: number) {
	dbDriver;
}

app.get("/posts/:id", (request, reply) => {
	const id = Number(request.params.id);

	const posts = buscarPost(id);
	reply.status(200).send(posts);
	return;
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
