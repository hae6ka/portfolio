const IconMenu = document.querySelector('.header__icon');
const iconCancel = document.querySelector('.header__icon-cancel');

//form

const button = document.querySelector('.contacts__button');

const button2 = document.querySelector('.form__button');

if(button) {
	const form = document.querySelector('.form');

	button2.addEventListener("click", function (e) {
		form.classList.toggle('_IsNotActive2');
	});
}

if(button2) {
	const form = document.querySelector('.form');

	button.addEventListener("click", function (e) {
		form.classList.toggle('_IsNotActive2');
	});
}

if(IconMenu) {
	const menu = document.querySelector('.header');
	IconMenu.addEventListener("click", function (e) {
		menu.classList.toggle('_IsNotActive');
		IconMenu.classList.toggle('_IsNotActive');
		iconCancel.classList.toggle('_IsNotActive');
	});
}

if(iconCancel) {
	const menu = document.querySelector('.header');
	iconCancel.addEventListener("click", function (e) {
		menu.classList.toggle('_IsNotActive');
		IconMenu.classList.toggle('_IsNotActive');
		iconCancel.classList.toggle('_IsNotActive');
	});
}


//AOS

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });