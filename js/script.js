// Swiper
const swiper = new Swiper('.portfolio__slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 56,
	//autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.portfolio__arrow_right',
		prevEl: '.portfolio__arrow_left',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,
			autoHeight: true,
		},
		650: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 56,
		},
	},
	/*
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	*/
});

// Таби
const tabNavItems = document.querySelectorAll('.tabs__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});