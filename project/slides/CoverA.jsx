/* global React */
// 표지 A — Jensen Huang 스타일: 극적 스케일 타이포 + 미니멀 헤드라인
// 풀블리드 다크 네이비 배경에 거대 타이포, 상단 정보 키워드가 뜨는 구조

function CoverA() {
  return (
    <div className="slide jensen" style={{ background: 'var(--bok-navy-950)' }}>
      {/* 미세한 그리드 백그라운드 */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      {/* 엠버 글로우 — 하단 좌측에서 은은하게 */}
      <div style={{
        position: 'absolute', left: -200, bottom: -260, width: 1000, height: 1000,
        background: 'radial-gradient(circle, oklch(55% 0.15 65 / 0.35), transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* 상단 고정 바 */}
      <div style={{
        position: 'absolute', top: 56, left: 80, right: 80,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        color: 'rgba(255,255,255,0.55)',
        fontSize: 16, letterSpacing: '0.08em',
      }} className="mono">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent-gold)' }} />
          <span style={{ textTransform: 'uppercase' }}>The Bank of Korea · Economic Research Institute</span>
        </div>
        <div>2026.04.21</div>
      </div>

      {/* 중앙 아이덴티티 */}
      <div style={{
        position: 'absolute', top: '50%', left: 80, transform: 'translateY(-50%)',
        maxWidth: 1600,
      }}>
        <div className="mono" style={{
          fontSize: 18, color: 'var(--accent-gold)', letterSpacing: '0.28em',
          textTransform: 'uppercase', marginBottom: 36,
        }}>
          新任 總裁 業務報告 · Briefing for the Governor
        </div>

        <div style={{
          fontWeight: 900,
          fontSize: 200,
          lineHeight: 0.92,
          letterSpacing: '-0.05em',
          color: 'var(--white)',
          whiteSpace: 'nowrap',
        }}>
          경제연구원
        </div>
        <div style={{
          fontWeight: 300,
          fontSize: 140,
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          color: 'rgba(255,255,255,0.55)',
          marginTop: -8,
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
        }}>
          업무보고
        </div>

        <div style={{
          marginTop: 64,
          display: 'flex', gap: 48, alignItems: 'center',
          fontSize: 22, color: 'rgba(255,255,255,0.85)',
          fontWeight: 500, letterSpacing: '-0.01em',
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <span style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.4)' }} />
            <span className="mono" style={{ fontSize: 15, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)' }}>RESEARCH</span>
          </div>
          <div>정책 의제 선도 · 핵심 연구 기능 강화 · 국제 허브화</div>
        </div>
      </div>

      {/* 하단 메타 */}
      <div style={{
        position: 'absolute', bottom: 60, left: 80, right: 80,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        color: 'rgba(255,255,255,0.7)',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10 }}>PRESENTED TO</div>
          <div style={{ fontSize: 24, fontWeight: 600 }}>신임 총재</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="mono" style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10 }}>DIVISION</div>
          <div style={{ fontSize: 24, fontWeight: 600 }}>경제연구원 Economic Research Institute</div>
        </div>
      </div>
    </div>
  );
}

window.CoverA = CoverA;
