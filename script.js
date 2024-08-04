//Image Slider
//selecting slides
document.addEventListener('DOMContentLoaded', ( showSlide) => {
    const slides= document.querySelector(".slides");
    const images=document.querySelectorAll(".slides img");

//selecting buttons
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
  let slideIndex=0;

  function showSlide(index) {
    if(index>=images.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=images.length -1;
    }
    else{
        slideIndex=index;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;     
  }
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
prev.addEventListener('click', (prevSlide) => showSlide(slideIndex - 1));
next.addEventListener('click', (nextSlide) => showSlide(slideIndex + 1));

//Auto-slide 
setInterval(()=>showSlide(slideIndex+1),5000);
});