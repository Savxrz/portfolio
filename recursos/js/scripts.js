window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

const palabras = ["Desarrollador Web 🐸", "Frontend Developer 🐲", "Backend Developer 🐢"];
let index = 0;
let subIndex = 0;
let isDeleting = false;
const velocidadEscritura = 100; // Velocidad al escribir
const velocidadBorrado = 50; // Velocidad al borrar
const pausaEntrePalabras = 1500; // Pausa antes de borrar
const typedText = document.getElementById("typed-text");

function typeEffect() {
  const palabraActual = palabras[index];

  if (!isDeleting) {
      typedText.textContent = palabraActual.substring(0, subIndex++);
  } else {
      typedText.textContent = palabraActual.substring(0, subIndex--);
  }

  let delay = isDeleting ? velocidadBorrado : velocidadEscritura;

  if (!isDeleting && subIndex === palabraActual.length + 1) {
      setTimeout(() => {
          isDeleting = true;
          typeEffect(); // Se llama nuevamente aquí para evitar doble ejecución
      }, pausaEntrePalabras);
      return;
  } else if (isDeleting && subIndex === 0) {
      isDeleting = false;
      index = (index + 1) % palabras.length;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", () => typeEffect());
