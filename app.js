const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	
	burger.addEventListener('click', () => {

		/*TOGGLE NAV*/
			nav.classList.toggle('nav-active');


		/*ANIMATE LINKS*/
			navLinks.forEach((link, index) => {
				if(link.style.animation) {
					link.style.animation = ''
				}

				else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
				}
			});


		/*TOGGLE BURGER ANIMATION*/
		burger.classList.toggle('toggle');
	});

}

navSlide();