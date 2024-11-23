import type { Response, Request } from "express";
import {
	buscarTodosOsPosts,
	CreatePost,
	postSchema,
} from "../models/post-model.js";
import fs from "fs";

export async function listarTodosOsPosts(request: Request, reply: Response) {
	const posts = await buscarTodosOsPosts();
	reply.status(200).json({ posts });
	return;
}

export async function inserirNovoPost(request: Request, reply: Response) {
	const { description, imgAlt, imgUrl } = postSchema.parse(request.body);

	try {
		const newPost = await CreatePost({ description, imgAlt, imgUrl });
		reply
			.status(200)
			.json({ message: "Post Criado com sucesso", data: newPost });
	} catch (error) {
		reply.status(500).send("Internal server error");
		console.error(error);
		return;
	}
}

export async function uploadImageToDb(request: Request, reply: Response) {
	try {
		if (!request.file) {
			return;
		}
		const createdPost = await CreatePost({
			description: "Descrição fodinha da imagem",
			imgAlt: "alt da imagem",
			imgUrl: request.file.originalname,
		});

		const atualImage = `uploads/${createdPost.insertedId}.png`;

		fs.renameSync(request.file.path, atualImage);
		reply.status(200).json(createdPost);
	} catch (error) {
		reply.status(500).send("Internal server error");
		console.error(error);
		return;
	}
}
