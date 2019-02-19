$(function() {

	let qs = (selector) => document.querySelector(selector)
	let qsAll = (selector) => document.querySelectorAll(selector)


	let headerLine = 	qs('.header-line'),
	topMenu = qs('.top-menu').cloneNode(true),
	mobileMenuButton = qs('.mobile-menu-button');
	
	let a= headerLine.insertAdjacentHTML('afterEnd','<div class="mobile-menu d-lg-none"></div>')
	let mobMenu = qs(".mobile-menu");
	
	mobMenu.appendChild(topMenu)
	

	$('.mobile-menu-button').click(function(){
		console.log(topMenu.clientHeight)
		$('.mobile-menu').stop().slideToggle();
	})





	function Menu(options) {
		var elem = options.elem;
	
		elem.onmousedown = function() {
			return false;
		}
	
		elem.onclick = function(event) {
				elem.classList.toggle('open');
		};
	}

	new Menu({
		elem: qs('.classes')
	});

});

  

  










