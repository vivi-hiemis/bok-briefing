// 표지 — 한국은행 블루톤, 중앙 정렬, 미니멀
export default function Cover() {
  return (
    <div className="slide" style={{ background: 'var(--bok-navy-900)', color: 'var(--white)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* 미세한 수직선 백그라운드 */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '160px 100%',
      }} />
      {/* 하단 라디얼 광 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 70%, rgba(64,128,220,0.22), transparent 55%)',
      }} />

      {/* 상단 골드 라인 */}
      <div style={{ position: 'absolute', top: 120, left: '50%', transform: 'translateX(-50%)', width: 80, height: 3, background: 'var(--accent-blue)' }} />

      {/* 중앙 제목 */}
      <div style={{ position: 'relative', textAlign: 'center', marginTop: -40 }}>
        <div style={{
          fontSize: 200,
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-0.045em',
          whiteSpace: 'nowrap',
        }}>
          경제연구원
        </div>
        <div style={{
          fontSize: 120,
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'rgba(255,255,255,0.78)',
          marginTop: 12,
          whiteSpace: 'nowrap',
        }}>
          업 무 보 고
        </div>

        {/* 날짜 — 중앙, 작게 */}
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
          <span style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.3)' }} />
          <div className="mono" style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.25em', fontWeight: 500 }}>
            2026. 4. 30.
          </div>
          <span style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </div>

      {/* 하단 — 한국은행 로고 표기, 중앙 */}
      <div style={{ position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          {/* 단순 마크 */}
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="18" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
            <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--accent-blue)" fontFamily="Georgia, serif">B</text>
          </svg>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1 }}>한국은행</div>
            <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.2em', marginTop: 4 }}>THE BANK OF KOREA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
