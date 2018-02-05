;((global) => {

  // canvas, 2d rendering context
  const c = global.document.querySelector('canvas');
  const ctx = c.getContext('2d');

  ctx.initialize({gap: 40});

  // 패스 그리기
  // 패스를 그릴 거야
  // beginPath()
  ctx.beginPath();
  // 특정 지점(x, y)으로 이동해
  // moveTo(x,y)
  ctx.moveTo(80, 40);
  // 어떤 지점(x1, y1)까지 패스를 그려줘
  // lineTo(x1, y1)
  ctx.lineTo(160, 40);
  ctx.lineTo(120, 80);
  // 패스 그리기를 닫아줘
  // closePath()
  // ctx.closePath();
  // 선 or 면 색을 채워
  ctx.fillStyle = '#e32000';
  ctx.fill();
  ctx.strokeStyle = '#772200';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

})(window)