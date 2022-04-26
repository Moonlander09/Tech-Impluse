'use strict';


//Navbar 
const navBtn = document.querySelector('.nav-style');
const link = document.querySelector('.nav-links');
navBtn.addEventListener('click',function(){
    navBtn.classList.toggle('nav-open');
link.classList.toggle('navbar-active');
});


//Modal window


const modalOpen = document.querySelector('.about-btn');
const modalClose = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const open = function(e){
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

modalOpen.addEventListener('click',open);
modalClose.addEventListener('click',close);
overlay.addEventListener('click',close)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      close();
    }
  });



//slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length-1;


const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };




  const activateDot = function (slide) {
    document
      .querySelectorAll('.dot')
      .forEach(dot => dot.classList.remove('dot-active'));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('dot-active');
  };


const gotoSlide = function(slide){
    slides.forEach((el,i) => {
        el.style.transform = `translateX(${100*(i-slide)}%)`
    });
};


const nextSlide = function(){
if(curSlide < maxSlide){
    curSlide++;
}
    else{
        curSlide = 0;
    }
    gotoSlide(curSlide);
    activateDot(curSlide);
}

const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide;
    }
        else{
            curSlide--;
        }
        gotoSlide(curSlide);
        activateDot(curSlide);
    
}
const init = function () {
    gotoSlide(0);
    createDots();

    activateDot(0);
  };

  init();


btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

    dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      const { slide } = e.target.dataset;
      gotoSlide(slide);
      activateDot(slide);
    }
  });

  //FAQ

  const faq= document.querySelectorAll('.faq-items');
  
  faq.forEach(el => el.addEventListener('click', function(){
el.classList.toggle('faq-active');
  }));


  // TAB components

  const plans = document.querySelector('.plans-button');
  const plansBtn = document.querySelectorAll('.plans-btn');
  const planContent = document.querySelectorAll('.plans-design-card');

  plans.addEventListener('click',function(e){
      const clicked = e.target.closest('.plans-btn');
      if(!clicked) return;

      if(clicked){
          planContent.forEach(e => e.classList.remove('plans-design-card-active'));
          document.querySelector(`.plans-design-card-${clicked.dataset.tab}`).classList.add('plans-design-card-active');
      }
  });



  // Scroll to about section

  const headerBtn = document.querySelector('.header-btn');
  const aboutSection = document.querySelector('.section-about');

  headerBtn.addEventListener('click', function(){
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

