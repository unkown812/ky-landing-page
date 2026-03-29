import './App.css';

function App() {
  const starEl = document.getElementById('stars');
  
  for (let i = 0; i < 90; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 1.8 + 0.5;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--t:${(Math.random() * 4 + 2).toFixed(1)}s;--td:${(Math.random() * 5).toFixed(1)}s;--lo:${(Math.random() * 0.1 + 0.05).toFixed(2)};--hi:${(Math.random() * 0.5 + 0.15).toFixed(2)};`;
    starEl.appendChild(s);
  }
  const partEl = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random() * 100}%;bottom:${Math.random() * 30}%;--dur:${(Math.random() * 8 + 6).toFixed(1)}s;--del:${(Math.random() * 8).toFixed(1)}s;--op:${(Math.random() * 0.5 + 0.2).toFixed(2)};--dx:${(Math.random() * 60 - 30).toFixed(0)}px;`;
    partEl.appendChild(p);
  }

  // ── Countdown ──
  const launch = new Date();
  launch.setDate(launch.getDate() + 60);

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    const diff = launch - now;
    if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('mins').textContent = '00';
      document.getElementById('secs').textContent = '00';
      return;
    }
    document.getElementById('days').textContent = pad(Math.floor(diff / 86400000));
    document.getElementById('hours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
    document.getElementById('mins').textContent = pad(Math.floor((diff % 3600000) / 60000));
    document.getElementById('secs').textContent = pad(Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);

  return (
    <div className="App">
        <div class="bg-canvas">
          <div class="grid-lines"></div>
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
          <div class="shimmer-bar"></div>
        </div>

        <div class="stars" id="stars"></div>
        <div class="particles" id="particles"></div>
        <div class="container">

          <div class="logo-wrap">
            <div class="logo-ring"></div>
            <img class="logo-img"
              src="/logo.png"
              alt="KY System Solutions Logo" />
          </div>

          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-diamond"></div>
            <div class="divider-line right"></div>
          </div>

          <div class="brand-name"><span>KY</span> System Solutions</div>
          <div class="brand-tagline">Excellence · Innovation · Technology</div>

          <div class="headline">Something extraordinary is on its way</div>
          <div class="headline-bold">Launching Soon</div>

          <div class="countdown">
            <div class="count-box">
              <span class="count-num" id="days">00</span>
              <span class="count-label">Days</span>
            </div>
            <div class="count-sep">·</div>
            <div class="count-box">
              <span class="count-num" id="hours">00</span>
              <span class="count-label">Hours</span>
            </div>
            <div class="count-sep">·</div>
            <div class="count-box">
              <span class="count-num" id="mins">00</span>
              <span class="count-label">Minutes</span>
            </div>
            <div class="count-sep">·</div>
            <div class="count-box">
              <span class="count-num" id="secs">00</span>
              <span class="count-label">Seconds</span>
            </div>
          </div>

          <div class="notify-wrap">
            <div class="notify-label">Stay tuned — be the first to know</div>
            <div class="notify-form" id="notifyForm">
              <input class="notify-input" type="email" id="emailInput" placeholder="Enter your email address" />
              <button class="notify-btn" onclick="handleNotify()">Notify Me</button>
            </div>
            <div class="success-msg" id="successMsg">✦ &nbsp; Thank you. We'll be in touch.</div>
          </div>

        </div>

        <div class="footer">© 2026 KY System Solutions &nbsp;·&nbsp; All rights reserved</div>
    </div>
  );
}

export default App;