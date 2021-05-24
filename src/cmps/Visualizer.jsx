import React, { useRef } from "react";

export function Visualizer({setIsPlaying}) {

    const loadingElement = useRef()
    const startElement = useRef()
    const msgElement = useRef()
    const toggleElement = useRef()
/*
 * Noel Delgado | @pixelia_me
 *
 * Music by Term and Conditions Mixes
 * https://soundcloud.com/term-and-conditions-mixes/new-year-dubstep-minimix
*/

var media = [
    "loops/120_future_funk_beats_25.mp3"
 ],
  fftSize = 1024,
  // [32, 64, 128, 256, 512, 1024, 2048]

  background_color = "rgba(0, 0, 1, 1)",
  background_gradient_color_1 = "#000011",
  background_gradient_color_2 = "#060D1F",
  background_gradient_color_3 = "#02243F",

  stars_color = "#465677",
  stars_color_2 = "#B5BFD4",
  stars_color_special = "#F451BA",
  TOTAL_STARS = 1500,
  STARS_BREAK_POINT = 140,
  stars = [],

  waveform_color = "rgba(29, 36, 57, 0.05)",
  waveform_color_2 = "rgba(0,0,0,0)",
  waveform_line_color = "rgba(157, 242, 157, 0.11)",
  waveform_line_color_2 = "rgba(157, 242, 157, 0.8)",
  waveform_tick = 0.05,
  TOTAL_POINTS = fftSize / 2,
  points = [],
  avg_circle,

  bubble_avg_color = "rgba(29, 36, 57, 0.1)",
  bubble_avg_color_2 = "rgba(29, 36, 57, 0.05)",
  bubble_avg_line_color = "rgba(77, 218, 248, 1)",
  bubble_avg_line_color_2 = "rgba(77, 218, 248, 1)",
  bubble_avg_tick = 0.001,
  TOTAL_AVG_POINTS = 64,
  AVG_BREAK_POINT = 100,
  avg_points = [],

  SHOW_STAR_FIELD = true,
  SHOW_WAVEFORM = true,
  SHOW_AVERAGE = true,

  AudioContext = (window.AudioContext || window.webkitAudioContext),
  floor = Math.floor,
  round = Math.round,
  random = Math.random,
  sin = Math.sin,
  cos = Math.cos,
  PI = Math.PI,
  PI_TWO = PI * 2,
  PI_HALF = PI / 180,

  w = 0,
  h = 0,
  cx = 0,
  cy = 0,

  playing = false,
  startedAt, pausedAt,

  rotation = 0,
//   msgElement = document.querySelector('#loading .msg'),
  avg, ctx, actx, asource, gainNode, analyser, frequencyData, frequencyDataLength, timeData,
  audio_buffer,AVG_BREAK_POINT_HIT;

// var startElement = document.querySelector('#loadcontrolloadcontrol');
// var loadingElement = document.querySelector('#loading');
// var msgElement = loadingElement.querySelector('.msg');
// var toggleElement = document.querySelector('#togglecontrol');

window.addEventListener('load', initialize, false);
window.addEventListener('resize', resizeHandler, false);

function initialize() {
  if (!AudioContext)
      return featureNotSupported();


    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    actx = new AudioContext();


  if(startElement&&startElement.current){
      console.log('media',media);
    startElement.current.addEventListener('click', initializeAudio);
  }
  resizeHandler();
}

function featureNotSupported() {
  hideStarter();
  return document.getElementById('no-audio').style.display = "block";
}

function hideStarter() {
    if(startElement&&startElement.current){
        startElement.current.style.display = 'none';
    }
}

function hideLoader() {
    if(loadingElement&&loadingElement.current){
        return loadingElement.current.className = 'hide';
      }
}

function showToggleControls() {
    if(toggleElement&&toggleElement.current){
        console.log('1234345554645654');
        toggleElement.current.className = 'show';
        toggleElement.current.focus();
      
        toggleElement.current.addEventListener('click', function(e) {
            e.preventDefault();
            // this.textContent = playing ? "play" : "pause";
            toggleAudio();
        });
    }
}

function updateLoadingMessage(text) {
    if(msgElement&&msgElement.current){
        msgElement.current.textContent = text;
    }
}



function initializeAudio() {
  asource = actx.createBufferSource();
  var xmlHTTP = new XMLHttpRequest();

  hideStarter();
  if(loadingElement&&loadingElement.current){
    loadingElement.current.classList.add('show');
  }
  updateLoadingMessage("- Loading Audio Buffer -");

  xmlHTTP.open('GET', media[0], true);
  xmlHTTP.responseType = "arraybuffer";


  xmlHTTP.onreadystatechange  = function(e) {
    if (xmlHTTP.readyState === 4 && xmlHTTP.status === 200)
    {
        updateLoadingMessage("- Decoding Audio File Data -");

        console.time('decoding audio data');
        actx.decodeAudioData(xmlHTTP.response, function(buffer) {
            console.timeEnd('decoding audio data');
  
            updateLoadingMessage("- Ready -");
  
            audio_buffer = buffer;// source.buffer = buffer;
  
            analyser = actx.createAnalyser();
            gainNode = actx.createGain();
            gainNode.gain.value = 1;
  
            analyser.fftSize = fftSize;
            analyser.minDecibels = -100;
            analyser.maxDecibels = -30;
            analyser.smoothingTimeConstant = 0.8;
  
            gainNode.connect(analyser);
            analyser.connect(actx.destination);
  
            frequencyDataLength = analyser.frequencyBinCount;
            frequencyData = new Uint8Array(frequencyDataLength);
            timeData = new Uint8Array(frequencyDataLength);
  
            createStarField();
            createPoints();
            hideLoader();
            showToggleControls();
            playAudio();
        }, function(e) { alert("Error decoding audio data" + e); });
     }
  };

  xmlHTTP.send();
}

function toggleAudio(){
  playing ? pauseAudio() : playAudio();
}



function playAudio() {
//*
// setIsPlaying(true)
  playing = true;
  startedAt = pausedAt ? Date.now() - pausedAt : Date.now();
  asource = null;
  asource = actx.createBufferSource();
  asource.buffer = audio_buffer;
  asource.loop = true;
  asource.connect(gainNode);
  pausedAt ? asource.start(0, pausedAt / 1000) : asource.start();

  animate();
}

function pauseAudio() {
//*
// setIsPlaying(false)
  playing = false;
  pausedAt = Date.now() - startedAt;
  asource.stop();
}

function getAvg(values) {
  var value = 0;

  values.forEach(function(v) {
      value += v;
  })

  return value / values.length;
}

function animate() {
  if (!playing) return;

  window.requestAnimationFrame(animate);
  analyser.getByteFrequencyData(frequencyData);
  analyser.getByteTimeDomainData(timeData);
  avg = getAvg([].slice.call(frequencyData)) * gainNode.gain.value;
  AVG_BREAK_POINT_HIT = (avg > AVG_BREAK_POINT);

  clearCanvas();

  if (SHOW_STAR_FIELD) {
      drawStarField();
  }

  if (SHOW_AVERAGE) {
      drawAverageCircle();
  }

  if (SHOW_WAVEFORM) {
      drawWaveform();
  }
}

function clearCanvas() {
  var gradient = ctx.createLinearGradient(0, 0, 0, h);

  gradient.addColorStop(0, background_gradient_color_1);
  gradient.addColorStop(0.96, background_gradient_color_2);
  gradient.addColorStop(1, background_gradient_color_3);

  ctx.beginPath();
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
  ctx.fill();
  ctx.closePath();

  gradient = null;
}

function drawStarField() {
  var i, len, p, tick;

  for (i = 0, len = stars.length; i < len; i++) {
      p = stars[i];
      tick = (AVG_BREAK_POINT_HIT) ? (avg/20) : (avg/50);
      p.x += p.dx * tick;
      p.y += p.dy * tick;
      p.z += p.dz;

      p.dx += p.ddx;
      p.dy += p.ddy;
      p.radius = 0.2 + ((p.max_depth - p.z) * .1);

      if (p.x < -cx || p.x > cx || p.y < -cy || p.y > cy) {
          stars[i] = new Star();
          continue;
      }

      ctx.beginPath();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = p.color;
      ctx.arc(p.x + cx, p.y + cy, p.radius, PI_TWO, false);
      ctx.fill();
      ctx.closePath();
  }

  i = len = p = tick = null;
}

function drawAverageCircle() {
  if (AVG_BREAK_POINT_HIT) {
      ctx.strokeStyle = bubble_avg_line_color_2;
      ctx.fillStyle = bubble_avg_color_2;
  } else {
      ctx.strokeStyle = bubble_avg_line_color;
      ctx.fillStyle = bubble_avg_color;
  }

  ctx.beginPath();
  ctx.lineWidth = 1;

  ctx.arc(cx, cy, (avg + avg_circle.radius), 0, PI_TWO, false);

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function drawWaveform() {
  var i, len, p, value, xc, yc, drawHorizontal, percent, height, offset, barWidth;

  if (AVG_BREAK_POINT_HIT) {
      rotation += waveform_tick;
      ctx.strokeStyle = waveform_line_color_2;
      ctx.fillStyle = waveform_color_2;
      drawHorizontal = true;
  } else {
      rotation += -waveform_tick;
      ctx.strokeStyle = waveform_line_color;
      ctx.fillStyle = waveform_color;
  }

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.lineCap = "round";

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation)
  ctx.translate(-cx, -cy);

  ctx.moveTo(points[0].dx, points[0].dy);

  for (i = 0, len = TOTAL_POINTS; i < len - 1; i ++) {
      p = points[i];
      value = timeData[i];
      p.dx = p.x + value * sin(PI_HALF * p.angle);
      p.dy = p.y + value * cos(PI_HALF * p.angle);
      xc = (p.dx + points[i+1].dx) / 2;
      yc = (p.dy + points[i+1].dy) / 2;

      ctx.quadraticCurveTo(p.dx, p.dy, xc, yc);
  }

  value = timeData[i];
  p = points[i];
  p.dx = p.x + value * sin(PI_HALF * p.angle);
  p.dy = p.y + value * cos(PI_HALF * p.angle);
  xc = (p.dx + points[0].dx) / 2;
  yc = (p.dy +points[0].dy) / 2;

  ctx.quadraticCurveTo(p.dx, p.dy, xc, yc);
  ctx.quadraticCurveTo(xc, yc, points[0].dx, points[0].dy);

  ctx.stroke();
  ctx.fill();
  ctx.restore();
  ctx.closePath();


  if (drawHorizontal) {
      ctx.beginPath();

      for (i = 0, len = TOTAL_POINTS; i < len; i++) {
          value = timeData[i];
          percent = (value / 256);
          height = (h * percent);
          offset = (h - height - 1);
          barWidth = (w/TOTAL_POINTS);

          ctx.fillStyle = waveform_line_color_2;
          ctx.fillRect(i * barWidth, offset, 1, 1);
      }

      ctx.stroke();
      ctx.fill();
      ctx.closePath();
  }

  i = len = p = value = xc = yc = drawHorizontal = percent = height = offset = barWidth = null;
}

function Star() {
  var xc, yc;

  this.x = Math.random() * w - cx;
  this.y = Math.random() * h - cy;
  this.z = this.max_depth = Math.max(w/h);
  this.radius = 0.2;

  xc = this.x > 0 ? 1 : -1;
  yc = this.y > 0 ? 1 : -1;

  if (Math.abs(this.x) > Math.abs(this.y)) {
      this.dx = 1.0;
      this.dy = Math.abs(this.y / this.x);
  } else {
      this.dx = Math.abs(this.x / this.y);
      this.dy = 1.0;
  }

  this.dx *= xc;
  this.dy *= yc;
  this.dz = -0.1;

  this.ddx = .001 * this.dx;
  this.ddy = .001 * this.dy;

  if (this.y > (cy/2)) {
      this.color = stars_color_2;
  } else {
      if (avg > AVG_BREAK_POINT + 10) {
          this.color = stars_color_2;
      } else if (avg > STARS_BREAK_POINT) {
          this.color = stars_color_special;
      } else {
          this.color = stars_color;
      }
  }

  xc = yc = null;
}

function createStarField() {
  var i = -1;

  while(++i < TOTAL_STARS) {
      stars.push(new Star());
  }

  i = null;
}

function Point(config) {
  this.index = config.index;
  this.angle = (this.index * 360) / TOTAL_POINTS;

  this.updateDynamics = function() {
      this.radius = Math.abs(w, h) / 10;
      this.x = cx + this.radius * sin(PI_HALF * this.angle);
      this.y = cy + this.radius * cos(PI_HALF * this.angle);
  }

  this.updateDynamics();

  this.value = Math.random() * 256;
  this.dx = this.x + this.value * sin(PI_HALF * this.angle);
  this.dy = this.y + this.value * cos(PI_HALF * this.angle);
}
function AvgCircle() {
  this.update = function() {
      this.radius = (Math.abs(w, h) / 10);
  }

  this.update();
}

function createPoints() {
  var i;

  i = -1;
  while(++i < TOTAL_POINTS) {
      points.push(new Point({index: i+1}));
  }

  avg_circle = new AvgCircle();

  i = null;
}

function resizeHandler() {
  w = window.innerWidth;
  h = window.innerHeight;
  cx = w / 2;
  cy = h / 2;


    ctx.canvas.width = w;
    ctx.canvas.height = h;
  

  points.forEach(function(p) {
      p.updateDynamics();
  });

  if (avg_circle) {
      avg_circle.update();
  }
}
   
    return (
        <div className="audio-visualizer-container">
            <canvas id="canvas"></canvas>
            <button ref={toggleElement} id="togglecontrol" className="visualizer-btn">play/pause btn</button>
            <button ref={startElement} autoFocus={true} id="loadcontrol">tap to play</button>
            <div ref={loadingElement} id="loading">
              <p>Loading&hellip;</p>
              <p ref={msgElement} className="msg">- Initializing -</p>
            </div>
            <div id="no-audio">
              <h1>No Web Audio API</h1>
              <p>Sorry, this experiment requires the Web Audio API.</p>
              <a href="http://caniuse.com/#feat=audio-api" target="_blank">See browser support</a>
            </div>
            {/* <div className="credits">
                <span>
                  by &nbsp;
                  <a href="https://pixelia.me" rel="noopener noreferrer" target="_blank" title="Noel Delgado">
                    <svg height="12" viewBox="0 0 57 30">
                      <path d="M28.1312,9.5341 C29.7966,9.5341 32.1025,10.627 34.248,12.368 C49.3297,11.5836 53.8793,-0.4796 55.5773,0.6783 C57.8326,3.2476 50.8638,16.3535 39.4,19.088 C39.8655,20.2628 40.1364,21.4786 40.1364,22. 6983 C40.1364,25.9478 38.837,26.7409 36.7281,28.8974 L36.704,28.824 C36.4799,29.0276 36.208,29.2318 35.8945,29.4 C35.8945,29.4 36.1346,27.0065 34.9341,26.7672 C34.9341,26.7672 34.3739,27.4054 33.0133,27. 2459 C32.8532,25.8896 32.293,25.4109 32.1329,25.3311 C31.4126,25.4109 30.9324,26.5278 30.132,26.5278 C29.8,26.1969 29.5184,25.5615 29.312,24.972 C29.0201,25.4221 28.6036,26.1128 28.2512,26.2885 C27.8796,26.2885 27.1476,25.2858 26.836,24.832 C26.6262,25.4581 26.3285,26.1707 25.9702,26.5278 C25.1699,26.5278 24.6896,25.4109 23.9694,25.3311 C23.8093,25.4109 23.249,25.8896 23.089,27.2459 C21.7284,27.4054 21.1681, 26.7672 21.1681,26.7672 C19.9676,27.0065 20.2077,29.4 20.2077,29.4 C19.6122,29.0804 19.1739,28.6307 18.908,28.304 L18.8667,28.3947 C17.1544,26.3262 16.1259,25.5896 16.1259,22.6983 C16.1259,21.4938 16.3637, 20.2895 16.784,19.128 C5.2094,16.4922 -1.8448,3.2615 0.4227,0.6783 C2.119,-0.4785 6.6627,11.5578 21.708,12.364 C23.8143,10.6244 26.1724,9.5341 28.1312,9.5341 Z M28.8514,20.3048 C28.8514,20.3048 30.4121,21. 7409 32.213,21.7409 C34.0137,21.7409 35.3343,19.3474 35.3343,19.3474 L28.8514,20.3048 Z M20.6879,19.3474 C20.6879,19.3474 22.2486,21.7409 24.0494,21.7409 C25.8502,21.7409 27.1707,20.3048 27.1707,20.3048  L20.6879,19.3474 Z" fillRule="evenodd"></path>
                    </svg>
                  </a>
                </span>
            </div> */}

        </div>
    )
}
