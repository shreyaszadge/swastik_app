import Icon from './Icon.jsx';

export default function HeroViz() {
  return (
    <div className="viz">
      <svg viewBox="0 0 600 520" role="img" aria-label="Illustration of a circuit board on a glowing platform">
        <defs>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#1cc4e8" stopOpacity=".55" />
            <stop offset="1" stopColor="#1cc4e8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv-brd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2a21b8" />
            <stop offset="1" stopColor="#120d63" />
          </linearGradient>
          <filter id="hv-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="hv-blur2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22" /></filter>
          <g id="hv-trc" fill="none" stroke="#1cc4e8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-34 -34H-80L-100 -54V-110" /><path d="M-34 -14H-110" /><path d="M-34 6H-70L-90 26V110" />
            <path d="M34 -34H80L100 -54V-110" /><path d="M34 -14H110" /><path d="M34 14H70L90 34V110" />
            <path d="M-14 34V80L-34 100V120" /><path d="M14 34V90L34 110V120" />
            <path d="M-14 -34V-80L6 -100V-120" /><path d="M14 -34V-70L30 -86V-120" />
          </g>
        </defs>
        <ellipse cx="300" cy="400" rx="285" ry="86" style={{ fill: 'var(--plat)', stroke: 'var(--plat-line)' }} />
        <ellipse cx="300" cy="400" rx="235" ry="68" fill="none" stroke="#1cc4e8" strokeOpacity=".45" />
        <ellipse cx="300" cy="400" rx="185" ry="52" fill="none" stroke="#1cc4e8" strokeOpacity=".6" />
        <ellipse cx="300" cy="400" rx="140" ry="38" fill="url(#hv-glow)" />
        <ellipse cx="300" cy="352" rx="210" ry="64" fill="#1cc4e8" opacity=".45" filter="url(#hv-blur2)" />
        <g transform="translate(300 262) translate(0 20) scale(1 .56) rotate(45)">
          <rect x="-130" y="-130" width="260" height="260" rx="16" fill="#0a0640" />
        </g>
        <g transform="translate(300 262) scale(1 .56) rotate(45)">
          <rect x="-130" y="-130" width="260" height="260" rx="16" fill="url(#hv-brd)" />
          <rect x="-121" y="-121" width="242" height="242" rx="11" fill="none" stroke="#6ee6f8" strokeOpacity=".28" />
          <use href="#hv-trc" filter="url(#hv-blur)" opacity=".8" />
          <use href="#hv-trc" />
          <g fill="#ffcf5a">
            <circle cx="-100" cy="-110" r="4.5" /><circle cx="-110" cy="-14" r="4.5" /><circle cx="-90" cy="110" r="4.5" />
            <circle cx="100" cy="-110" r="4.5" /><circle cx="110" cy="-14" r="4.5" /><circle cx="90" cy="110" r="4.5" />
            <circle cx="-34" cy="120" r="4.5" /><circle cx="34" cy="120" r="4.5" /><circle cx="6" cy="-120" r="4.5" /><circle cx="30" cy="-120" r="4.5" />
          </g>
          <rect x="-40" y="-40" width="80" height="80" rx="6" fill="none" stroke="#8fe9fa" strokeWidth="5" strokeDasharray="2 4" />
          <rect x="-34" y="-34" width="68" height="68" rx="6" fill="#080544" stroke="#5ee0f5" strokeOpacity=".7" />
          <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#1cc4e8" />
          <circle cx="-26" cy="-26" r="2.6" fill="#fff" />
          <rect x="56" y="54" width="38" height="22" rx="3" fill="#080544" stroke="#5ee0f5" strokeOpacity=".6" />
          <rect x="-96" y="58" width="22" height="38" rx="3" fill="#080544" stroke="#5ee0f5" strokeOpacity=".6" />
          <rect x="-84" y="-84" width="14" height="6" rx="1.5" fill="#ffcf5a" /><rect x="70" y="-84" width="14" height="6" rx="1.5" fill="#ffcf5a" />
          <rect x="56" y="22" width="6" height="14" rx="1.5" fill="#ffcf5a" /><rect x="-64" y="80" width="6" height="14" rx="1.5" fill="#ffcf5a" />
          <g fill="#120d63" stroke="#1cc4e8" strokeWidth="1.5">
            <circle cx="-60" cy="-14" r="3.5" /><circle cx="62" cy="-14" r="3.5" /><circle cx="-14" cy="62" r="3.5" /><circle cx="14" cy="-62" r="3.5" />
          </g>
        </g>
      </svg>

      <div className="fc fc-a">
        <small>Capacity</small>
        <b>5,000-8,000</b>
        <span className="t">assemblies per day</span>
        <div className="mini" aria-hidden="true">
          <i style={{ height: '35%' }} /><i style={{ height: '55%' }} /><i style={{ height: '45%' }} />
          <i style={{ height: '75%' }} /><i style={{ height: '60%' }} /><i style={{ height: '100%' }} />
        </div>
      </div>
      <div className="fc fc-b">
        <div className="ring" aria-hidden="true"><i><Icon name="check" /></i></div>
        <div><small>Certified</small><b>ISO 9001:2015</b><span className="t">EMS company (QMS)</span></div>
      </div>
      <div className="fc fc-c">
        <small>Technology</small>
        <b>Prototype to production</b>
        <div className="tags"><em>SMD</em><em>Through-Hole</em></div>
      </div>
    </div>
  );
}
