$(function () {

	let qs = (selector) => document.querySelector(selector)
	let qsAll = (selector) => document.querySelectorAll(selector)


	let headerLine = qs('.header-line'),
		topMenu = qs('.top-menu').cloneNode(true),
		mobileMenuButton = qs('.mobile-menu-button');

	let a = headerLine.insertAdjacentHTML('afterEnd', '<div class="mobile-menu d-lg-none"></div>')
	let mobMenu = qs(".mobile-menu");

	mobMenu.appendChild(topMenu)


	$('.mobile-menu-button').click(function () {
		console.log(topMenu.clientHeight)
		$('.mobile-menu').stop().slideToggle();
	})





	function Menu(options) {
		var elem = options.elem;
		elem.onmousedown = function () {
			return false;
		}
		elem.onclick = function (event) {
			elem.classList.toggle('open');
		};
	}
	new Menu({ elem: qs('.classes') });


	let likeTrainers = qs('.our-trainers');

	likeTrainers.onclick = function (e) {
		if (e.target.className == 'fa fa-heart') {
			e.preventDefault();
			e.target.style.color = e.target.style.color == 'red' ? '' : 'red';
		}
		if (e.target.className == 'fa fa-thumbs-up') {
			e.preventDefault();
			e.target.style.color = e.target.style.color == 'rgb(2, 158, 198)' ? '' : 'rgb(2, 158, 198)';
		}
	}


	$(document).ready(function(){
		$('.our-trainers').owlCarousel({
		// loop:true,
    pagination:false,
    nav:true,
    items:2,
		navText:"",
		responsiveClass: true,
		responsive: {
			0: {
				items : 1
			},
			400: {
				items : 2
			},
			768: {
				items : 3
			},
			992: {
				items : 2
			}
		}
		})
		
	});





});














