/* global React */
// 슬라이드 3 — Ⅱ. 중점 추진 업무: 4개 축, 꽉 찬 레이아웃, 핵심항목 하이라이트
function SlidePriorities() {
  const pillars = [
    {
      n: '01', kr: '경제구조 변화\n중장기 심층연구', tag: '인구구조 진단 · 세대간 분배 · 가계부채 연착륙 · 부동산 PF 리스크',
      items: [
        { t: '세대간 회계 · 재정지속가능성', hi: true },
        { t: '정년 연장 효과 · 세대간 분배' },
        { t: '출산 기대왜곡이 저출산에 미치는 영향', hi: true },
        { t: '소득수준별 통화정책 파급 이질성' },
        { t: '가구화 DB 기반 가계부채 리스크', hi: true },
        { t: '부동산 PF 잠재리스크 · 네트워크' },
      ],
    },
    {
      n: '02', kr: '거시경제·금융\n외환시장 현안', tag: '전세의 월세화 · 스테이블코인 · 외환 헤징 · 글로벌 불균형',
      items: [
        { t: '전세의 월세화가 금융안정에 미치는 영향', hi: true },
        { t: '해외투자 확대와 국내 금융시장' },
        { t: '달러 스테이블코인 레버리지 투자', hi: true },
        { t: '글로벌 불균형 조정과 최적 정책조합' },
        { t: '외환시장 헤징 경로와 환율 결정', hi: true },
      ],
    },
    {
      n: '03', kr: '디지털·분절화\n북한 관련 연구', tag: 'AI 공급망·노동 충격 · 위성·AI 북한경제 · 경제안보 제조업',
      items: [
        { t: 'AI 확산과 재정 지속가능성' },
        { t: 'AI 기반 공급망 충격 식별', hi: true },
        { t: 'AI 확산과 직업별 노동수요' },
        { t: '위성·대기가스·AI 활용 북한경제 추정', hi: true },
        { t: '경제안보 관점 주요 제조업 정책과제' },
      ],
    },
    {
      n: '04', kr: '학술교류 주도\n연구 네트워크 허브', tag: '국제컨퍼런스 주관 · 해외 중앙은행 협력 · 국내 학회 공동연구',
      items: [
        { t: 'BOK 국제컨퍼런스 (6월 개최)', hi: true },
        { t: 'OECD–CEPR 공동 컨퍼런스 (9월)', hi: true },
        { t: 'CEBRA 특별세션 운영' },
        { t: 'BOJ · BDF · MNB 리서치 워크숍' },
        { t: '한국경제학회·국제경제학회 공동대회' },
      ],
    },
  ];

  return (
    <div className="slide bis" style={{ padding: '40px 56px 28px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12, borderBottom: '4px solid var(--bok-navy-900)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--bok-navy-900)', fontFamily: 'var(--font-serif)' }}>Ⅱ</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.025em' }}>중점 추진 업무</div>
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-500)', fontWeight: 500 }}>경제전망보고서 Ch.3 심층연구 · 연 2회 정례화</div>
      </div>

      {/* 방향성 밴드 */}
      <div style={{ marginTop: 14, background: 'var(--bok-navy-900)', color: 'var(--white)', padding: '18px 28px', display: 'grid', gridTemplateColumns: '200px 1fr 1fr 1fr', gap: 24, alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: 20 }}>
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.24em', color: 'var(--accent-gold)', fontWeight: 700 }}>DIRECTION</div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, letterSpacing: '-0.01em' }}>2026 연구 방향</div>
        </div>
        {[
          { h: '질 높은 연구', k: '중장기 심층연구 · 학술지 게재 · 데이터 기반 실증', last: false },
          { h: '학술교류 강화', k: '국제 컨퍼런스 주관 · 해외 중앙은행 협력 · 국내 학회 공동', last: false },
          { h: 'Think tank 역할 선도', k: '정책 적시 기여 · 대외 소통 · 연구 네트워크 허브', last: true, gold: true },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: i < 2 ? 12 : 0, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.015em', color: c.gold ? 'var(--accent-gold)' : 'var(--white)', marginBottom: 4 }}>{c.h}</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.72)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.005em' }}>{c.k}</div>
          </div>
        ))}
      </div>

      {/* 4개 축 — 꽉 채움 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 14, flex: 1 }}>
        {pillars.map((p) => (
          <div key={p.n} style={{ background: 'var(--white)', border: '1px solid var(--ink-200)', display: 'flex', flexDirection: 'column' }}>
            {/* 헤더 */}
            <div style={{ padding: '16px 18px 16px', background: 'var(--bok-navy-050)', borderBottom: '3px solid var(--bok-navy-900)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                <div className="mono tnum" style={{ fontSize: 40, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.04em', lineHeight: 1 }}>{p.n}</div>
                <div className="mono" style={{ fontSize: 12, color: 'var(--bok-navy-700)', letterSpacing: '0.15em', fontWeight: 700 }}>FOCUS</div>
              </div>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.02em', lineHeight: 1.18, whiteSpace: 'pre-line' }}>{p.kr}</div>
              <div style={{ fontSize: 14, color: 'var(--bok-navy-700)', fontWeight: 600, marginTop: 12, paddingTop: 10, borderTop: '1px dashed var(--bok-navy-200)' }}>{p.tag}</div>
            </div>

            {/* 리스트 */}
            <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              {p.items.map((it, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '34px 1fr', gap: 12, alignItems: 'start',
                  padding: it.hi ? '12px 14px' : '8px 0',
                  background: it.hi ? 'oklch(78% 0.09 85 / 0.22)' : 'transparent',
                  borderLeft: it.hi ? '4px solid var(--accent-gold-deep)' : '4px solid transparent',
                }}>
                  <span className="mono tnum" style={{ color: it.hi ? 'var(--accent-gold-deep)' : 'var(--bok-navy-500)', fontSize: 16, fontWeight: 800, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--ink-900)', fontWeight: it.hi ? 700 : 500, fontSize: 18, lineHeight: 1.35, letterSpacing: '-0.01em' }}>{it.t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid var(--ink-200)', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-500)' }} className="mono">
        <span>한국은행 경제연구원 · 중점 추진 업무</span>
        <span>3 / 4</span>
      </div>
    </div>
  );
}
window.SlidePriorities = SlidePriorities;
