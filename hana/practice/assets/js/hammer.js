;((global) => {
	//쿼리 셀렉터를 이용해 캔바스를 불러움
	let prac = document.querySelector('canvas');
	console.log(prac);
	//캔바스에 2d그림을 그리는 걸 집어넣음
	let p = prac.getContext("2d")

	// 해상도 뚜렷하게
	const d = window.devicePixelRatio;
	const w = p.canvas.width;
	const h = p.canvas.height;
	p.canvas.width = w * d;
	p.canvas.height = h * d;
 //    pcan.style.cssText = `
 //    	width: ${w}px;
 //    	height: ${h}px;
 //    	`;
  	p.canvas.style.cssText = "width: 600px; height: 300px";
    p.scale(2,2);




	//원 4개가 같은 사이즈로 반복 나열 되어있음.
	//for 문을 이용한다.

	
	let centerX = w/2;
	let centerY = h/2;
	let rad = 30;
	//360도 입력하게 하는 것
	function degree(d = 360) {
		return Math.PI / 180 * d;
	}
	p.beginPath();
	p.fillStyle = 'hsla(334,78%,50%,1)';
	p.arc(centerX, centerY, 50+rad*4, 0, degree(360), false);
	p.closePath();
	p.fill();


	p.beginPath();
	p.fillStyle = 'hsla(334,84%,60%,1)';
	p.arc(centerX, centerY, 50+rad*3, 0, degree(360), false);
	p.closePath();
	p.fill();
	

	p.beginPath();
	p.fillStyle = 'hsla(334,90%,70%,1)';
	p.arc(centerX, centerY, 50+rad*2, 0, degree(360), false);
	p.closePath();
	p.fill();
	

	p.beginPath();
	p.fillStyle = 'hsla(334,96%,80%,1)';

	p.arc(centerX, centerY, 50+rad, 0, degree(360), false);
	p.closePath();
	p.fill();


	const ham = document.createElement('img');
	let hamw = 80;
	let hamh = 80;
	ham.setAttribute('src','assets/img/img.png');
	ham.setAttribute('alt','hammer');

	ham.addEventListener('load', (e) => {
		p.drawImage(ham, centerX-hamw/2 ,centerY-hamh/2, hamw, hamh);
	});



})(window)