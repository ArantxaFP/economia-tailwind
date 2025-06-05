/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  /**
   * Detectar la pàgina activa a la navegació
   */
  const currentPath = window.location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/index\.html$/, "").replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  /**
   * Carrusel funcional sense Bootstrap
   */
  document.addEventListener("DOMContentLoaded", () => {
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = slideContainer.querySelectorAll("img");
    const totalSlides = slides.length;
    let index = 0;
  
    const updateSlide = () => {
      slideContainer.style.transform = `translateX(-${index * 100}%)`;
    };
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      updateSlide();
    });
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlide();
    });
  });
  
})();
