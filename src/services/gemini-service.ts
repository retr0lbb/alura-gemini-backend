import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../utils/env.js";

const genIa = new GoogleGenerativeAI(env.GOOGLE_IA);
const model = genIa.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoGemini(imageBuffer: Buffer) {
	const prompt =
		"Gere uma descrição em formato de legenda de post em português do brasil para a seguinte imagem";

	try {
		const image = {
			inlineData: {
				data: imageBuffer.toString("base64"),
				mimeType: "image/png",
			},
		};

		const res = await model.generateContent([prompt, image]);
		return res.response.text() || "Alt-text não disponivel";
	} catch (error) {
		console.error("Erro ao obter alt", error);
		throw new Error("Erro ao obter o alt-text do Gemini");
	}
}
