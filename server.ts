import express from "express";

const app = express();
const port = 3000;

app.get("/api", (_request, reply) => {
	reply.status(200).send("server response");
	return;
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
