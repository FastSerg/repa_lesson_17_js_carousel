
let carousel = null;
let indColor = null;

function createContainer() {
  
  let element = document.createElement('div');
  element.setAttribute('id', 'carousel');
  // element.setAttribute('class', 'carousel');

  document.querySelector('body').appendChild(element);
  
  carousel = document.querySelector('#carousel');
};


function createSlides(n) {
  let ul = document.createElement('ul');
  ul.setAttribute('class', 'slides');

  for(let i = 0; i < n; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');

    i === 0 ? li.setAttribute('class', 'slides__item active') : li.setAttribute('class', 'slides__item')
    link.setAttribute('href','#');
    li.appendChild(link);
    ul.appendChild(li);

  }
  carousel.appendChild(ul);

}

function createIndicators(n) {
  let divIndicators = document.createElement('div');
  divIndicators.setAttribute('class', 'indicators');

  for(let i = 0; i < n; i++) {
    let span = document.createElement('span');
    i === 0 ? span.setAttribute('class', 'indicators__item active') : span.setAttribute('class', 'indicators__item');
    span.setAttribute('data-slide-to', i);
    divIndicators.appendChild(span); 
  }

  carousel.appendChild(divIndicators);
}

function createControls() {
  let divControls = document.createElement('div');
  divControls.setAttribute('class', 'controls');
  carousel.appendChild(divControls);

  for(let i = 0; i < 3; i++) {
    let divItem = document.createElement('div');
    let tagIcon = document.createElement('i');
 
    if(i === 0) {
      divItem.setAttribute('class', 'controls__item controls__prev');
      divItem.innerHTML = 'prev';
      tagIcon.setAttribute('class', 'fas fa-chevron-left');

    } else if(i === 1) {
      divItem.setAttribute('class', 'controls__item controls__next');
      divItem.innerHTML = 'next';
      tagIcon.setAttribute('class', 'fas fa-chevron-right');

    } else {
      divItem.setAttribute('class', 'controls__item controls__pause');
      divItem.innerHTML = 'pause';
      tagIcon.setAttribute('class', 'fas fa-play');
    }
  
    divControls.appendChild(divItem);
    divItem.appendChild(tagIcon);

  }
}


function createStyle() {
  let style = document.createElement('style');
  let styleList = `
  .slides {
    position: relative;
    height: 150px;
    padding: 0px;
    margin: 0px;
    list-style-type: none; 
    margin-bottom: 20px;
  }
  
  .slides__item {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -999;
    transition: opacity 1s;
  }
  
  .active {
    opacity: 1;
  }
  
  .slides__item {
    font-size: 40px;
    padding: 40px;
    box-sizing: border-box;
    background: #333;
    color: #fff;
  }
  
  .slides__item:nth-of-type(1) {
    background: red;
  }
  
  .slides__item:nth-of-type(2) {
    background: orange;
  }
  
  .slides__item:nth-of-type(3) {
    background: green;
  }
  
  .slides__item:nth-of-type(4) {
    background: blue;
  }
  
  .slides__item:nth-of-type(5) {
    background: purple;
  }
  
  .controls {
    position: relative;
    display: inline-block;
    display: flex;
    gap: 20px;
  }
  
  .controls__item {
    
    padding: 10px 20px;
    cursor: pointer;
    background-color: gray;
    margin-top: 10px;
    user-select: none;
  }
  
  .indicators {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .indicators__item {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: steelblue;
  }
  
  .indicators__item.active {
    background-color: red;
  }`;

  style.innerHTML = styleList;
  carousel.appendChild(style);
}


// function indicatorsHandler(e) {
//  let target = e.target
//   if(target.classList.contains('indicators__item')) {
//     target.classList.toggle('active')
//   }

// }
function indicatorsHandler(e) {
  let target = e.target;
   if(target.classList.contains('indicators__item')) {
      target.style.backgroundColor = 'red'; //if(target !== null)classList.remove('active')
     
    } 
    if(indColor !== null) {
      indColor.removeAttribute('style');
    }

   indColor = target;
 }

function setListener() {
  let inct = document.querySelector('div.indicators');
  inct.addEventListener('click', indicatorsHandler)
}


function createCarousel(slidesCount) {
  createContainer(); 
  createSlides(slidesCount)
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener()
}
createCarousel(5);