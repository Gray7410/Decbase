$(function(){
	$('.service-slider__list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<a class="service-slider__arrow service-slider__arrow--left" href="#"></a>',
		nextArrow: '<a class="service-slider__arrow service-slider__arrow--right" href="#"></a>',
	});
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

menuToggle.onclick = function() {
	menuToggle.classList.toggle('header__burger--active');
	mobileNav.classList.toggle('mobile-nav--active');
}