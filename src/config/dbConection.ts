import { MongoClient } from "mongodb";

let mongoClient: MongoClient | null = null;

export async function connectToDb(connectionString: string) {
	if (mongoClient !== null) {
		console.log("Alredy existing a open conection");
		return mongoClient;
	}

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
