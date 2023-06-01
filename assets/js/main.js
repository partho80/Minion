// menu button mobile
const closeButton = document.getElementById('close-menu');

closeButton.addEventListener('click', () => { removeOpenAttribute() });

function removeOpenAttribute() {
    var detailsElements = document.querySelectorAll('details[open]');
    detailsElements.forEach(function (element) {
        element.removeAttribute('open');
    })
};


// footer button
const expand = document.getElementById('FooterCountryList');
const button = document.querySelector('.footer__localization');
// const expand = document.querySelector('.footer__localization');

button.addEventListener('click', function () {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        expand.setAttribute('hidden', 'hidden');
    } else {
        button.setAttribute('aria-expanded', 'true');
        expand.removeAttribute('hidden');
    }
});


// // modal opener
const buttons = document.getElementById("modal-open");

buttons.addEventListener("click", function() {
  const targetElement = document.getElementById("modal");
  targetElement.setAttribute("open", "");
});

//modal closer
const closeButtons = document.getElementById("ModalClose");

closeButtons.addEventListener("click", function() {
  const targetElement = document.getElementById("modal");
  targetElement.removeAttribute("open");
});


// slider
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const product1 = document.getElementById('product-1');
const product2 = document.getElementById('product-2');
const product3 = document.getElementById('product-3');

function activateProduct(product, button) {
  product.classList.add('is-active');
  button.setAttribute('aria-current', 'true');
}

function deactivateProduct(product, button) {
  product.classList.remove('is-active');
  button.removeAttribute('aria-current');
}

button1.addEventListener('click', () => {

  product1.classList.add('is-active');
  button1.setAttribute('aria-current', 'true');
  button2.removeAttribute('aria-current', 'true');
  button3.removeAttribute('aria-current', 'true');
  product2.classList.remove('is-active');
  product3.classList.remove('is-active');

});

button2.addEventListener('click', () => {
  
  product2.classList.add('is-active');
  button2.setAttribute('aria-current', 'true');
  button1.removeAttribute('aria-current', 'true');
  button3.removeAttribute('aria-current', 'true');
  product1.classList.remove('is-active');
  product3.classList.remove('is-active');
});

button3.addEventListener('click', () => {
  
  product3.classList.add('is-active');
  button3.setAttribute('aria-current', 'true');
  button2.removeAttribute('aria-current', 'true');
  button1.removeAttribute('aria-current', 'true');
  product1.classList.remove('is-active');
  product2.classList.remove('is-active');
});


// sticky header
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  const header = document.querySelector('.section-header');
  const headerVartical = document.querySelector('.vertical-menu');
  

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > prevScrollPos) {
    // Scrolling down
    if (scrollTop > 1000) {
      header.classList.add('first-hide');
      headerVartical.removeAttribute('data-menu-opened');
      headerVartical.removeAttribute('open', '');
    }
  } else {
    // Scrolling up
    header.classList.remove('header-hidden', 'first-hide');
    header.classList.add('header-sticky', 'animate');
    headerVartical.removeAttribute('data-menu-opened');
    headerVartical.removeAttribute('open', '');
  }

  if (scrollTop === 0) {
    header.classList.remove('header-sticky', 'animate');
    headerVartical.setAttribute('data-menu-opened', '1');
    headerVartical.setAttribute('open', '');
    
  }

  prevScrollPos = scrollTop;
});

// shop by toggle class
function toggleStableClass() {
  var element = document.querySelector('.vertical-menu__button');
  element.classList.toggle('stable');
}

// slick slider
$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true, // Add dots navigation
    arrows: true, // Hide navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 800 // Set autoplay interval
  });
});



