function checkWidth() {
	let btn = document.querySelector("#btn");
	btn.disabled = true;
	let elem = document.querySelector("#plane");
	let k = '1px';
	if (window.screen.width == 1366) {
	elem.style = 'top:265px';
	k = '1px';
	myMove(k)
}else if (window.screen.width == 1440) {
	elem.style = 'top:155px';
	k = '1px';
	myMove(k)

}else if (window.screen.width == 1536) {
	elem.style = 'top:214px';
	k = '1px';
	myMove(k)

	}
}
function myMove(k) {
	let elem = document.querySelector("#plane");
	let pos = 0;
	let id = setInterval(frame, 10);
	function frame() {
		if (pos == 380) {
			btn.disabled = false;
			clearInterval(id);
		}else {
			pos++;
			elem.style.top = (parseInt(elem.style.top) - parseInt(k)) + 'px';
			elem.style.left = pos + 'px';
		}
	}
}
