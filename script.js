//Image Slider
//Selecting slides and buttons
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;

    function showSlide(index) {
      const slideWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
    function showFirstSlide() {
        currentIndex = 0;
        showSlide(currentIndex);
      }

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slider.children.length - 1;
        showSlide(currentIndex);
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slider.children.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
      });

      window.addEventListener('resize', () => showSlide(currentIndex));

      // Display the first image when the page loads
      showFirstSlide();
    });







