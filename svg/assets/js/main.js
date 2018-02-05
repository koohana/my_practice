// JavaScript Module
// IIFE 즉시 실행함수
;(function(global){
  // var = variable 변수
  // let
  // const = constant 상수
  const document = global.document;
  const canvas = document.querySelector('#sketchbook');
  // HTML Attribute 조작
  // canvas.width = global.innerWidth;
  // canvas.height = global.innerHeight;
  // CSS Properties 조작
  // canvas.style.cssText = 'width: '+canvas.width+'px; height: '+canvas.height+'px;';
  // ES6
  // canvas.style.cssText = `width: ${canvas.width}px; height: ${canvas.height}px;`;
  // canvas.style.width = canvas.width;
  // canvas.style.height = canvas.height;



  // canvas 2d rendering context object
  const ctx = canvas.getContext('2d');
  // console.log(ctx); // 그림을 그릴 수 있는 능력을 제공하는 객체

  // 캔버스 크기/그리드 초기화
  ctx.initialize({
    gap: 10,
  });
  // 고해상도 대응 캔버스 설정
  // ctx.setCanvas_HiDPI();
  // 캔버스 그리드
  // ctx.drawCanvasGrid();

  // 면 사각형 그리기
  ctx.fillStyle = 'hsla(0, 100%, 50%, 1)'; // red
  ctx.fillRect(100, 100, 100, 100);

  // 선색 스타일
  ctx.strokeStyle = '#000222';
  ctx.lineWidth = 10;
  // 선 사각형 그리기
  ctx.strokeRect(100, 100, 100, 100);
  // ctx.outsideStrokeRect(100, 100, 100, 100);

  // allClearCanvas() 함수를 만들어 봅시다.
  function allClearCanvas(context){
    let canvas = context.canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 2초 뒤에 캔버스를 모두 지우시오.
  // JavaScript Time Controls
  // window.setInterval(fn, ms) <-> window.clearInteraval(id)
  // window.setTimeout(fn, ms)  <-> window.clearTimeout(id)
  // window.requestAnimationFrame(fn) // 10~30ms <-> window.cancelAnimationFrame(id)
  let second = 2;
  // fat arrow function
  // global.setTimeout(() => {
  //   allClearCanvas(ctx);
  // }, 1000 * second);

  // FPS
  // Frame per Second
  // 15FPS
  // 30FPS
  // 60FPS

  // fps() 함수를 작성해봅니다.
  // arrow function === function literal(값)
  // let fps = (frames) => {
  //   return 1000/frames;
  // };

  // let fps = (frames) => 1000/frames;
  // let frames = 30;
  // global.setInterval(() => {
  //   console.log(`${frames}FPS`);
  // }, fps(frames));

}(window))