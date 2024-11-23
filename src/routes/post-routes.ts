import express, { type Express } from "express";
import multer from "multer";
import {
	listarTodosOsPosts,
	inserirNovoPost,
	uploadImageToDb,
	atualizarPost,
} from "../controllers/posts-controller.js";

const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
const upload = multer({
	dest: "./uploads",
	storage: multerStorage,
});

const routes = (app: Express) => {
	app.use(express.json());

	app.get("/posts", listarTodosOsPosts);
	app.post("/posts", inserirNovoPost);
	app.post("/upload", upload.single("imagem"), uploadImageToDb);
	app.put("/upload/:id", atualizarPost);
};

export default routes;
