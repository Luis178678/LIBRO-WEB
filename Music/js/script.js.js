// #Datos de los libros (biblioteca principal)
const libros = JSON.parse(localStorage.getItem("libros")) || [
    { titulo: "Libro 1", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/libro1", introduccion: "Introducción del Libro 1." },
    { titulo: "Libro 2", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/libro2", introduccion: "Introducción del Libro 2." },
    { titulo: "Libro 3", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/libro3", introduccion: "Introducción del Libro 3." },
    { titulo: "Libro 4", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/libro4", introduccion: "Introducción del Libro 4." }
  ];
  
  // #Datos de las categorías
  const categorias = JSON.parse(localStorage.getItem("categorias")) || {
    Cuentos: [
      { titulo: "Cuento 1", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/cuento1", introduccion: "Introducción del Cuento 1." },
      { titulo: "Cuento 2", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/cuento2", introduccion: "Introducción del Cuento 2." },
    ],
    Mitos: [
      { titulo: "Mito 1", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/mito1", introduccion: "Introducción del Mito 1." },
      { titulo: "Mito 2", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/mito2", introduccion: "Introducción del Mito 2." },
    ],
    Leyendas: [
      { titulo: "Leyenda 1", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/leyenda1", introduccion: "Introducción de la Leyenda 1." },
      { titulo: "Leyenda 2", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/leyenda2", introduccion: "Introducción de la Leyenda 2." },
    ],
    Historia: [
      { titulo: "Historia 1", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/historia1", introduccion: "Introducción de la Historia 1." },
      { titulo: "Historia 2", imagen: "https://via.placeholder.com/150", descarga: "https://drive.google.com/historia2", introduccion: "Introducción de la Historia 2." },
    ],
  };
  
  // #Variable para almacenar el enlace de descarga actual
  let enlaceDescargaActual = "";
  
  // #Variable para almacenar los datos del usuario
  let datosUsuario = { nombre: "", telefono: "" };
  
  // #Variable para controlar el desbloqueo
  let descargaDesbloqueada = false;
  
  // #Función para mostrar libros en la página 3
  function mostrarLibros(librosMostrar = libros) {
    const contenedorLibros = document.getElementById("contenedor-libros");
    contenedorLibros.innerHTML = "";
  
    librosMostrar.slice(0, 3).forEach(libro => {
      const libroHTML = `
        <div class="libro">
          <div class="barra-titulo">${libro.titulo}</div>
          <img src="${libro.imagen}" alt="${libro.titulo}">
          <div class="barra-informacion" data-introduccion="${libro.introduccion}">Ver información del libro</div>
          <button class="descargar" data-enlace="${libro.descarga}">Descargar</button>
        </div>
      `;
      contenedorLibros.innerHTML += libroHTML;
    });
  
    // #Agregar evento para mostrar la información del libro
    document.querySelectorAll(".barra-informacion").forEach(barra => {
      barra.addEventListener("click", () => {
        const introduccion = barra.getAttribute("data-introduccion");
        document.getElementById("info-libro").textContent = introduccion;
        document.getElementById("pagina3").style.display = "none";
        document.getElementById("pagina6").style.display = "flex";
      });
    });
  
    // #Agregar evento para el botón de descarga
    document.querySelectorAll(".descargar").forEach(boton => {
      boton.addEventListener("click", () => {
        enlaceDescargaActual = boton.getAttribute("data-enlace");
        document.getElementById("pagina3").style.display = "none";
        document.getElementById("pagina4").style.display = "flex";
      });
    });
  }
  
  // #Función para mostrar libros por categoría
  function mostrarLibrosCategoria(categoria) {
    const librosCategoria = categorias[categoria];
    const contenedorLibros = document.getElementById("contenedor-libros-categoria");
    contenedorLibros.innerHTML = "";
  
    librosCategoria.forEach(libro => {
      const libroHTML = `
        <div class="libro">
          <div class="barra-titulo">${libro.titulo}</div>
          <img src="${libro.imagen}" alt="${libro.titulo}">
          <div class="barra-informacion" data-introduccion="${libro.introduccion}">Ver información del libro</div>
          <button class="descargar" data-enlace="${libro.descarga}">Descargar</button>
        </div>
      `;
      contenedorLibros.innerHTML += libroHTML;
    });
  
    // #Agregar evento para mostrar la información del libro
    document.querySelectorAll(".barra-informacion").forEach(barra => {
      barra.addEventListener("click", () => {
        const introduccion = barra.getAttribute("data-introduccion");
        document.getElementById("info-libro").textContent = introduccion;
        document.getElementById("pagina7").style.display = "none";
        document.getElementById("pagina6").style.display = "flex";
      });
    });
  
    // #Agregar evento para el botón de descarga
    document.querySelectorAll(".descargar").forEach(boton => {
      boton.addEventListener("click", () => {
        enlaceDescargaActual = boton.getAttribute("data-enlace");
        document.getElementById("pagina7").style.display = "none";
        document.getElementById("pagina4").style.display = "flex";
      });
    });
  }
  
  // #Navegación entre páginas
  document.getElementById("continuar1").addEventListener("click", () => {
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "flex";
  });
  
  // #Botón "Registrarse"
  document.getElementById("registrarse").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensajeError = document.getElementById("mensaje-error");
  
    // Validar si los campos están vacíos
    if (nombre === "" || telefono === "") {
      mensajeError.style.display = "block"; // Mostrar mensaje de error
    } else {
      mensajeError.style.display = "none"; // Ocultar mensaje de error
      datosUsuario.nombre = nombre;
      datosUsuario.telefono = telefono;
  
      // Navegar a la página 3
      document.getElementById("pagina2").style.display = "none";
      document.getElementById("pagina3").style.display = "flex";
      mostrarLibros(libros); // #Mostrar los primeros 3 libros
    }
  });
  
  // #Botón para volver a la página 3
  document.getElementById("volver").addEventListener("click", () => {
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina3").style.display = "flex";
  });
  
  // #Botón para volver a la página 3 desde la página 6
  document.getElementById("volver-info").addEventListener("click", () => {
    document.getElementById("pagina6").style.display = "none";
    document.getElementById("pagina3").style.display = "flex";
  });
  
  // #Botón "Hecho el pago"
  document.getElementById("hecho-pago").addEventListener("click", () => {
    console.log("Datos del usuario que confirmó el pago:");
    console.log(`Nombre: ${datosUsuario.nombre}`);
    console.log(`Número de teléfono: ${datosUsuario.telefono}`);
  
    // Navegar a la página 5
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina5").style.display = "flex";
  
    // Ocultar el botón "Ingresar" al inicio
    document.getElementById("contenedor-ingresar").style.display = "none";
  
    // Mostrar el loader
    const loader = document.querySelector(".loader");
    loader.style.display = "flex";
  
    // Temporizador de 60 segundos
    setTimeout(() => {
      // Ocultar el loader después de 60 segundos
      loader.style.display = "none";
  
      // Mostrar el botón "Ingresar"
      document.getElementById("contenedor-ingresar").style.display = "flex";
    }, 60000); // 60 segundos
  });
  
  // #Botón "Ingresar"
  document.getElementById("ingresar").addEventListener("click", () => {
    if (descargaDesbloqueada && enlaceDescargaActual) {
      window.open(enlaceDescargaActual, "_blank"); // #Redirigir al enlace de descarga
    } else {
      console.log("La descarga no está desbloqueada.");
      alert("La descarga no está desbloqueada. Completa el proceso de pago."); // Notificación al usuario
    }
  });
  
  // #Buscador de libros
  document.getElementById("buscar").addEventListener("input", (e) => {
    const busqueda = e.target.value.toLowerCase();
    const librosFiltrados = libros.filter(libro => libro.titulo.toLowerCase().includes(busqueda));
    mostrarLibros(librosFiltrados);
  });
  
  // #Eventos para las categorías
  document.querySelectorAll(".categoria").forEach(categoria => {
    categoria.addEventListener("click", () => {
      const nombreCategoria = categoria.getAttribute("data-categoria");
      document.getElementById("titulo-categoria").textContent = nombreCategoria;
      document.getElementById("pagina3").style.display = "none";
      document.getElementById("pagina7").style.display = "flex";
      mostrarLibrosCategoria(nombreCategoria);
    });
  });
  
  // #Botón para volver a la página 3 desde la página 7
  document.getElementById("volver-categoria").addEventListener("click", () => {
    document.getElementById("pagina7").style.display = "none";
    document.getElementById("pagina3").style.display = "flex";
  });
  
  // #Función para desbloquear la descarga (desde la consola)
  function desbloquearDescarga() {
    descargaDesbloqueada = true;
    console.log("Descarga desbloqueada. El usuario puede ingresar.");
    alert("Descarga desbloqueada. El usuario puede ingresar."); // #Notificación adicional
  }
  