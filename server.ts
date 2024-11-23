import express from "express";
import z from "zod";
import { connectToDb } from "./src/config/dbConection.js";
import { env } from "./src/utils/env.js";
import postRoutes from "./src/routes/post-routes.js";

const app = express();
app.use(express.static("uploads"));
postRoutes(app);
const port = 3000;

// async function buscarPost(id: number) {
// 	dbDriver;
// }

// app.get("/posts/:id", (request, reply) => {
// 	const id = Number(request.params.id);

// 	const posts = buscarPost(id);
// 	reply.status(200).send(posts);
// 	return;
// });

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
