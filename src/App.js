import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const starEl = document.getElementById('stars');
    for (let i = 0; i < 90; i++) {
      const s = document.createElement('div');
      s.classNameName = 'star';
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

    const launch = new Date();
    launch.setDate(launch.getDate() + 60);
  }, []);

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
          <img
            class="logo-img"
            src="/logo.png"
            alt="KY System Solutions Logo"
          />
        </div>

        <div class="divider">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line right"></div>
        </div>

        <div class="brand-name">
          <span>KY</span> System Solutions
        </div>
        <div class="brand-tagline">Excellence · Innovation · Technology</div>

        <div class="headline">Something extraordinary is on its way</div>
        <div class="headline-bold">Launching Soon</div>

        <div class="notify-wrap">
          <div class="notify-label">Stay tuned — be the first to know</div>
          <div class="success-msg" id="successMsg">
            ✦ &nbsp; Thank you. We'll be in touch.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;