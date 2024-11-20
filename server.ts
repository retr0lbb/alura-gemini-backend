import express from "express";

interface Posts {
	id: number;
	desc: string;
	image: string | "none";
}

// https://placecats.com/millie_neo/300/200
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

app.get("/posts", (_request, reply) => {
	reply.status(200).json({ posts });
	return;
});

function buscarPost(id: number) {
	return posts.filter((value) => value.id === id);
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
