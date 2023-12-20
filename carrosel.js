document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const indicatorsContainer = document.getElementById('indicators-container');
  const indicators = [];

  const carouselItems = document.querySelectorAll('.carousel-item');

  carouselItems.forEach((item, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    indicators.push(indicator);
    indicatorsContainer.appendChild(indicator);
  });

  let currentIndex = 0;
  let intervalId;

  function startCarousel() {
    intervalId = setInterval(() => {
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }, 3500);
  }

  function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  startCarousel();
});