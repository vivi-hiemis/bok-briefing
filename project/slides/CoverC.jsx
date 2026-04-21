/* global React */
// 표지 C — 키워드 클라우드 / 화두 전면 배치
// 한국 경제의 핵심 화두 키워드를 전면에 배치하고, 중앙에 제목 박스

function CoverC() {
  const keywords = [
    { t: '인구구조', s: 56, o: 0.6, x: 8, y: 22 },
    { t: '기후전환', s: 42, o: 0.45, x: 72, y: 14 },
    { t: 'AI·생산성', s: 68, o: 0.7, x: 58, y: 68 },
    { t: '부채·금융안정', s: 36, o: 0.35, x: 10, y: 72 },
    { t: '국제통화질서', s: 50, o: 0.55, x: 70, y: 38 },
    { t: '잠재성장률', s: 72, o: 0.8, x: 14, y: 50 },
    { t: '물가', s: 38, o: 0.4, x: 80, y: 82 },
    { t: '가계부채', s: 32, o: 0.3, x: 6, y: 12 },
    { t: '환율', s: 28, o: 0.25, x: 78, y: 60 },
    { t: '자본시장', s: 30, o: 0.3, x: 50, y: 86 },
  ];
  return (
    <div className="slide jensen" style={{ background: 'var(--bok-navy-950)' }}>
      {/* 키워드 레이어 */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {keywords.map((k, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${k.x}%`, top: `${k.y}%`,
            fontFamily: 'var(--font-serif)',
            fontSize: k.s,
            fontWeight: 700,
            color: `rgba(198,211,228,${k.o})`,
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
            fontStyle: 'italic',
          }}>{k.t}</div>
        ))}
      </div>

      {/* 상단 정보 */}
      <div style={{
        position: 'absolute', top: 60, left: 80, right: 80,
        display: 'flex', justifyContent: 'space-between',
        color: 'rgba(255,255,255,0.6)',
      }}>
        <div className="mono" style={{ fontSize: 15, letterSpacing: '0.2em' }}>
          THE BANK OF KOREA · ECONOMIC RESEARCH INSTITUTE
        </div>
        <div className="mono" style={{ fontSize: 15, letterSpacing: '0.2em' }}>
          2026.04.21
        </div>
      </div>

      {/* 중앙 제목 박스 */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'var(--bok-navy-950)',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '72px 120px',
        textAlign: 'center',
        boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
      }}>
        <div className="mono" style={{
          fontSize: 15, letterSpacing: '0.35em',
          color: 'var(--accent-blue)', marginBottom: 28,
        }}>
          — BRIEFING TO THE GOVERNOR —
        </div>
        <div style={{
          fontSize: 130, fontWeight: 900,
          color: 'var(--white)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}>
          경제연구원 업무보고
        </div>
        <div style={{
          marginTop: 24,
          fontSize: 26, color: 'rgba(255,255,255,0.6)',
          fontWeight: 400, letterSpacing: '-0.01em',
        }}>
          한국 경제의 물음 앞에서, 연구원은 답을 준비합니다
        </div>
        <div style={{
          marginTop: 36, display: 'inline-flex', gap: 32,
          fontSize: 16, color: 'rgba(255,255,255,0.55)',
        }} className="mono">
          <span>01 · 현황</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>02 · 중점업무</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>03 · 기타</span>
        </div>
      </div>

      {/* 하단 서명 */}
      <div style={{
        position: 'absolute', bottom: 60, left: 80, right: 80,
        display: 'flex', justifyContent: 'space-between',
        color: 'rgba(255,255,255,0.45)', fontSize: 14,
      }} className="mono">
        <span>CLASSIFICATION · INTERNAL</span>
        <span>VOL. 2026 · No. 001</span>
      </div>
    </div>
  );
}

window.CoverC = CoverC;
