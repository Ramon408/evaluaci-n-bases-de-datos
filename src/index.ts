import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URI);

interface Libro {
  titulo: string;
  autor: string;
  precio: number;
  stock: number;
}

function coleccionLibros() {
  return client.db("biblioteca").collection<Libro>("libros");
}

async function crearLibro(libro: Libro): Promise<void> {
  const resultado = await coleccionLibros().insertOne(libro);

  console.log("Libro creado con ID:", resultado.insertedId.toString());
}

async function conectar(): Promise<void> {
  try {
    await client.connect();

    console.log("Conexión exitosa con MongoDB");

    const libro: Libro = {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      precio: 5000,
      stock: 10
    };

    await crearLibro(libro);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

conectar();