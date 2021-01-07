$(function () {
	$('.service-slider__list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<a class="service-slider__arrow service-slider__arrow--left" href="#"></a>',
		nextArrow: '<a class="service-slider__arrow service-slider__arrow--right" href="#"></a>',
		// centerMode: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

});

$(document).ready(function () {
	var a = 0;
	$(window).scroll(function () {
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},
					{
						duration: 1500,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
			});
			a = 1;
		}
	});
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

menuToggle.onclick = function () {
	menuToggle.classList.toggle('header__burger--active');
	mobileNav.classList.toggle('mobile-nav--active');
}