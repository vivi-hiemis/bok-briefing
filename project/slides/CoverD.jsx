/* global React */
// 표지 D — 분할 구성: 좌측 풀블리드 네이비 + 우측 차트/수치 임팩트
// 데이터 시각화가 표지 그 자체인 Jensen Huang x BIS 크로스오버

function CoverD() {
  // 잠재성장률 하락 트렌드 (가상 데이터)
  const pts = [
    { y: 2000, v: 5.8 },
    { y: 2005, v: 4.8 },
    { y: 2010, v: 3.9 },
    { y: 2015, v: 3.1 },
    { y: 2020, v: 2.4 },
    { y: 2025, v: 1.8 },
    { y: 2030, v: 1.2 },
  ];
  const W = 900, H = 500;
  const xs = (i) => (i / (pts.length - 1)) * W;
  const ys = (v) => H - ((v - 0.8) / (6.2 - 0.8)) * H;
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(p.v)}`).join(' ');
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div className="slide" style={{ background: 'var(--bok-navy-950)', display: 'flex' }}>
      {/* 좌측 — 제목 */}
      <div style={{
        flex: '0 0 52%',
        padding: '80px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        background: 'linear-gradient(180deg, var(--bok-navy-950), var(--bok-navy-900))',
        color: 'var(--white)',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 16, letterSpacing: '0.25em', color: 'var(--accent-blue)' }}>
            BOK · ERI — GOVERNOR BRIEFING
          </div>
          <div style={{ marginTop: 10, fontSize: 16, color: 'rgba(255,255,255,0.6)' }} className="mono">2026.04.21</div>
        </div>

        <div>
          <div style={{
            fontSize: 150, fontWeight: 900, lineHeight: 0.95,
            letterSpacing: '-0.045em',
          }}>
            경제연구원<br/>
            <span style={{ color: 'var(--accent-blue)' }}>업무보고</span>
          </div>
          <div style={{
            marginTop: 48, fontSize: 30, fontWeight: 400,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.4, maxWidth: 720,
            letterSpacing: '-0.015em',
          }}>
            한국 경제는 전환점에 서 있습니다.<br/>
            <span style={{ color: 'var(--white)', fontWeight: 600 }}>잠재성장률 1%대</span>—
            물음은 더 커지고, 답은 더 어려워졌습니다.
          </div>
        </div>

        <div style={{
          display: 'flex', gap: 40,
          paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.2)',
        }}>
          <div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>REPORTING TO</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>신임 총재</div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>FROM</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>Economic Research Institute</div>
          </div>
        </div>
      </div>

      {/* 우측 — 차트 임팩트 */}
      <div style={{
        flex: 1, position: 'relative',
        background: 'var(--bok-navy-950)',
        padding: '80px 80px',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ marginBottom: 40 }}>
          <div className="mono" style={{ fontSize: 14, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
            KOREA POTENTIAL GROWTH
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            우리 앞에 놓인 질문
          </div>
        </div>

        <div style={{ flex: 1, position: 'relative' }}>
          <svg viewBox={`0 0 ${W} ${H + 40}`} width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(80% 0.10 235)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="oklch(80% 0.10 235)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* gridlines */}
            {[1, 2, 3, 4, 5].map((v) => (
              <line key={v} x1={0} x2={W} y1={ys(v)} y2={ys(v)}
                stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            ))}
            <path d={area} fill="url(#ag)" />
            <path d={line} stroke="oklch(80% 0.10 235)" strokeWidth="4" fill="none" />
            {pts.map((p, i) => (
              <g key={p.y}>
                <circle cx={xs(i)} cy={ys(p.v)} r={i === pts.length - 1 ? 9 : 4} fill={i === pts.length - 1 ? 'oklch(80% 0.10 235)' : 'var(--white)'} />
                {i === pts.length - 1 && (
                  <circle cx={xs(i)} cy={ys(p.v)} r="20" fill="none" stroke="oklch(80% 0.10 235)" strokeWidth="1" opacity="0.6" />
                )}
              </g>
            ))}
            {/* x labels */}
            {pts.map((p, i) => (
              <text key={p.y} x={xs(i)} y={H + 26} fill="rgba(255,255,255,0.4)"
                fontSize="14" textAnchor="middle" fontFamily="JetBrains Mono, monospace">{p.y}</text>
            ))}
          </svg>
        </div>

        {/* 임팩트 수치 */}
        <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
          <div style={{ flex: 1, padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div className="mono tnum" style={{ fontSize: 64, fontWeight: 800, color: 'var(--accent-blue)', lineHeight: 1, letterSpacing: '-0.03em' }}>
              1.2<span style={{ fontSize: 28, color: 'rgba(255,255,255,0.55)' }}> %</span>
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>2030년 예상 잠재성장률</div>
          </div>
          <div style={{ flex: 1, padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div className="mono tnum" style={{ fontSize: 64, fontWeight: 800, color: 'var(--white)', lineHeight: 1, letterSpacing: '-0.03em' }}>
              −4.6<span style={{ fontSize: 28, color: 'rgba(255,255,255,0.55)' }}> %p</span>
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>30년간 누적 하락폭</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.CoverD = CoverD;
