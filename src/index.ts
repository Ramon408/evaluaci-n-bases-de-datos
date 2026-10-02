import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URI);

async function conectar(): Promise<void> {
  try {
    await client.connect();
    console.log("Conexión exitosa con MongoDB");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
  } finally {
    await client.close();
  }
}

conectar();