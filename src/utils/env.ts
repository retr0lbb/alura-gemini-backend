import { z } from "zod";

const envSchema = z.object({
	MONGO_URI: z.string().min(1),
	GOOGLE_IA: z.string().min(1),
});

export const env = envSchema.parse(process.env);
