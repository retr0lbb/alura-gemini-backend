import express, { type Express } from "express";
import { listarTodosOsPosts } from "../controllers/list-all-posts-controller.js";

const routes = (app: Express) => {
	app.use(express.json());

	app.get("/posts", listarTodosOsPosts);
};

export default routes;
