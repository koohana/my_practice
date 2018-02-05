;((global) => {

  // canvas, 2d rendering context
  const c = global.document.querySelector('canvas');
  const ctx = c.getContext('2d');

  ctx.initialize({gap: 50});

  function degree(d) {
    return Math.PI/180 * d;
  }

  let z = 0;

  function drawCircleLine(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 50, degree(0 - 90), degree(z - 90), false);
    // ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.fill();
  }

  // drawCircleLine();

  function animateCircleLine(){
    if (++z > 360) { z = 0; }
    drawCircleLine();
  }

  function fps(frames) {
    return 1000/frames;
  }

  global.setInterval(animateCircleLine, fps(60));

})(window)