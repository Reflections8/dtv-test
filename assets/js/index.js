const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	navigation: {
		nextEl: 'swiper-button-next',
		prevEl: 'swiper-button-prev',
	 },
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		501: {
			slidesPerView: 2
		},

		651: {
			slidesPerView: 3
		}
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });

 const swiper2 = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	navigation: {
		nextEl: 'swiper-button-next',
		prevEl: 'swiper-button-prev',
	 },
	slidesPerView: 1,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });

//tabs event delegation
 let tabs = document.querySelector('.tabs'),
 	  tabsChildren = tabs.children;
		tabs.onclick = function(event) {
			let target = event.target;
			if (target.classList.contains('tab')) {
				for (let i = 0; i < tabsChildren.length; i++) {
					tabsChildren[i].classList.remove('tab--active');
				}
				target.classList.add('tab--active');
			}
		};

//required inputs (red star)
let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
	if (inputs[i].hasAttribute('placeholder')) {
		console.log(inputs[i].getAttribute('placeholder'));
	}
}

//burger menu
let burgerIcon = document.querySelector('.burger-menu'),
	 burgerMenu = document.querySelector('.mobile-nav');

burgerIcon.addEventListener('click', function() {
	if (burgerIcon.classList.contains('active') && burgerMenu.classList.contains('nav--active')) {
		burgerMenu.classList.remove('nav--active');
		burgerIcon.classList.remove('active');
	} else {
		burgerMenu.classList.add('nav--active');
		burgerIcon.classList.add('active');
	}
});