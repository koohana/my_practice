// FPS 컨트롤이 가능한 애니메이션 함수
function animate(callback, frames=60) {

  // FPS
  let fps   = 1000/frames;
  // TIME
  let time  = null;
  // requestAnimationFrame ID
  let reqId = null;
  // FRAME
  let frame = -1;

  // 반복 실행될 loop 함수
  // requestAnimationFrame(loop) 재귀 호출 시
  // timestamp 인자가 전달
  function loop(timestamp) {
    // time 값이 null 일 때 1회 실행
    // time 변수에 timestamp를 설정
    if ( time === null ) { time = timestamp; }
    // 프레임 넘버
    let frame_no = Math.floor((timestamp - time) / fps);
    // 프레임 넘버는 초기 0 이 나오게 됨.
    // frame 초기 값이 -1 이므로 0 > -1 값이 참이라서
    // callback() 함수 실행
    // frame 값은 frame_no 값이 할당
    // frame = 0
    // 이후 같은 비교를 반복하면서 참이 되면 frame 및 frame_no 값은 각각 증가
    // 일정한 시간마다 callback() 함수를 실행하게 됨
    if ( frame_no > frame ) {
      frame = frame_no;
      callback({
        time: timestamp,
        frame
      });
    }
    reqId = window.requestAnimationFrame(loop);
  }

  // 함수 밖으로 내보낼 애니메이트 객체
  const $animate = {
    // 재생, 정지 상태 속성
    // 초기 값: false
    is_playing: false,
    // 재생 메서드
    play() {
      if ( !this.is_playing ) {
        reqId = window.requestAnimationFrame(loop);
        this.is_playing = true;
      }
    },
    // 일시 정지 메서드
    pause() {
      if ( this.is_playing ) {
        window.cancelAnimationFrame(reqId);
        this.is_playing = false;
        time = null;
        frame = -1;
      }
    },
    // FPS 재설정 메서드
    setFPS(new_frames) {
      if (!new_frames) { return; }
      frames = new_frames;
      fps = 1000/frames;
      time = null;
    }
  };

  // 외부로 애니메이트 함수 내보냄
  return $animate;

}