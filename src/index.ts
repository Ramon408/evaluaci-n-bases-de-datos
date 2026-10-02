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

async function leerLibros(): Promise<void> {
  const libros = await coleccionLibros().find().toArray();

  if (libros.length === 0) {
    console.log("No hay libros cargados en la colección.");
    return;
  }

  console.log(`Libros en la biblioteca (${libros.length}):`);

  libros.forEach((libro) => {
    console.log(
      `- [${libro._id}] ${libro.titulo} | ${libro.autor} | $${libro.precio} | stock: ${libro.stock}`
    );
  });
}

function obtenerLibroDesdeArgumentos(): Libro {
  const [, , , titulo, autor, precio, stock] = process.argv;

  if (!titulo || !autor || !precio || !stock) {
    throw new Error(
      'Uso: node dist/index.js create "Titulo" "Autor" precio stock'
    );
  }

  return {
    titulo,
    autor,
    precio: Number(precio),
    stock: Number(stock)
  };
}

async function conectar(): Promise<void> {
  try {
    await client.connect();

    console.log("Conexión exitosa con MongoDB");

    const operacion = process.argv[2];

    if (operacion === "create") {
       const libro = obtenerLibroDesdeArgumentos();
       await crearLibro(libro);
      }
    if (operacion === "read") {
       await leerLibros();
      }

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

conectar();