/* global React */
// 슬라이드 2 — Ⅰ. 일반 현황: 조직도 가로 풀폭, 하단 보조 패널
function SlideStatus() {
  const labs = [
    { n: '연구조정실', c: 9, d: '연구업무 기획·조정 · 학계·연구기관 교류' },
    { n: '금융통화연구실', c: 6, d: '통화정책 · 인플레이션 · 금융시장 행태' },
    { n: '국제경제연구실', c: 7, d: '환율 · 국제자본이동 · 국제교역' },
    { n: '거시경제연구실', c: 7, d: '경기변동 · 고용 · 거시재정' },
    { n: '미시제도연구실', c: 5, d: '산업구조 · 기업혁신 · 기후·제도' },
    { n: '인구노동연구실', c: 5, d: '인구구조 · 노동시장 · 미시재정' },
    { n: '북한경제연구실', c: 5, d: '북한경제 · 남북통합 · 화폐 통합' },
  ];
  const budget = [
    { k: '컨퍼런스 개최', v: 10.1 },
    { k: '연구용역 및 자문', v: 5.9 },
    { k: '학계·연구기관 교류', v: 3.2 },
    { k: '기타 운영', v: 8.7 },
  ];
  const totalB = 27.9;
  const colors = ['var(--bok-navy-900)', 'var(--bok-navy-700)', 'var(--bok-navy-500)', 'var(--bok-navy-200)'];

  return (
    <div className="slide bis" style={{ padding: '36px 52px 22px', display: 'flex', flexDirection: 'column' }}>
      {/* 헤더 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 10, borderBottom: '4px solid var(--bok-navy-900)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--bok-navy-900)', fontFamily: 'var(--font-serif)' }}>Ⅰ</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.025em' }}>일반 현황</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink-700)' }}>원장 1 · 부원장 2 · 연구실 7</div>
          <div style={{ width: 1, height: 18, background: 'var(--ink-300)' }} />
          <div className="mono" style={{ fontSize: 12, color: 'var(--ink-500)', letterSpacing: '0.1em' }}>2026. 4. 30. 현재</div>
        </div>
      </div>

      {/* KPI 밴드 */}
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--ink-200)' }}>
        {[
          { big: '51', unit: '명', lbl: '총 인원', sub: '박사 37명 (72.5%)' },
          { big: '7', unit: '개 실', lbl: '연구조직', sub: '원장–부원장 2' },
          { big: '27.9', unit: '억원', lbl: '2026년 예산', sub: '전년比 유지' },
          { big: '10.1', unit: '억원', lbl: '컨퍼런스 예산', sub: '주관 2건 포함' },
        ].map((k, i) => (
          <div key={k.lbl} style={{ padding: '14px 20px', borderRight: i < 3 ? '1px solid var(--ink-200)' : 'none', background: i === 0 ? 'var(--bok-navy-900)' : 'var(--white)', color: i === 0 ? 'var(--white)' : 'var(--ink-900)' }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.15em', fontWeight: 700, color: i === 0 ? 'var(--accent-gold)' : 'var(--bok-navy-700)' }}>{k.lbl}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
              <span className="tnum" style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1 }}>{k.big}</span>
              <span style={{ fontSize: 18, fontWeight: 600, color: i === 0 ? 'rgba(255,255,255,0.7)' : 'var(--ink-500)' }}>{k.unit}</span>
            </div>
            <div style={{ fontSize: 14, color: i === 0 ? 'rgba(255,255,255,0.7)' : 'var(--ink-700)', marginTop: 4, fontWeight: 500 }}>{k.sub}</div>
          </div>
        ))}
      </div>

      {/* 조직도 — 가로 풀폭, 컴팩트 */}
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--bok-navy-900)', marginBottom: 8, display: 'flex', alignItems: 'baseline', gap: 12 }}>
          조직도
          <span style={{ fontSize: 14, color: 'var(--ink-500)', fontWeight: 500 }}>7개 실 · 실별 인력 및 주요 기능</span>
        </div>

        {/* 원장·부원장 수평 배치 */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '0.12em', fontWeight: 700 }}>PRESIDENT</div>
            <div style={{ padding: '10px 40px', background: 'var(--bok-navy-900)', color: 'var(--white)', fontSize: 20, fontWeight: 800, letterSpacing: '0.12em' }}>원 장</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
            <div style={{ padding: '8px 30px', background: 'var(--bok-navy-700)', color: 'var(--white)', fontSize: 16, fontWeight: 700, letterSpacing: '0.06em' }}>부원장 2명</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-500)', letterSpacing: '0.12em', fontWeight: 700 }}>VICE</div>
          </div>
        </div>

        {/* 트리 분기선 */}
        <div style={{ position: 'relative', height: 14, marginBottom: 0 }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', width: 2, height: 6, background: 'var(--bok-navy-900)', transform: 'translateX(-50%)' }} />
          <div style={{ position: 'absolute', top: 6, left: `${100 / 14}%`, right: `${100 / 14}%`, height: 2, background: 'var(--bok-navy-900)' }} />
          {labs.map((_, i) => (
            <div key={i} style={{ position: 'absolute', top: 6, left: `${(100 / 14) + i * (100 / 7)}%`, width: 2, height: 8, background: 'var(--bok-navy-900)', transform: 'translateX(-50%)' }} />
          ))}
        </div>

        {/* 7개 실 카드 — 컴팩트 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
          {labs.map((l) => (
            <div key={l.n} style={{ background: 'var(--white)', border: '1px solid var(--ink-200)', borderTop: '4px solid var(--bok-navy-900)', padding: '10px 10px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.15, color: 'var(--bok-navy-900)', minHeight: 18 }}>{l.n}</div>
              <div style={{ marginTop: 5, padding: '2px 12px', background: 'var(--bok-navy-100)', color: 'var(--bok-navy-900)' }}>
                <span className="mono tnum" style={{ fontSize: 22, fontWeight: 800 }}>{l.c}</span>
                <span style={{ fontSize: 12, marginLeft: 2 }}>명</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-700)', marginTop: 7, lineHeight: 1.35, fontWeight: 500 }}>{l.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 4열: 예산 · 연구활동 · 학술 네트워크 · 미션 */}
      <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1.25fr 1fr 1fr 1fr', gap: 10, flex: 1, minHeight: 0 }}>
        {/* 예산 도넛 */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--ink-200)', padding: '12px 16px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--bok-navy-900)' }}>2026년 예산 배분</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-500)', letterSpacing: '0.08em' }}>억원</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, flex: 1 }}>
            <svg viewBox="0 0 120 120" width="92" height="92" style={{ flexShrink: 0 }}>
              {(() => {
                const cx = 60, cy = 60, r = 46, sw = 20;
                const c = 2 * Math.PI * r;
                let acc = 0;
                return budget.map((b, i) => {
                  const frac = b.v / totalB;
                  const dash = frac * c;
                  const el = (
                    <circle key={b.k} cx={cx} cy={cy} r={r} fill="none" stroke={colors[i]} strokeWidth={sw}
                      strokeDasharray={`${dash} ${c - dash}`}
                      strokeDashoffset={-acc}
                      transform={`rotate(-90 ${cx} ${cy})`}
                    />
                  );
                  acc += dash;
                  return el;
                });
              })()}
              <text x="60" y="58" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--bok-navy-900)" className="tnum">27.9</text>
              <text x="60" y="74" textAnchor="middle" fontSize="10" fill="var(--ink-500)">억원</text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
              {budget.map((b, i) => (
                <div key={b.k} style={{ display: 'grid', gridTemplateColumns: '9px 1fr auto', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 9, height: 9, background: colors[i] }} />
                  <span style={{ fontSize: 11, color: 'var(--ink-900)', fontWeight: 600, lineHeight: 1.2 }}>{b.k}</span>
                  <span className="mono tnum" style={{ fontSize: 11, fontWeight: 700, color: 'var(--bok-navy-900)' }}>{b.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 연구활동 KPI */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--ink-200)', padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--bok-navy-900)', marginBottom: 8 }}>연구 활동</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, flex: 1 }}>
            {[
              { n: '28+', l: 'BOK경제연구 · 연' },
              { n: '42', l: '이슈노트 발간' },
              { n: '12', l: '연구용역 과제' },
              { n: '8', l: '해외 리서치 교환' },
            ].map((k, i) => (
              <div key={i} style={{ background: 'var(--bok-navy-050)', padding: '8px 10px' }}>
                <div className="mono tnum" style={{ fontSize: 22, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.03em', lineHeight: 1 }}>{k.n}</div>
                <div style={{ fontSize: 10.5, color: 'var(--ink-700)', fontWeight: 600, marginTop: 3 }}>{k.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 학술 네트워크 */}
        <div style={{ background: 'var(--bok-navy-900)', color: 'var(--white)', padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
            <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em' }}>학술 네트워크</div>
            <div className="mono" style={{ fontSize: 9, color: 'var(--accent-gold)', letterSpacing: '0.18em', fontWeight: 800 }}>PARTNERS</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 10px', fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 600, flex: 1, alignContent: 'start' }}>
            {['BOJ · 일본', 'BDF · 프랑스', 'MNB · 헝가리', 'ECB · 유럽', 'CEBRA', 'OECD–CEPR', 'NBER', 'BIS'].map(x => (
              <div key={x} style={{ display: 'flex', gap: 6, alignItems: 'center' }}><span style={{ width: 3, height: 3, background: 'var(--accent-gold)', borderRadius: '50%' }} />{x}</div>
            ))}
          </div>
        </div>

        {/* 미션 */}
        <div style={{ background: 'oklch(78% 0.09 85 / 0.22)', borderLeft: '4px solid var(--accent-gold-deep)', padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent-gold-deep)', fontWeight: 800, marginBottom: 6 }}>MISSION</div>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.4 }}>
            중장기 심층연구 · 정책현안 분석 · 학술교류로 <span style={{ color: 'var(--accent-gold-deep)' }}>대한민국 Think tank 선도</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px solid var(--ink-200)', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-500)' }} className="mono">
        <span>한국은행 경제연구원 · 일반 현황</span>
        <span>2 / 4</span>
      </div>
    </div>
  );
}
window.SlideStatus = SlideStatus;
