;(function(){
	var body = document.body,
		btn = body.querySelector('.ba-toggle'),
		menu = body.querySelector('.ba-menu'),
		overlay = body.querySelector('.ba-overlay');

	btn.onclick = function(){
		body.classList.toggle('ba-menu-open');
	};
	overlay.onclick = function(){
		body.classList.toggle('ba-menu-open');
	};
	menu.onclick = function(){
		body.classList.remove('ba-menu-open');
	};

})();

