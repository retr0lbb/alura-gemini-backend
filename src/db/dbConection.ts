import { MongoClient } from "mongodb";

export async function connectToDb(connectionString: string) {
	let mongoClient: MongoClient;

	try {
		mongoClient = new MongoClient(connectionString);
		console.log("conectando ao banco de dados...");
		await mongoClient.connect();
		console.log("Conectado ao banco com sucesso");

		return mongoClient;
	} catch (error) {
		console.error("Erro ao conectar ao banco de dados: ", error);
		process.exit(1);
	}
}
