/* global React */
// 슬라이드 4 — 참고: 행사/실적/계획 (실제 데이터 반영)
function SlideOther() {
  const events = [
    { m: 2, host: 'KEA', full: '한국경제학회 공동대회', topic: '거시·금융·국제 공동세션', d: '2.13–14', tone: 'navy' },
    { m: 3, host: 'BOJ', full: '일본은행', topic: 'Reviving Economic Dynamism in a Shifting World', d: '3.5–3.6', tone: 'navy' },
    { m: 4, host: 'BDF', full: '프랑스중앙은행', topic: 'Digitalized and Greenized World', d: '4.7–4.8', tone: 'navy' },
    { m: 6, host: 'BOK', full: '국제컨퍼런스', topic: 'Central Banks and the Future of Money', d: '6.1–6.2', tone: 'gold' },
    { m: 6, host: 'CEBRA', full: '중앙은행연구학회', topic: '특별세션 운영', d: '6월 중', tone: 'navy' },
    { m: 8, host: 'KIEA', full: '한국국제경제학회', topic: '공동 학술대회 · 국제경제 세션', d: '8.21–22', tone: 'navy' },
    { m: 9, host: 'OECD–CEPR', full: '공동 컨퍼런스', topic: 'Economics of Ageing and Longevity', d: '9.2–9.3', tone: 'gold' },
    { m: 11, host: 'MNB', full: '헝가리중앙은행', topic: 'Lámfalussy Lectures · 리서치 교류', d: '11.10–11', tone: 'navy' },
  ];

  // 참고1 — 최근 주요 연구 실적 (카테고리 그룹)
  const achievements = [
    {
      cat: '저출산·고령화', accent: true, items: [
        { t: '초저출산 및 초고령사회: 극단적 인구구조의 원인·영향·대책', ym: '23.11', p: '중장기 심층연구' },
        { t: '주택연금·민간 역모기지 활성화를 통한 소비 확대 및 노인빈곤 완화', ym: '25.05', p: 'BOK이슈노트' },
        { t: '초고령화에 따른 통화정책 여건 변화와 시사점', ym: '25.06', p: '중장기 심층연구' },
        { t: '연명의료, 누구의 선택인가: 환자선호와 의료현실의 괴리', ym: '25.12', p: 'BOK이슈노트' },
        { t: '초고령사회와 생애말기 필수산업의 활성화', ym: '26.02', p: 'BOK이슈노트' },
      ],
    },
    {
      cat: '신성장 산업', items: [
        { t: '첨단 바이오헬스 산업 육성방안 — 바이오 데이터 활용 기반 구축', ym: '26.02', p: 'BOK이슈노트' },
      ],
    },
    {
      cat: '생산성 제고', items: [
        { t: '혁신과 경제성장 — 우리나라 기업의 혁신활동 분석 및 평가', ym: '24.05', p: '중장기 심층연구' },
        { t: '우리나라 중소기업 현황과 지원제도 개선방안', ym: '25.11', p: '중장기 심층연구' },
        { t: '생산 부문으로의 자금 흐름 전환과 성장 활력', ym: '25.12', p: 'BOK이슈노트' },
      ],
    },
    {
      cat: '기후변화', items: [
        { t: '탄소중립경제로의 길: 우리나라 기후테크의 현황과 과제', ym: '24.11', p: '중장기 심층연구' },
      ],
    },
    {
      cat: '교육', items: [
        { t: '입시경쟁 과열로 인한 사회문제와 대응방안', ym: '24.08', p: 'BOK이슈노트' },
      ],
    },
    {
      cat: '통화정책 · 금융·외환 안정', accent: true, items: [
        { t: '최근 인플레이션의 수요·공급 요인 분해 — 미국과의 비교', ym: '23.01', p: 'BOK경제연구' },
        { t: '경기변동 충격과 한국의 불평등', ym: '23.01', p: 'BOK경제연구' },
        { t: '통화정책 충격이 소비지출에 미치는 영향 — 가계특성별 분석', ym: '23.01', p: 'BOK경제연구' },
        { t: '통화정책 충격의 지역별 영향 분석', ym: '23.06', p: 'BOK경제연구' },
        { t: '가계부채 증가의 원인·영향 및 연착륙 방안', ym: '23.06', p: 'BOK경제연구' },
        { t: '재정준칙 하에서의 최적 통화재정정책', ym: '23.11', p: 'BOK경제연구' },
        { t: '전세비용의 금리리스크 분석 — 체감 인플레이션 격차 중심', ym: '24.02', p: 'BOK경제연구' },
        { t: '주택가격 기대심리의 특징과 시사점', ym: '25.06', p: 'BOK이슈노트' },
      ],
    },
  ];

  // 참고2 — 2026년 주요 연구 계획 (구조화)
  const plan2026 = [
    {
      cat: '저출산·고령화', items: [
        { t: '재정지속가능성 평가를 위한 세대간 회계 분석', k: true },
        { t: '정년 연장·고령층 고용 확대의 재정건전성·세대간 분배 영향', k: true },
        { t: '출산 기대왜곡이 저출산에 미치는 영향 분석', k: true },
        { t: '고령화에 따른 의료시스템 문제 대응·공적 돌봄 체계' },
        { t: '육아휴직 정책(자녀연령 확대)의 효과 분석' },
        { t: '인구감소 대응정책의 사회적 수용성·비용분담 구조' },
        { t: '대학 창업 촉진을 통한 혁신 경쟁력 강화 방안' },
      ],
    },
    {
      cat: '부문간 양극화 · 불균형', items: [
        { t: '소득 수준에 따른 통화정책 파급효과의 이질성', k: true },
        { t: '체감 물가 이질성 감안 통화정책 파급경로·후생 분석', k: true },
      ],
    },
    {
      cat: '부동산가격 · 가계부채', items: [
        { t: '가구화 DB를 이용한 가계부채 리스크 평가', k: true },
        { t: '부동산 PF 잠재리스크 분석 — 미시 네트워크 기반', k: true },
      ],
    },
    {
      cat: '금융구조 · 금융·외환시장 리스크', items: [
        { t: '전세의 월세화가 금융안정에 미치는 영향', k: true },
        { t: '해외 투자 확대에 따른 국내 금융시장 변화·금융안정', k: true },
        { t: '달러 스테이블코인 해외 가상화폐 레버리지 투자 영향', k: true },
        { t: '글로벌 불균형 조정 충격과 한국의 최적 정책조합', k: true },
        { t: '외환시장 헤징 경로가 환율 결정에 미치는 영향', k: true },
        { t: '공공·민간 부문 자본 유출이 환율에 미치는 영향' },
        { t: '한국 주식시장 투자주체간 위험기피의 이질성' },
        { t: '한국의 통화정책 충격 식별' },
      ],
    },
    {
      cat: 'AI · 디지털 혁신', items: [
        { t: 'AI 확산이 재정의 지속가능성에 미치는 영향 분석', k: true },
        { t: 'AI 기반 공급망 충격 식별·산업별 파급경로 분석', k: true },
        { t: 'AI 확산이 직업 특성별 노동수요에 미치는 영향', k: true },
      ],
    },
    {
      cat: '북한 · 경제안보', items: [
        { t: '경제안보 관점의 주요 제조업과 정책과제', k: true },
        { t: '위성영상·대기가스·AI 활용 북한 산업생산 추정', k: true },
        { t: '경제안보의 헌법상 근거와 우리 법제의 시사점' },
        { t: '최근 북한의 금융제도 변화 연구' },
        { t: '북한경제의 시장화 — 재산권 변화 중심' },
      ],
    },
    {
      cat: '혁신 · 기후 등 기타 현안', items: [
        { t: '기업의 R&D 전략과 경영 성과' },
        { t: '재생에너지 확대·대규모 전력수요 증가의 전력시장 영향' },
      ],
    },
  ];

  const totalPlan = plan2026.reduce((s, g) => s + g.items.length, 0);
  const keyPlan = plan2026.reduce((s, g) => s + g.items.filter(x => x.k).length, 0);

  return (
    <div className="slide bis" style={{ padding: '32px 48px 22px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 10, borderBottom: '4px solid var(--bok-navy-900)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--bok-navy-900)', fontFamily: 'var(--font-serif)' }}>참고</div>
          <div style={{ fontSize: 38, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.025em' }}>주요 행사 일정 · 연구 실적 및 계획</div>
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--ink-500)', letterSpacing: '0.1em' }}>2026 REFERENCE</div>
      </div>

      {/* 타임라인 — 컴팩트 */}
      <div style={{ marginTop: 10, background: 'var(--white)', border: '1px solid var(--ink-200)', padding: '12px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--bok-navy-900)' }}>2026 국제 컨퍼런스 · 워크숍</div>
          <div style={{ display: 'flex', gap: 14, fontSize: 11, color: 'var(--ink-700)', fontWeight: 600 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: 'var(--accent-gold-deep)' }}/>당행 주관</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: 'var(--bok-navy-900)' }}/>공동·교환</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)', marginBottom: 4 }}>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
              <div key={m} className="mono" style={{ fontSize: 11, color: 'var(--ink-700)', fontWeight: 700, letterSpacing: '0.04em' }}>{m}월</div>
            ))}
          </div>
          <div style={{ position: 'relative', height: 2, background: 'var(--bok-navy-900)', marginBottom: 8 }}>
            {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
              <div key={i} style={{ position: 'absolute', left: `${(i / 11) * 100}%`, top: -4, width: 2, height: 10, background: 'var(--bok-navy-900)' }} />
            ))}
          </div>

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)', gap: 0, minHeight: 70 }}>
            {events.map((e, i) => {
              const col = e.m - 2;
              const monthPeers = events.filter(x => x.m === e.m);
              const stackIdx = monthPeers.indexOf(e);
              const gold = e.tone === 'gold';
              const nextOccupied = events.some(x => x.m === e.m + 1 && events.filter(y => y.m === x.m).indexOf(x) === stackIdx);
              const span = nextOccupied ? 1 : 2;
              return (
                <div key={i} style={{ gridColumn: `${col + 1} / span ${span}`, gridRow: stackIdx + 1, paddingRight: 4 }}>
                  <div style={{ background: gold ? 'oklch(78% 0.09 85 / 0.18)' : 'var(--bok-navy-050)', borderLeft: `3px solid ${gold ? 'var(--accent-gold-deep)' : 'var(--bok-navy-900)'}`, padding: '7px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 6 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--bok-navy-900)' }}>
                        {e.host} <span style={{ fontSize: 10, color: 'var(--ink-500)', fontWeight: 500 }}>{e.full}</span>
                      </div>
                      <div className="mono tnum" style={{ fontSize: 10, color: gold ? 'var(--accent-gold-deep)' : 'var(--bok-navy-700)', fontWeight: 800 }}>{e.d}</div>
                    </div>
                    <div style={{ fontSize: 10.5, color: 'var(--ink-700)', marginTop: 2, lineHeight: 1.3, fontStyle: 'italic' }}>{e.topic}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 하단 — 실적 + 계획 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 12, marginTop: 10, flex: 1, minHeight: 0 }}>

        {/* 실적 */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--ink-200)', padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, paddingBottom: 6, borderBottom: '2px solid var(--bok-navy-900)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--bok-navy-900)' }}>최근 주요 연구 실적</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-500)', letterSpacing: '0.1em' }}>&lt;참고 1&gt; 2023 — 2026</div>
            </div>
            <div className="mono tnum" style={{ fontSize: 12, color: 'var(--bok-navy-900)', fontWeight: 800 }}>총 19편</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 18px', flex: 1, alignContent: 'start' }}>
            {achievements.map((g, gi) => (
              <div key={gi} style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  borderBottom: `2px solid ${g.accent ? 'var(--accent-gold-deep)' : 'var(--bok-navy-700)'}`,
                  paddingBottom: 3, marginBottom: 4,
                }}>
                  <span style={{ width: 4, height: 11, background: g.accent ? 'var(--accent-gold-deep)' : 'var(--bok-navy-700)' }}/>
                  <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.01em' }}>{g.cat}</div>
                  <div className="mono tnum" style={{ fontSize: 9, color: 'var(--ink-500)', marginLeft: 'auto', fontWeight: 700 }}>{g.items.length}편</div>
                </div>
                {g.items.map((it, ii) => (
                  <div key={ii} style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 6, padding: '2px 0', alignItems: 'baseline' }}>
                    <div className="mono tnum" style={{ fontSize: 10, color: 'var(--ink-500)', fontWeight: 700, textAlign: 'left' }}>{it.ym}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--ink-900)', lineHeight: 1.35, letterSpacing: '-0.015em' }}>
                      {it.t}
                      <span className="mono" style={{ fontSize: 8.5, color: 'var(--ink-500)', marginLeft: 5, fontWeight: 700, letterSpacing: '0.04em' }}>· {it.p}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 2026 계획 */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--ink-200)', padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, paddingBottom: 6, borderBottom: '2px solid var(--bok-navy-900)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--bok-navy-900)' }}>2026년 주요 연구 계획</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-500)', letterSpacing: '0.1em' }}>&lt;참고 2&gt;</div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <div className="mono tnum" style={{ fontSize: 12, color: 'var(--bok-navy-900)', fontWeight: 800 }}>총 {totalPlan}</div>
              <div className="mono tnum" style={{ fontSize: 11, color: 'var(--accent-gold-deep)', fontWeight: 800 }}>중점 {keyPlan}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 16px', flex: 1, alignContent: 'start' }}>
            {plan2026.map((g, gi) => (
              <div key={gi} style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  borderBottom: '2px solid var(--bok-navy-700)',
                  paddingBottom: 3, marginBottom: 4,
                }}>
                  <span style={{ width: 4, height: 11, background: 'var(--bok-navy-700)' }}/>
                  <div style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--bok-navy-900)', letterSpacing: '-0.01em' }}>{g.cat}</div>
                  <div className="mono tnum" style={{ fontSize: 9, color: 'var(--ink-500)', marginLeft: 'auto', fontWeight: 700 }}>{g.items.length}</div>
                </div>
                {g.items.map((it, ii) => (
                  <div key={ii} style={{
                    display: 'grid', gridTemplateColumns: '12px 1fr', gap: 5, padding: '1.5px 0', alignItems: 'baseline',
                  }}>
                    <div style={{
                      fontSize: 8, fontWeight: 800, color: it.k ? 'var(--accent-gold-deep)' : 'var(--ink-400)',
                      lineHeight: 1, paddingTop: 2,
                    }}>{it.k ? '◆' : '·'}</div>
                    <div style={{
                      fontSize: 10.5, color: 'var(--ink-900)',
                      fontWeight: it.k ? 700 : 500,
                      lineHeight: 1.3, letterSpacing: '-0.015em',
                    }}>
                      {it.t}
                      {it.k && <span className="mono" style={{ fontSize: 8, color: 'var(--accent-gold-deep)', marginLeft: 4, fontWeight: 800, letterSpacing: '0.1em' }}>[중점]</span>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px solid var(--ink-200)', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-500)' }} className="mono">
        <span>한국은행 경제연구원 · 참고 · 중장기 심층연구 · BOK경제연구 · BOK이슈노트</span>
        <span>4 / 4</span>
      </div>
    </div>
  );
}
window.SlideOther = SlideOther;
