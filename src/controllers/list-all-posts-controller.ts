import type { Response, Request } from "express";
import { buscarTodosOsPosts } from "../models/post-model.js";

export async function listarTodosOsPosts(request: Request, reply: Response) {
	const posts = await buscarTodosOsPosts();
	reply.status(200).json({ posts });
	return;
}
