;((global) => {

  // canvas, 2d rendering context
  const c = global.document.querySelector('canvas');
  const ctx = c.getContext('2d');

  ctx.initialize({gap: 50});

  let w = 50,
      h = 50;
      count = 5;
  for(let y=0; y<count; ++y) {
    for(let x=0; x<count; x++) {
      // console.log(`y=${y} x=${x}`);
      // 사각형의 색상 변경
      ctx.fillStyle = `rgb(
        ${Math.floor(255 - (255/count * x))},
        ${Math.floor(255 - (255/count * y))},
        130
      )`;
      // 사각형 그리기
      ctx.fillRect(x*w + w, y*h + h, w, h);
    }
  }

})(window)