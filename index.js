const buttons = document.querySelectorAll('[data-carousel-button]')
const slides = document.querySelectorAll(".mySlides");

let slideIndex = 0;
showSlides(slideIndex);
function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
setInterval(() => {showSlides(slideIndex += 1)},3000)

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.carouselButton === 'next') {
      showSlides(slideIndex += 1)
    }else{
      showSlides(slideIndex -= 1)
    }
  })
})