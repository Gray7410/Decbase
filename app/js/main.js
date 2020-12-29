$(function(){



  
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

menuToggle.onclick = function() {
	menuToggle.classList.toggle('header__burger--active');
	mobileNav.classList.toggle('mobile-nav--active');
}