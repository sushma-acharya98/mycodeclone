// $(document).ready(function() {
//     $('.slider').slick({
//         autoplay: false,
//         autoplaySpeed: 2000, 
//         dots: true, 
//         prevArrow: '<button type="button" class="slick-prev">Previous</button>',
//         nextArrow: '<button type="button" class="slick-next">Next</button>'
//     });
// });
// $('.slider').slick({
//     autoplay: true,
//     arrows: true,
//     dots: false,
//   });
// const slider = document.querySelector('.slider');
// const sliderItems = document.querySelectorAll('.slider-item');

// let currentIndex = 0;

// function slide() {
//   currentIndex = (currentIndex + 1) % sliderItems.length;
//   const offset = -currentIndex * sliderItems[0].clientWidth;
//   slider.style.transform = `translateX(${offset}px)`;
// }

// setInterval(slide, 3000); 

console.log('Hello');

$(document).ready(function(){
  $('.hero_carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
$(document).ready(function(){
  $('.logo_carousel').slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 100,
    infinite: true,
  });
});

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
