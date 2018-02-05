;((global, ctx__proto__) => {

  /**
   * @constructor CanvasRenderingContext2D
   * @method initialize
   * @param {Object} options 캔버스 그리드 옵션
   */
  ctx__proto__.initialize = function(options) {
    this.setCanvas_HiDPI();
    if (options) {
      this.drawCanvasGrid(options);
    }
  };

  /**
   * @constructor CanvasRenderingContext2D
   * @method setCanvas_HiDPI
   * @param {Number} dpr 기기 픽셀 농도(Device Pixel Ratio)
   */
  ctx__proto__.setCanvas_HiDPI = function (dpr=global.devicePixelRatio) {
    const canvas = this.canvas;
    let cw = canvas.width;
    let ch = canvas.height;
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    canvas.style.cssText = `width: ${cw}px; height: ${ch}px;`;
    this.scale(dpr, dpr);
  };

  /**
   * @constructor CanvasRenderingContext2D
   * @method drawCanvasGrid
   * @param {Object} dpr 캔버스 그리드 옵션
   */
  ctx__proto__.drawCanvasGrid = function (options) {
    const canvas = this.canvas;
    let cw = canvas.width;
    let ch = canvas.height;
    let {gap, color, line} = Object.assign({}, ctx__proto__.drawCanvasGrid.options, options);

    this.strokeStyle = color;
    this.lineWidth = line;

    this.beginPath();
    for ( let x = gap; x <= cw; x += gap ) {
      this.moveTo(x, 0);
      this.lineTo(x, ch);
    }
    for ( let y = gap; y <= ch; y += gap ) {
      this.moveTo(0, y);
      this.lineTo(cw, y);
    }

    this.stroke();
  };

  // 캔버스 그리드 옵션(기본 값)
  ctx__proto__.drawCanvasGrid.options = {
    gap: 10,
    color: 'rgba(230,230,230,1)',
    width: 1
  };

  /**
   * @constructor CanvasRenderingContext2D
   * @method insideStrokeRect
   * @param {Number} x 선으로 그릴 사각형 x축
   * @param {Number} y 선으로 그릴 사각형 y축
   * @param {Number} w 선으로 그릴 사각형 width
   * @param {Number} h 선으로 그릴 사각형 height
   */
  ctx__proto__.insideStrokeRect = function (x, y, w, h) {
    let sw = this.lineWidth;
    this.strokeRect(x + sw/2, y + sw/2, w - sw, h - sw);
  };

  /**
   * @constructor CanvasRenderingContext2D
   * @method outsideStrokeRect
   * @param {Number} x 선으로 그릴 사각형 x축
   * @param {Number} y 선으로 그릴 사각형 y축
   * @param {Number} w 선으로 그릴 사각형 width
   * @param {Number} h 선으로 그릴 사각형 height
   */
  ctx__proto__.outsideStrokeRect = function (x, y, w, h) {
    let sw = this.lineWidth;
    this.strokeRect(x - sw/2, y - sw/2, w + sw, h + sw);
  };

  /**
   * @constructor CanvasRenderingContext2D
   * @method rotateObject
   * @param {Number} rx 회전 x축
   * @param {Number} ry 회전 y축
   * @param {Number} degree 회전 각도
   */
  ctx__proto__.rotateObject = function (rx, ry, degree) {
    this.save();
    this.translate(rx, ry);
    this.rotate(Math.PI/180 * degree);
    this.translate(-rx, -ry);
  }

})(window, CanvasRenderingContext2D.prototype);