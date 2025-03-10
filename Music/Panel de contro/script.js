// Datos iniciales (simulando una base de datos)
let libros = JSON.parse(localStorage.getItem("libros")) || [];
let categorias = JSON.parse(localStorage.getItem("categorias")) || {
  Cuentos: [],
  Mitos: [],
  Leyendas: [],
  Historia: []
};

// Función para guardar datos en localStorage
function guardarDatos() {
  localStorage.setItem("libros", JSON.stringify(libros));
  localStorage.setItem("categorias", JSON.stringify(categorias));
}

// Función para agregar un libro a la biblioteca principal
document.getElementById("formulario-libro").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const titulo = document.getElementById("titulo-libro").value;
  const imagen = document.getElementById("imagen-libro").value;
  const descarga = document.getElementById("descarga-libro").value;
  const introduccion = document.getElementById("introduccion-libro").value;

  // Crear un nuevo libro
  const nuevoLibro = { titulo, imagen, descarga, introduccion };
  libros.push(nuevoLibro); // Agregar el libro a la lista

  guardarDatos(); // Guardar los datos en localStorage
  actualizarListaLibros(); // Actualizar la lista de libros en la página
  alert("Libro agregado correctamente a la biblioteca principal.");
});

// Función para agregar un libro a una categoría
document.getElementById("formulario-libro-categoria").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const categoria = document.getElementById("categoria-libro").value;
  const titulo = document.getElementById("titulo-libro-categoria").value;
  const imagen = document.getElementById("imagen-libro-categoria").value;
  const descarga = document.getElementById("descarga-libro-categoria").value;
  const introduccion = document.getElementById("introduccion-libro-categoria").value;

  // Crear un nuevo libro
  const nuevoLibro = { titulo, imagen, descarga, introduccion };

  // Agregar el libro a la categoría correspondiente
  if (categorias[categoria]) {
    categorias[categoria].push(nuevoLibro);
    guardarDatos(); // Guardar los datos en localStorage
    actualizarListaCategorias(); // Actualizar la lista de categorías en la página
    alert(`Libro agregado correctamente a la categoría ${categoria}.`);
  } else {
    alert("La categoría seleccionada no existe.");
  }
});

// Función para actualizar la lista de libros
function actualizarListaLibros() {
  const lista = document.getElementById("lista-libros");
  lista.innerHTML = ""; // Limpiar la lista

  // Recorrer todos los libros y mostrarlos
  libros.forEach((libro, index) => {
    const li = document.createElement("li");
    li.textContent = libro.titulo;
    lista.appendChild(li);
  });
}

// Función para actualizar la lista de categorías
function actualizarListaCategorias() {
  const lista = document.getElementById("lista-categorias");
  lista.innerHTML = ""; // Limpiar la lista

  // Recorrer todas las categorías y mostrarlas
  for (const categoria in categorias) {
    const li = document.createElement("li");
    li.textContent = `${categoria} (${categorias[categoria].length} libros)`;
    lista.appendChild(li);
  }
}

// Inicializar la lista de libros y categorías al cargar la página
actualizarListaLibros();
actualizarListaCategorias();
