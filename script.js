const mensajes = [
  {
    titulo: "Bienvenido a Umbra TCG",
    subtitulo: "Tu aventura TCG comienza aquí."
  },
  {
    titulo: "¡Explora nuestras cartas más exclusivas!",
    subtitulo: "Ediciones limitadas y bundles especiales."
  },
  {
    titulo: "Nuevos productos cada semana",
    subtitulo: "No te pierdas las novedades que llegan cada lunes."
  }
];

let indice = 0;
const mensajeElemento = document.getElementById("mensaje");
const subtituloElemento = document.querySelector(".banner-contenido p");
const puntos = document.querySelectorAll(".punto");

function cambiarMensaje(i) {
  // Desvanece
  mensajeElemento.style.opacity = "0";
  subtituloElemento.style.opacity = "0";

  setTimeout(() => {
    // Cambia el contenido
    mensajeElemento.textContent = mensajes[i].titulo;
    subtituloElemento.textContent = mensajes[i].subtitulo;

    // Vuelve a aparecer
    mensajeElemento.style.opacity = "1";
    subtituloElemento.style.opacity = "1";

    // Actualiza puntos
    puntos.forEach((p, idx) => {
      p.classList.toggle("activo", idx === i);
    });

  }, 400); // tiempo del fade-out
}

// Cambio automático cada 7 segundos
setInterval(() => {
  indice = (indice + 1) % mensajes.length;
  cambiarMensaje(indice);
}, 7000);

// Cambio manual con los puntos
puntos.forEach((punto, i) => {
  punto.addEventListener("click", () => {
    indice = i;
    cambiarMensaje(indice);
  });
});
