(function() {
  var Nav;

  Nav = {
    init: function() {
      this.setup();
      return this.uiBind();
    },
    setup: function() {
      return $('#mainnav').find('li:not(:last-child)').toggleClass('invisible');
    },
    uiBind: function() {
      return $(document).on('click', '#mainnav', function(e) {
        e.preventDefault();
        return $(this).find('li:not(:last-child)').toggleClass('animate').toggleClass('invisible');
      });
    }
  };

  Nav.init();

}).call(this);
// se llama al declarar


// Selecciona el div
const cuadro = document.querySelector('.cuadro_negroMid');

// Función para verificar si el elemento está en la ventana visible
function mostrarCuadro() {
    const rect = cuadro.getBoundingClientRect();
    const enVista = (
        rect.top >= -500 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );

    // Si el cuadro está en la ventana visible, añade la clase 'visible'
    if (enVista) {
        cuadro.classList.add('visible');
    } else {
        // Si no está en la ventana visible, quita la clase 'visible'
        cuadro.classList.remove('visible');
    }
}

// Escucha el evento de scroll
window.addEventListener('scroll', mostrarCuadro);

// Ejecuta la función al cargar la página para verificar si el cuadro ya está visible
mostrarCuadro();

// Seleccionar elementos del DOM
const carruselInner = document.querySelector('.carrusel-inner');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');

let currentIndex = 0;

// Función para mover el carrusel
function moveCarrusel(direction) {
    const totalItems = document.querySelectorAll('.carrusel-item').length;

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }

    const offset = -currentIndex * 100;
    carruselInner.style.transform = `translateX(${offset}%)`;
}

// Eventos para los botones
prevBtn.addEventListener('click', () => moveCarrusel('prev'));
nextBtn.addEventListener('click', () => moveCarrusel('next'));



