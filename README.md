# CRUD de Libros con MongoDB


Aplicación de consola desarrollada en TypeScript para administrar una colección de libros utilizando MongoDB.


## Descripción


El proyecto permite realizar las operaciones básicas de un CRUD:


- Crear libros

- Consultar libros

- Actualizar libros

- Eliminar libros


La aplicación utiliza una base de datos llamada `biblioteca` y una colección llamada `libros`.


## Tecnologías utilizadas


- TypeScript

- Node.js

- MongoDB

- MongoDB Node.js Driver

- Git

- GitHub


## Estructura de los libros


Cada libro contiene los siguientes datos:


- `titulo`

- `autor`

- `precio`

- `stock`


## Instalación


### 1. Clonar el repositorio


```bash

git clone https://github.com/Ramon408/evaluaci-n-bases-de-datos.git

```


### 2. Ingresar al proyecto


```bash

cd evaluaci-n-bases-de-datos

```


### 3. Instalar las dependencias


```bash

npm install

```


## Configuración de MongoDB


El proyecto utiliza MongoDB en:


```text

mongodb://127.0.0.1:27017

```


La base de datos utilizada es:


```text

biblioteca

```


La colección utilizada es:


```text

libros

```


Es necesario tener MongoDB Server instalado y ejecutándose antes de utilizar la aplicación.


Para comprobar que MongoDB está instalado:


```bash

mongod --version

```


Para iniciar MongoDB:


```bash

mongod

```


## Compilar el proyecto


Para compilar el código TypeScript:


```bash

npm run build

```


Los archivos compilados se generan en la carpeta `dist`.


## Operaciones CRUD


### CREATE - Crear un libro


Para crear un libro:


```bash

node dist/index.js create "El Principito" "Antoine de Saint-Exupéry" 15000 10

```


La estructura del comando es:


```text

node dist/index.js create "titulo" "autor" precio stock

```


Ejemplo:


```bash

node dist/index.js create "El Hobbit" "J.R.R. Tolkien" 15000 10

```


Al crear un libro, MongoDB genera automáticamente un `ObjectId`.


### READ - Consultar los libros


Para mostrar todos los libros almacenados:


```bash

node dist/index.js read

```


La aplicación muestra todos los libros de la colección `libros`.


Ejemplo:


```text

Libros en la biblioteca:


- [ObjectId] El Principito | Antoine de Saint-Exupéry | $5000 | stock: 10

- [ObjectId] El Hobbit | J.R.R. Tolkien | $15000 | stock: 10

```


### UPDATE - Actualizar un libro


Para actualizar un libro se utiliza su `ObjectId`:


```bash

node dist/index.js update ID "El Hobbit" "J.R.R. Tolkien" 18000 15

```


La estructura del comando es:


```text

node dist/index.js update ID "titulo" "autor" precio stock

```


Ejemplo:


```bash

node dist/index.js update ID "El Hobbit" "J.R.R. Tolkien" 18000 15

```


La aplicación modifica el libro y muestra el libro actualizado en consola.


### DELETE - Eliminar un libro


Para eliminar un libro se utiliza su `ObjectId`:


```bash

node dist/index.js delete ID

```


Ejemplo:


```bash

node dist/index.js delete ID

```


La aplicación informa si el libro fue eliminado correctamente.


## Estructura de la base de datos


```text

MongoDB

│

└── biblioteca

    │

    └── libros

        │

        ├── _id

        ├── titulo

        ├── autor

        ├── precio

        └── stock

```


## Ejemplo completo de uso


### Crear


```bash

node dist/index.js create "El Hobbit" "J.R.R. Tolkien" 15000 10

```


### Leer


```bash

node dist/index.js read

```


### Actualizar


```bash

node dist/index.js update ID "El Hobbit" "J.R.R. Tolkien" 18000 15

```


### Eliminar


```bash

node dist/index.js delete ID

```


## Flujo de funcionamiento


```text

Usuario

   │

   │ Argumentos de línea de comandos

   ▼

Aplicación TypeScript

   │

   │ MongoDB Driver

   ▼

MongoDB

   │

   └── biblioteca

        │

        └── libros

```


## Validación de ObjectId


Las operaciones de actualización y eliminación utilizan `ObjectId` para identificar los documentos de MongoDB.


Si se ingresa un ID inválido, la aplicación informa que el ID ingresado no es válido.


## Objetivo del proyecto


El objetivo es desarrollar una aplicación de consola en TypeScript que permita administrar una colección de libros utilizando MongoDB.


El proyecto permite aplicar las cuatro operaciones principales de un CRUD:


- **Create:** creación de documentos.

- **Read:** consulta de documentos.

- **Update:** modificación de documentos.

- **Delete:** eliminación de documentos.


## Autor


**Ramón More**