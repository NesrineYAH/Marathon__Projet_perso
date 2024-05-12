let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-images img");
const totalSlides = slides.length; //9

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${200 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

showSlide(currentIndex);

function openSidebar() {
  document.querySelector(".sidebar").style.width = "45%";
}

function closeSidebar() {
  document.querySelector(".sidebar").style.width = "0";
}
