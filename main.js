const slides = document.querySelectorAll('.slide__item');
const indicators = document.querySelectorAll('.indicators__item');
const pauseBtn = document.querySelector('.controls__pause');
const prevBtn = document.querySelector('.controls__prev');
const nextBtn = document.querySelector('.controls__next');

console.log(nextBtn);

let currentSlide = 0;
let isPlaing = true;
let timerID = null;
let interval = 1000;


function goTotSlide(n) {
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
}

function prevSlide() {
  goTotSlide(currentSlide - 1);
}

function nextSlide() {
  goTotSlide(currentSlide + 1);
}

function pause() {
  clearInterval(timerID);
  isPlaing = false;
  pauseBtn.innerHTML = 'Play'
}

function play() {
  timerID = setInterval(nextSlide, interval);
  isPlaing = true;
  pauseBtn.innerHTML = 'Pause'
}

function pausePlay() {
  if(isPlaing) {
    pause()
  } else {
    play()
  } 
}

function next() {
  nextSlide();
  pause()
}

function prev() {
  prevSlide();
  pause();
}

function indicate() {
  const id = +this.getAttribute('data-slide-to');
  goTotSlide(id);
  pause();
}

pauseBtn.addEventListener('click', pausePlay);
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
indicators.forEach((el) => {
  el.addEventListener('click', indicate)
});

timerID = setInterval(nextSlide, interval);

