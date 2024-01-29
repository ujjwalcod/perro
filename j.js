let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}
setInterval(() => nextSlide(), 5000);