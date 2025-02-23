window.addEventListener('resize', adjustElementWidth);
window.addEventListener('load', adjustElementWidth);
adjustElementWidth()
function adjustElementWidth() {
  const fixedElement = document.querySelector('#fixed-element');
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  // Применяем ширину без скроллбара
  fixedElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
}