/* global React */
// 표지 B — 빅 넘버 임팩트: "1" 또는 핵심 키워드 숫자로 시선 집중
// 중앙에 거대한 숫자/라틴 연도, 좌측에 한글 제목, 우측에 메타

function CoverB() {
  return (
    <div className="slide jensen" style={{ background: 'var(--bok-navy-950)' }}>
      {/* 왼쪽 상단 아이덴티티 */}
      <div style={{ position: 'absolute', top: 60, left: 80, color: 'rgba(255,255,255,0.7)' }}>
        <div className="mono" style={{ fontSize: 14, letterSpacing: '0.25em', color: 'var(--accent-blue)', marginBottom: 8 }}>THE BANK OF KOREA</div>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--white)' }}>경제연구원 <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>| Economic Research Institute</span></div>
      </div>

      {/* 우측 상단 날짜 */}
      <div className="mono" style={{
        position: 'absolute', top: 60, right: 80,
        color: 'rgba(255,255,255,0.55)', fontSize: 15, letterSpacing: '0.15em',
        textAlign: 'right',
      }}>
        <div>2026 · 04 · 21</div>
        <div style={{ marginTop: 4, color: 'var(--accent-blue)' }}>GOVERNOR BRIEFING · 001</div>
      </div>

      {/* 거대 "01" — 도입부 영감 */}
      <div style={{
        position: 'absolute', left: 80, top: 200,
        fontFamily: 'var(--font-serif)',
        fontSize: 1100, lineHeight: 0.78,
        fontWeight: 900,
        letterSpacing: '-0.08em',
        color: 'var(--bok-navy-800)',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>01</div>

      {/* 거대 "01" 앞쪽 오버레이 — 골드 윤곽 */}
      <div style={{
        position: 'absolute', left: 84, top: 204,
        fontFamily: 'var(--font-serif)',
        fontSize: 1100, lineHeight: 0.78,
        fontWeight: 900,
        letterSpacing: '-0.08em',
        color: 'transparent',
        WebkitTextStroke: '2px oklch(80% 0.10 235 / 0.35)',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>01</div>

      {/* 중앙-우측 실질 콘텐츠 */}
      <div style={{
        position: 'absolute', right: 80, top: 320,
        textAlign: 'right', maxWidth: 1300,
      }}>
        <div className="mono" style={{ fontSize: 17, color: 'var(--accent-blue)', letterSpacing: '0.3em', marginBottom: 28 }}>
          CHAPTER ONE
        </div>
        <div style={{
          fontSize: 130, fontWeight: 800,
          color: 'var(--white)', lineHeight: 0.98,
          letterSpacing: '-0.04em',
          whiteSpace: 'nowrap',
        }}>
          신임 총재<br/>업무보고
        </div>
        <div style={{
          marginTop: 40,
          fontSize: 28, fontWeight: 400,
          color: 'rgba(255,255,255,0.75)',
          letterSpacing: '-0.015em',
        }}>
          경제연구원은 무엇을 하고,<br/>
          <span style={{ color: 'var(--white)', fontWeight: 600 }}>앞으로 무엇을 할 것인가.</span>
        </div>
      </div>

      {/* 하단 챕터 목록 */}
      <div style={{
        position: 'absolute', bottom: 60, left: 80, right: 80,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24,
      }}>
        {[
          ['01','표지','—'],
          ['02','업무 현황','Current Operations'],
          ['03','중점 업무','Strategic Priorities'],
          ['04','기타','Other Matters'],
        ].map(([n, kr, en], i) => (
          <div key={n} style={{
            padding: '8px 20px 8px 0',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)',
            paddingLeft: i === 0 ? 0 : 28,
            color: i === 0 ? 'var(--white)' : 'rgba(255,255,255,0.5)',
          }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '0.15em', color: i === 0 ? 'var(--accent-blue)' : 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{n}</div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 2 }}>{kr}</div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.35)' }}>{en}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.CoverB = CoverB;
