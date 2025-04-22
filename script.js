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
    // Aplica fade-out
    mensajeElemento.classList.add("fade-out");
    subtituloElemento.classList.add("fade-out");
  
    // Espera que se complete el fade-out antes de cambiar el contenido
    
    setTimeout(() => {
      // Cambia el texto
      mensajeElemento.textContent = mensajes[i].titulo;
      subtituloElemento.textContent = mensajes[i].subtitulo;
  
      // Aplica fade-in (quita la clase)
      mensajeElemento.classList.remove("fade-out");
      subtituloElemento.classList.remove("fade-out");
  
      // Actualiza los puntos
      puntos.forEach((p, idx) => {
        p.classList.toggle("activo", idx === i);
      });
  
    }, 600); // debe ser igual al tiempo del `transition` en CSS
  }
  
  setInterval(() => {
    indice = (indice + 1) % mensajes.length;
    cambiarMensaje(indice);
  }, 7000);
  
  puntos.forEach((punto, i) => {
    punto.addEventListener("click", () => {
      indice = i;
      cambiarMensaje(i);
    });
  });
