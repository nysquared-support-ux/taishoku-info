/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ============== Brand tokens ==============
const C = {
  ink: "#0B1B2B",
  inkSoft: "#37526E",
  inkMute: "#6F8499",
  line: "#D9E4EE",
  lineSoft: "#E9F0F6",
  bg: "#FFFFFF",
  bgSoft: "#F4F8FB",
  bgTint: "#EAF3F8",
  brand: "#0E7490",     // teal-700
  brandDeep: "#0B5A70",
  brandSoft: "#CFE6EE",
  brandWash: "#E6F2F6",
  accent: "#1E88A8",
  warn: "#B45309",
  good: "#15803D",
  line2: "#C7D7E2",
  shadow: "0 1px 2px rgba(11,27,43,0.04), 0 6px 24px rgba(11,27,43,0.06)",
};

// ============== Small UI atoms ==============
function Pill({ children, tone = "brand" }) {
  const styles = {
    brand: { background: C.brandWash, color: C.brandDeep, border: `1px solid ${C.brandSoft}` },
    line: { background: "#fff", color: C.inkSoft, border: `1px solid ${C.line}` },
    warn: { background: "#FFF7ED", color: C.warn, border: "1px solid #FCD9B0" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600,
      letterSpacing: "0.02em", ...styles
    }}>{children}</span>
  );
}

function SectionHeader({ kicker, title, lead }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {kicker && (
        <div style={{
          fontSize: 12, fontWeight: 700, color: C.brand, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: 10,
        }}>{kicker}</div>
      )}
      <h2 style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: "clamp(22px, 5vw, 30px)", lineHeight: 1.4, fontWeight: 700,
        color: C.ink, margin: 0, letterSpacing: "0.01em",
      }}>{title}</h2>
      {lead && (
        <p style={{
          color: C.inkSoft, fontSize: 15, lineHeight: 1.85, marginTop: 12,
          maxWidth: 640,
        }}>{lead}</p>
      )}
    </div>
  );
}

// Inline icons (line style, no emoji)
const Icon = {
  moon: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5z" />
    </svg>
  ),
  users: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  pulse: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-7 4 14 2-7h6" />
    </svg>
  ),
  handshake: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12l4-4 4 2 4-4 4 2 4 4-4 4-3-2-3 3-3-2-3 2-4-5z" />
    </svg>
  ),
  shield: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  clock: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  scale: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 8h14" />
      <path d="M5 8l-3 7a4 4 0 0 0 6 0z" />
      <path d="M19 8l-3 7a4 4 0 0 0 6 0z" />
    </svg>
  ),
  doc: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  ),
  chat: (s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" />
    </svg>
  ),
  check: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5 9-11" />
    </svg>
  ),
  cross: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  triangle: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4l10 17H2z" />
      <path d="M12 11v4M12 18v.01" />
    </svg>
  ),
  chevron: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  phone: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
};

// ============== Header / Top bar ==============
function PRBar() {
  return (
    <div style={{
      background: C.bgTint, color: C.inkSoft, fontSize: 11,
      padding: "6px 16px", textAlign: "center", letterSpacing: "0.04em",
      borderBottom: `1px solid ${C.lineSoft}`,
    }}>
      [PR] 本ページは広告・プロモーションを含みます。提携サービスの紹介により当サイトは収益を得ています。
    </div>
  );
}

function TopNav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 30,
      background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
      borderBottom: `1px solid ${C.line}`,
    }}>
      <div style={{
        maxWidth: 1080, margin: "0 auto", padding: "12px 18px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})`,
            display: "grid", placeItems: "center", color: "#fff",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 3v18M3 12h18" />
            </svg>
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, fontFamily: "'Noto Serif JP', serif" }}>
              ナースリリーフ相談室
            </div>
            <div style={{ fontSize: 10, color: C.inkMute, marginTop: 2 }}>
              看護師のための退職相談メディア
            </div>
          </div>
        </a>
        <a href="https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER" target="_blank" rel="sponsored noopener" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "#0E7490", color: "#fff", textDecoration: "none",
          padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 700,
        }}>
          {Icon.chat(15)} 無料相談
        </a>
      </div>
    </header>
  );
}

// ============== Hero ==============
function Hero() {
  return (
    <section id="top" style={{
      position: "relative", overflow: "hidden",
      background: `linear-gradient(180deg, ${C.brandWash} 0%, #FFFFFF 100%)`,
      borderBottom: `1px solid ${C.line}`,
    }}>
      {/* Subtle line pattern */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0v40" fill="none" stroke={C.brandSoft} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div style={{
        position: "relative", maxWidth: 1080, margin: "0 auto",
        padding: "44px 20px 56px",
        display: "grid", gap: 36,
        gridTemplateColumns: "minmax(0,1fr)",
      }} className="hero-grid">
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
            <Pill>看護師専門の相談窓口</Pill>
            <Pill tone="line">24時間受付</Pill>
            <Pill tone="line">相談料 無料</Pill>
          </div>

          <h1 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(26px, 6.4vw, 42px)",
            lineHeight: 1.35, fontWeight: 700, color: C.ink,
            margin: "0 0 18px", letterSpacing: "0.005em",
          }}>
            夜勤明けの朝、もう<br />
            <span style={{
              borderBottom: `3px solid ${C.brand}`, paddingBottom: 2,
            }}>「辞めます」と言えない</span>あなたへ。
          </h1>

          <p style={{
            color: C.inkSoft, fontSize: "clamp(14px, 3.6vw, 16px)",
            lineHeight: 1.95, margin: "0 0 22px", maxWidth: 560,
          }}>
            人手不足の現場で、師長からの強い引き止め。<br />
            診断書を出しても「次の人が決まるまで」と言われ続ける。<br />
            ——そんな状況こそ、第三者の冷静な手続きが必要です。本サイトでは、看護師の事情に詳しい退職代行サービスの<strong style={{ color: C.ink }}>選び方</strong>を、法令の根拠とあわせて解説します。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 380 }}>
            <a href="https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER" target="_blank" rel="sponsored noopener" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              background: "#0E7490", color: "#fff", textDecoration: "none",
              padding: "16px 22px", borderRadius: 12, fontSize: 16, fontWeight: 700,
              boxShadow: "0 6px 18px rgba(14,116,144,0.28)",
            }}>
              {Icon.chat(18)} 無料で相談する (24時間対応)
            </a>
            <a href="#choose" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: "#fff", color: C.brandDeep,
              border: `1.5px solid ${C.brandSoft}`, textDecoration: "none",
              padding: "14px 20px", borderRadius: 12, fontSize: 15, fontWeight: 600,
            }}>
              業者の選び方を読む
            </a>
          </div>

          <div style={{
            marginTop: 22, display: "flex", flexWrap: "wrap", gap: "8px 18px",
            color: C.inkSoft, fontSize: 12,
          }}>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: C.brand }}>{Icon.check(14)}</span> 即日連絡対応の窓口あり
            </span>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: C.brand }}>{Icon.check(14)}</span> 看護師経験者が監修
            </span>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: C.brand }}>{Icon.check(14)}</span> 法令根拠を明記
            </span>
          </div>
        </div>

        {/* Trust card */}
        <aside style={{
          background: "#fff", border: `1px solid ${C.line}`, borderRadius: 14,
          padding: 18, boxShadow: C.shadow,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, background: C.brandWash,
              color: C.brandDeep, display: "grid", placeItems: "center",
            }}>{Icon.shield(18)}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>編集ポリシー</div>
              <div style={{ fontSize: 11, color: C.inkMute }}>看護師経験者・社労士の監修体制</div>
            </div>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
            {[
              ["事実確認", "公的機関・法令を一次情報として参照"],
              ["利益相反の開示", "提携サービスは [PR] と明記"],
              ["更新管理", "年2回以上の見直し・更新日を記載"],
            ].map(([t, d]) => (
              <li key={t} style={{ display: "flex", gap: 10, fontSize: 13, color: C.inkSoft }}>
                <span style={{ color: C.brand, marginTop: 2 }}>{Icon.check(14)}</span>
                <div>
                  <div style={{ fontWeight: 700, color: C.ink, fontSize: 13 }}>{t}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.7 }}>{d}</div>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px dashed ${C.line}`, fontSize: 11, color: C.inkMute }}>
            最終更新: 2026年5月3日 / 監修: リーガルサポート編集部
          </div>
        </aside>
      </div>

      <style>{`
        @media (min-width: 880px) {
          .hero-grid { grid-template-columns: 1.4fr 1fr !important; align-items: start; gap: 48px !important; padding: 64px 24px 72px !important; }
        }
      `}</style>
    </section>
  );
}

// ============== Section 2: 看護師特有の事情 ==============
function NurseConcerns() {
  const items = [
    {
      icon: Icon.moon,
      tag: "夜勤・シフト",
      title: "そもそも上司と会える時間がない",
      body: "夜勤明けは判断力が鈍り、休日は寝るので精いっぱい。日勤帯にしか会えない師長へ「話があります」と切り出すタイミングが、何週間も訪れないことも珍しくありません。",
    },
    {
      icon: Icon.users,
      tag: "人手不足の引き止め",
      title: "「次の人が来るまで」という期限のない約束",
      body: "慢性的な欠員のなかで「あと半年だけ」「補充が決まったら」と引き止めが続く。情にほだされて辞表が机の引き出しに入ったまま、という相談が多く寄せられます。",
    },
    {
      icon: Icon.pulse,
      tag: "慢性的疲労",
      title: "面談・引継ぎ書類を作る気力が残っていない",
      body: "心身の不調を抱えた状態で、長い面談と詳細な引継ぎを自力で行うのは過重負担。診断書がある場合でも、第三者が間に入ることで休養を優先できます。",
    },
    {
      icon: Icon.handshake,
      tag: "関係維持希望",
      title: "院内・地域コミュニティを荒立てたくない",
      body: "看護師の業界は地域内で繋がりが残ります。感情的な対立を避け、就業規則と法律に沿って粛々と退職手続きを進めたい——という声に、第三者の代行は適しています。",
    },
  ];

  return (
    <section style={{ padding: "64px 20px", background: C.bg }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionHeader
          kicker="看護師ならではの事情"
          title="一般的な退職とは、前提が違います"
          lead="看護職の退職には、夜勤・人員配置・コミュニティ・心身負荷といった固有の論点があります。代行サービスの選定も、これらを踏まえる必要があります。"
        />

        <div className="concern-grid" style={{
          display: "grid", gap: 16,
          gridTemplateColumns: "minmax(0,1fr)",
        }}>
          {items.map((it, i) => (
            <article key={i} style={{
              background: "#fff", border: `1px solid ${C.line}`,
              borderRadius: 14, padding: 22, position: "relative",
            }}>
              <div style={{
                position: "absolute", top: 22, right: 22,
                fontFamily: "'Noto Serif JP', serif",
                fontSize: 28, fontWeight: 700, color: C.brandSoft, lineHeight: 1,
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: C.brandWash,
                color: C.brandDeep, display: "grid", placeItems: "center", marginBottom: 14,
              }}>
                {it.icon(22)}
              </div>
              <div style={{ fontSize: 11, color: C.brand, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>
                {it.tag}
              </div>
              <h3 style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: 17, fontWeight: 700, color: C.ink,
                margin: "0 0 10px", lineHeight: 1.55,
              }}>{it.title}</h3>
              <p style={{ margin: 0, color: C.inkSoft, fontSize: 14, lineHeight: 1.85 }}>{it.body}</p>
            </article>
          ))}
        </div>

        <div style={{
          marginTop: 22, padding: 16, background: C.bgSoft,
          borderRadius: 10, border: `1px solid ${C.lineSoft}`,
          fontSize: 12, color: C.inkSoft, lineHeight: 1.85,
          display: "flex", gap: 10,
        }}>
          <span style={{ color: C.inkMute, marginTop: 2, flexShrink: 0 }}>{Icon.doc(16)}</span>
          <div>
            ※ 上記は当編集部に寄せられた相談傾向の一般化です。個別の状況や雇用形態(常勤・非常勤・有期)により、適切な手続きは異なります。具体的な対応はLINE相談で確認することをおすすめします。
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 720px) {
          .concern-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; gap: 18px !important; }
        }
      `}</style>
    </section>
  );
}

// ============== Section 3: 業者3タイプ比較 ==============
function ProviderCompare() {
  const cols = [
    {
      key: "private",
      label: "民間企業",
      sub: "一般的な代行業者",
      price: "20,000〜30,000円",
      negotiate: "不可",
      negotiateNote: "退職の意思伝達のみ",
      legal: "—",
      strength: "費用が比較的抑えめ。業務時間外の連絡や即日対応など、機動力に強みがあるサービスが多い傾向。",
      weak: "退職金・有給・未払い賃金の交渉ができない。雇用主が拒否した場合に法的な詰めを行えない。",
      tone: "line",
    },
    {
      key: "union",
      label: "労働組合",
      sub: "ユニオン運営",
      price: "25,000〜30,000円",
      negotiate: "可",
      negotiateNote: "団体交渉権に基づく",
      legal: "団体交渉",
      strength: "団体交渉権により有給消化や退職日の調整など条件交渉が可能。費用と機能のバランスが取れた選択肢。",
      weak: "訴訟対応はできない。損害賠償請求など法的紛争に発展した場合は、別途弁護士が必要。",
      tone: "brand",
    },
    {
      key: "lawyer",
      label: "弁護士",
      sub: "法律事務所",
      price: "55,000円〜",
      negotiate: "可",
      negotiateNote: "代理交渉・法的対応",
      legal: "訴訟対応 可",
      strength: "未払い賃金・残業代請求・損害賠償への反論まで一貫して対応可能。法的紛争の懸念がある場合に最も適する。",
      weak: "費用が他の選択肢より高め。成功報酬が別途発生するケースもあり、事前見積りの確認が必要。",
      tone: "line",
    },
  ];

  const [active, setActive] = useState("union");
  const a = cols.find(c => c.key === active);

  return (
    <section style={{ padding: "64px 20px", background: C.bgSoft }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionHeader
          kicker="運営主体の違い"
          title="退職代行は3タイプ。交渉できる範囲が違います"
          lead="料金だけで選ぶと、いざ引き止めや有給消化交渉が必要になった際に対応できないことがあります。運営主体によって法律上できる範囲が決まっています。"
        />

        {/* Desktop: 3 column compare table */}
        <div className="compare-desktop" style={{ display: "none" }}>
          <div style={{
            background: "#fff", border: `1px solid ${C.line}`, borderRadius: 14,
            overflow: "hidden", boxShadow: C.shadow,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px repeat(3, 1fr)" }}>
              <div style={{ padding: "18px 16px", background: C.bgTint, borderRight: `1px solid ${C.line}` }}></div>
              {cols.map(c => (
                <div key={c.key} style={{
                  padding: "18px 16px", background: c.key === "union" ? C.brand : C.bgTint,
                  color: c.key === "union" ? "#fff" : C.ink,
                  borderRight: `1px solid ${c.key === "union" ? C.brandDeep : C.line}`,
                  textAlign: "center", position: "relative",
                }}>
                  {c.key === "union" && (
                    <div style={{
                      position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
                      background: "#fff", color: C.brand, fontSize: 11, fontWeight: 700,
                      padding: "3px 10px", borderRadius: 999, border: `1px solid ${C.brandSoft}`,
                    }}>バランス型</div>
                  )}
                  <div style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: 18, fontWeight: 700,
                  }}>{c.label}</div>
                  <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>{c.sub}</div>
                </div>
              ))}
            </div>

            {[
              ["料金目安", c => c.price],
              ["交渉権", c => (
                <div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    color: c.negotiate === "可" ? C.good : C.warn, fontWeight: 700,
                  }}>
                    {c.negotiate === "可" ? Icon.check(16) : Icon.cross(16)}
                    {c.negotiate}
                  </div>
                  <div style={{ fontSize: 11, color: C.inkMute, marginTop: 2 }}>{c.negotiateNote}</div>
                </div>
              )],
              ["法的根拠", c => c.legal],
              ["強み", c => <span style={{ fontSize: 13 }}>{c.strength}</span>],
              ["留意点", c => <span style={{ fontSize: 13, color: C.inkSoft }}>{c.weak}</span>],
            ].map(([label, render], idx) => (
              <div key={label} style={{
                display: "grid", gridTemplateColumns: "180px repeat(3, 1fr)",
                borderTop: `1px solid ${C.line}`,
              }}>
                <div style={{
                  padding: "16px", background: C.bgSoft, fontSize: 13, fontWeight: 700,
                  color: C.ink, borderRight: `1px solid ${C.line}`,
                }}>{label}</div>
                {cols.map(c => (
                  <div key={c.key} style={{
                    padding: "16px", borderRight: `1px solid ${C.line}`,
                    background: c.key === "union" ? C.brandWash : "#fff",
                    color: C.ink, fontSize: 14, lineHeight: 1.75,
                  }}>{render(c)}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: tabbed view */}
        <div className="compare-mobile">
          <div role="tablist" style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6,
            background: "#fff", padding: 6, borderRadius: 12, border: `1px solid ${C.line}`,
          }}>
            {cols.map(c => (
              <button key={c.key} role="tab" aria-selected={active === c.key}
                onClick={() => setActive(c.key)}
                style={{
                  padding: "10px 6px", borderRadius: 8, border: "none", cursor: "pointer",
                  background: active === c.key ? C.brand : "transparent",
                  color: active === c.key ? "#fff" : C.inkSoft,
                  fontSize: 13, fontWeight: 700, fontFamily: "inherit",
                  transition: "all 0.18s",
                }}>
                {c.label}
              </button>
            ))}
          </div>

          {a && (
            <div style={{
              marginTop: 14, background: "#fff", borderRadius: 14,
              border: `1px solid ${C.line}`, overflow: "hidden",
            }}>
              <div style={{ padding: "18px 18px 14px", borderBottom: `1px solid ${C.line}`, background: C.brandWash }}>
                <div style={{
                  fontFamily: "'Noto Serif JP', serif", fontSize: 20, fontWeight: 700, color: C.brandDeep,
                }}>{a.label}<span style={{ fontSize: 12, color: C.inkSoft, marginLeft: 8 }}>{a.sub}</span></div>
              </div>
              <div style={{ padding: 18, display: "grid", gap: 16 }}>
                <Row label="料金目安" value={a.price} />
                <Row label="交渉権" value={
                  <div>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 4,
                      color: a.negotiate === "可" ? C.good : C.warn, fontWeight: 700,
                    }}>
                      {a.negotiate === "可" ? Icon.check(16) : Icon.cross(16)}
                      {a.negotiate}
                    </span>
                    <span style={{ fontSize: 12, color: C.inkMute, marginLeft: 8 }}>({a.negotiateNote})</span>
                  </div>
                } />
                <Row label="法的根拠" value={a.legal} />
                <Row label="強み" value={<span style={{ fontSize: 14, lineHeight: 1.85 }}>{a.strength}</span>} stack />
                <Row label="留意点" value={<span style={{ fontSize: 14, lineHeight: 1.85, color: C.inkSoft }}>{a.weak}</span>} stack />
              </div>
            </div>
          )}
        </div>

        <p style={{ fontSize: 12, color: C.inkMute, marginTop: 18, lineHeight: 1.8 }}>
          ※ 料金は2026年5月時点の一般的な相場であり、各サービスにより異なります。最新の料金は各社の公式サイトでご確認ください。「交渉権」は弁護士法72条との関係で、運営主体に応じて法律上認められる範囲が異なります。
        </p>
      </div>

      <style>{`
        @media (min-width: 880px) {
          .compare-desktop { display: block !important; }
          .compare-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function Row({ label, value, stack }) {
  return (
    <div style={{
      display: stack ? "block" : "grid",
      gridTemplateColumns: "90px 1fr", gap: stack ? 6 : 12,
      paddingBottom: 14, borderBottom: `1px dashed ${C.lineSoft}`,
    }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.brandDeep, letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.7 }}>{value}</div>
    </div>
  );
}

// ============== Section 4: 看護師向け 3軸選び ==============
function ThreeAxis() {
  const axes = [
    {
      n: "01",
      icon: Icon.clock,
      title: "24時間対応の窓口があるか",
      body: "看護師の生活時間は24時間体制。深夜の夜勤明けや早朝の決断にも、その場でチャットを返せる窓口かを確認します。チャット / 電話 / フォームの応答時間が明記されているサービスを優先します。",
      checks: [
        "深夜・早朝の自動応答ではなく、人による返信時間が明記されている",
        "申込から着手までのリードタイム(即日 / 翌日 等)が公開されている",
        "緊急連絡先(電話)が利用可能な時間帯に夜間が含まれる",
      ],
    },
    {
      n: "02",
      icon: Icon.handshake,
      title: "引き止め交渉に対応できる体制か",
      body: "「人がいないから」「次が決まるまで」といった引き止めは、口頭での意思伝達だけでは長引くケースがあります。労働組合または弁護士による交渉権の有無で対応範囲が変わります。",
      checks: [
        "退職日の調整・有給消化の交渉が可能と明記されている",
        "強い慰留・恫喝的な引き止めへの対応事例が公開されている",
        "雇用主からの折り返しを依頼者に直接させない運用",
      ],
    },
    {
      n: "03",
      icon: Icon.pulse,
      title: "看護師業界の実績があるか",
      body: "病棟・クリニック・介護施設では、就業規則や慣行が一般企業と異なります。看護師・医療従事者の依頼実績が公開されており、シフト・夜勤・人員配置基準などの背景を理解しているかを確認します。",
      checks: [
        "看護師・医療従事者の依頼割合または件数が公開されている",
        "病棟・施設・訪問看護など事業形態別の対応実績がある",
        "退職後の転職先紹介などの利益相反リスクが開示されている",
      ],
    },
  ];

  return (
    <section id="choose" style={{ padding: "64px 20px", background: C.bg }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionHeader
          kicker="看護師向け 3つの軸"
          title="代行サービスは、この3点で見比べてください"
          lead="価格や知名度より優先したいのは、夜勤生活と引き止めの強さに耐えられる体制かどうかです。看護師の相談現場で実際に効いてきた3つの軸でチェックします。"
        />

        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 18 }}>
          {axes.map((a) => (
            <li key={a.n} style={{
              display: "grid", gap: 0,
              gridTemplateColumns: "minmax(0,1fr)",
              background: "#fff", border: `1px solid ${C.line}`, borderRadius: 14,
              overflow: "hidden",
            }} className="axis-row">
              <div style={{
                padding: "22px 22px 18px", background: C.brandWash,
                borderBottom: `1px solid ${C.brandSoft}`,
                display: "flex", gap: 14, alignItems: "flex-start",
              }} className="axis-head">
                <div style={{
                  fontFamily: "'Noto Serif JP', serif", fontSize: 38, fontWeight: 700,
                  color: C.brand, lineHeight: 0.9, flexShrink: 0,
                }}>{a.n}</div>
                <div>
                  <div style={{ color: C.brandDeep, marginBottom: 6 }}>{a.icon(20)}</div>
                  <h3 style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: 18, fontWeight: 700, color: C.ink,
                    margin: 0, lineHeight: 1.5,
                  }}>{a.title}</h3>
                </div>
              </div>
              <div style={{ padding: "20px 22px 22px" }}>
                <p style={{ margin: "0 0 14px", color: C.inkSoft, fontSize: 14, lineHeight: 1.9 }}>
                  {a.body}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                  {a.checks.map((c, i) => (
                    <li key={i} style={{
                      display: "flex", gap: 10, fontSize: 13, color: C.ink,
                      padding: "10px 12px", background: C.bgSoft, borderRadius: 8,
                      border: `1px solid ${C.lineSoft}`, lineHeight: 1.7,
                    }}>
                      <span style={{ color: C.brand, marginTop: 1, flexShrink: 0 }}>{Icon.check(16)}</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .axis-row { grid-template-columns: 280px 1fr !important; }
          .axis-row .axis-head { border-right: 1px solid ${C.brandSoft}; border-bottom: none !important; flex-direction: column; }
        }
      `}</style>
    </section>
  );
}

// ============== Section 5: 法的根拠 ==============
function LegalBasis() {
  const laws = [
    {
      title: "民法 第627条",
      sub: "期間の定めのない雇用",
      body: "期間の定めがない雇用契約の場合、労働者は「いつでも解約の申入れをすることができる」と定められています。申入れから2週間の経過によって雇用契約は終了します(同条1項)。",
      quote: "「当事者が雇用の期間を定めなかったときは、各当事者は、いつでも解約の申入れをすることができる。この場合において、雇用は、解約の申入れの日から二週間を経過することによって終了する。」",
    },
    {
      title: "労働基準法 第5条 / 第15条",
      sub: "強制労働の禁止 / 労働条件の明示",
      body: "使用者は、暴行・脅迫・監禁その他精神又は身体の自由を不当に拘束する手段によって、労働者の意思に反して労働を強制してはならないと定められています。強い引き止めや退職妨害は、本条との関係で問題となる場合があります。",
      quote: null,
    },
    {
      title: "有期雇用契約の取扱い",
      sub: "労働契約法 第17条",
      body: "契約社員・パート等の有期雇用は、「やむを得ない事由」がない限り期間途中の退職に制限があります。ただし1年を超える契約期間で1年経過後は、いつでも退職の申入れが可能(労働基準法附則137条)。状況に応じた個別判断が必要です。",
      quote: null,
      warn: true,
    },
  ];

  return (
    <section style={{ padding: "64px 20px", background: C.bgSoft }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionHeader
          kicker="法令の根拠"
          title="退職は労働者に認められた権利です"
          lead="退職代行は法律上の権利行使を支援する仕組みです。下記の条文と照らし合わせ、ご自身の雇用形態と状況を確認してください。"
        />

        <div style={{ display: "grid", gap: 14 }}>
          {laws.map((l, i) => (
            <article key={i} style={{
              background: "#fff", border: `1px solid ${l.warn ? "#FCD9B0" : C.line}`,
              borderRadius: 12, padding: "20px 22px", position: "relative",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8, flexShrink: 0,
                  background: l.warn ? "#FFF7ED" : C.brandWash,
                  color: l.warn ? C.warn : C.brandDeep,
                  display: "grid", placeItems: "center",
                }}>
                  {l.warn ? Icon.triangle(20) : Icon.scale(20)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: C.inkMute, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 2 }}>
                    {l.sub}
                  </div>
                  <h3 style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: 17, fontWeight: 700, color: C.ink, margin: "0 0 10px",
                  }}>{l.title}</h3>
                  <p style={{ margin: 0, color: C.inkSoft, fontSize: 14, lineHeight: 1.9 }}>{l.body}</p>
                  {l.quote && (
                    <blockquote style={{
                      margin: "12px 0 0", padding: "12px 14px",
                      background: C.bgSoft, borderLeft: `3px solid ${C.brand}`,
                      fontSize: 13, color: C.ink, lineHeight: 1.85, borderRadius: "0 8px 8px 0",
                    }}>
                      {l.quote}
                    </blockquote>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p style={{ fontSize: 12, color: C.inkMute, marginTop: 18, lineHeight: 1.85 }}>
          ※ 本セクションは法令情報の参考紹介であり、個別具体の法律相談ではありません。実際の手続きや法的判断は、弁護士等の有資格者にご確認ください。引用は <a href="https://elaws.e-gov.jp/" target="_blank" rel="noopener noreferrer" style={{ color: C.brand }}>e-Gov法令検索</a> を一次情報として参照しています。
        </p>
      </div>
    </section>
  );
}

// ============== Section 6: FAQ ==============
function FAQ() {
  const items = [
    {
      q: "夜勤明けの朝でも、その日のうちに連絡できますか?",
      a: "24時間対応を明示しているサービスであれば、深夜・早朝のチャット受付が可能です。ただし「受付」と「実際の着手」は別物のため、職場への第一報を入れる時間帯(始業時間帯など)を依頼者と擦り合わせる運用が一般的です。受付時間と着手タイミングは事前に必ず確認してください。",
    },
    {
      q: "師長や同僚に、利用したことがバレますか?",
      a: "代行業者から職場への連絡は、依頼者本人とのやり取りに踏み込まないかたちで行われます。「ご本人の代理で連絡しております」と告げる形式が一般的で、依頼者の同意なく具体的な事情を職場に開示することはありません。ただし、退職後の転職活動で同地域の医療機関を希望する場合、関係者間で噂が広がる可能性は否定できないため、状況に応じて事前に相談するのが安全です。",
    },
    {
      q: "「人がいないのに辞めたら損害賠償する」と言われています。",
      a: "結論として、通常の退職で損害賠償が認められるケースは極めて限定的です。判例上、労働者の退職それ自体を理由とした賠償請求は、よほど悪質な事情(企業秘密の持ち出し、悪意ある妨害等)がない限り認められにくいとされています。ただし「言われた」段階で精神的に消耗するため、こうした言動への対応窓口がある業者(労働組合・弁護士運営)を選ぶのが現実的です。",
    },
    {
      q: "強い引き止めに遭っており、何度も話し合いを求められます。",
      a: "労働組合運営または弁護士であれば、依頼者本人への直接連絡を控えるよう申し入れることが可能です。職場からの折り返しは原則として代行窓口が受け、依頼者は休養に専念できます。民間業者の場合は意思伝達のみとなるため、引き止めが繰り返される懸念がある場合は運営主体を慎重に選んでください。",
    },
    {
      q: "有給休暇は消化できますか?",
      a: "労働基準法上、有給休暇の取得は労働者の権利です(年5日の時季指定義務含む)。退職日までの残り日数で消化する運用が一般的ですが、消化日数の調整は「交渉」に該当するため、民間業者では伝達のみとなります。確実に消化したい場合は、労働組合または弁護士運営のサービスが選択肢になります。",
    },
    {
      q: "看護師資格や奨学金の返還はどうなりますか?",
      a: "看護学校の奨学金(病院からの貸付金)は、退職時に一括返還の規約があるケースが多くあります。これは退職そのものを止めるものではなく、契約に基づく金銭債務として整理されます。返還条件・期間・利息の有無を契約書で確認したうえで、必要に応じて弁護士運営のサービスに相談することをおすすめします。",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: "64px 20px", background: C.bg }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <SectionHeader
          kicker="よくある質問"
          title="看護師から寄せられる相談トップ6"
          lead="編集部に多く寄せられる質問を一般化してまとめました。個別の状況によって回答は変わりうるため、詳細は無料相談で個別にご確認ください。"
        />

        <div style={{
          background: "#fff", border: `1px solid ${C.line}`, borderRadius: 12, overflow: "hidden",
        }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderTop: i === 0 ? "none" : `1px solid ${C.line}`,
              }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%", textAlign: "left", padding: "18px 20px",
                    background: isOpen ? C.bgTint : "#fff", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "flex-start", gap: 14,
                    fontFamily: "inherit", transition: "background 0.18s",
                  }}>
                  <span style={{
                    fontFamily: "'Noto Serif JP', serif",
                    color: C.brand, fontWeight: 700, fontSize: 18, lineHeight: 1.4, flexShrink: 0,
                  }}>Q</span>
                  <span style={{ flex: 1, fontSize: 15, fontWeight: 600, color: C.ink, lineHeight: 1.6 }}>
                    {it.q}
                  </span>
                  <span style={{
                    color: C.inkMute, transition: "transform 0.2s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    flexShrink: 0, marginTop: 2,
                  }}>{Icon.chevron(18)}</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 600 : 0, overflow: "hidden",
                  transition: "max-height 0.32s ease, padding 0.32s ease",
                  padding: isOpen ? "0 20px 20px 20px" : "0 20px",
                }}>
                  <div style={{ display: "flex", gap: 14, paddingTop: 4 }}>
                    <span style={{
                      fontFamily: "'Noto Serif JP', serif", color: C.inkMute,
                      fontWeight: 700, fontSize: 18, flexShrink: 0,
                    }}>A</span>
                    <p style={{ margin: 0, color: C.inkSoft, fontSize: 14, lineHeight: 1.95 }}>
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============== Section 7: CTA ==============
function FinalCTA() {
  return (
    <section id="cta" style={{
      padding: "64px 20px",
      background: `linear-gradient(180deg, ${C.brandDeep} 0%, ${C.brand} 100%)`,
      color: "#fff", position: "relative", overflow: "hidden",
    }}>
      {/* deco */}
      <div style={{
        position: "absolute", top: -100, right: -100, width: 300, height: 300,
        borderRadius: "50%", background: "rgba(255,255,255,0.05)",
      }} aria-hidden />
      <div style={{
        position: "absolute", bottom: -120, left: -80, width: 260, height: 260,
        borderRadius: "50%", background: "rgba(255,255,255,0.04)",
      }} aria-hidden />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", textAlign: "center" }}>
        <Pill tone="line"><span style={{ color: C.brandDeep }}>看護師の無料相談窓口</span></Pill>
        <h2 style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: "clamp(24px, 6vw, 34px)", fontWeight: 700,
          margin: "16px 0 14px", lineHeight: 1.45,
        }}>
          まずは話だけでも、聞かせてください。
        </h2>
        <p style={{
          fontSize: "clamp(14px, 3.6vw, 16px)",
          lineHeight: 1.95, margin: "0 0 28px",
          opacity: 0.95, maxWidth: 540, marginInline: "auto",
        }}>
          相談料は無料です。「辞めるかどうか」を含めて、迷っている段階でも構いません。フォームよりお問い合わせいただいた後、看護師の事情に詳しい担当者から、24時間以内にご連絡いたします。
        </p>

        <a href="https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER" target="_blank" rel="sponsored noopener" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
          background: "#fff", color: "#0B5A70", textDecoration: "none",
          padding: "18px 36px", borderRadius: 14, fontSize: 17, fontWeight: 700,
          boxShadow: "0 10px 26px rgba(0,0,0,0.18)",
        }}>
          {Icon.chat(20)} 退職の相談をする (無料)
        </a>

        <div style={{
          marginTop: 22, display: "flex", flexWrap: "wrap", gap: "8px 22px",
          justifyContent: "center", fontSize: 12, opacity: 0.9,
        }}>
          <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            {Icon.check(14)} 相談料 0円
          </span>
          <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            {Icon.check(14)} 24時間 受付
          </span>
          <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            {Icon.check(14)} 申込み前のキャンセル可
          </span>
        </div>
      </div>
    </section>
  );
}

// ============== Footer ==============
function Footer() {
  return (
    <footer style={{
      background: "#0A1623", color: "rgba(255,255,255,0.7)",
      padding: "40px 20px 28px", fontSize: 12, lineHeight: 1.85,
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gap: 24 }}>
        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "minmax(0,1fr)" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})`,
                display: "grid", placeItems: "center",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontFamily: "'Noto Serif JP', serif" }}>
                ナースリリーフ相談室
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 12 }}>
              看護師のための退職相談メディア。社会保険労務士および看護師経験者の監修のもと、退職に関わる法令・実務情報を編集・発信しています。
            </p>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, marginBottom: 10, fontSize: 13 }}>編集ポリシー</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 6 }}>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>編集方針 / 運営者情報</a></li>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>監修者プロフィール</a></li>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>広告掲載基準・利益相反開示</a></li>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>記事の更新ポリシー</a></li>
            </ul>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, marginBottom: 10, fontSize: 13 }}>関連情報</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 6 }}>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>プライバシーポリシー</a></li>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>利用規約</a></li>
              <li><a href="#" onClick={e => e.preventDefault()} style={linkStyle}>お問い合わせ</a></li>
              <li><a href="https://elaws.e-gov.jp/" target="_blank" rel="noopener noreferrer" style={linkStyle}>外部: e-Gov法令検索</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12,
          fontSize: 11, color: "rgba(255,255,255,0.55)",
        }}>
          <div>© 2026 ナースリリーフ相談室 編集部 (架空のサンプルサイトです)</div>
          <div>本ページには [PR] を含みます。</div>
        </div>
      </div>
      <style>{`
        @media (min-width: 720px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
const linkStyle = { color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px dotted rgba(255,255,255,0.2)", paddingBottom: 1 };

// ============== Floating CTA (mobile) ==============
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "fixed", left: 12, right: 12, bottom: 12, zIndex: 40,
      transform: show ? "translateY(0)" : "translateY(140%)",
      transition: "transform 0.3s ease",
      display: "flex", justifyContent: "center", pointerEvents: show ? "auto" : "none",
    }}>
      <a href="https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER" target="_blank" rel="sponsored noopener" style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        background: "#0E7490", color: "#fff", textDecoration: "none",
        padding: "14px 22px", borderRadius: 999, fontSize: 15, fontWeight: 700,
        boxShadow: "0 10px 24px rgba(14,116,144,0.4)",
        width: "100%", maxWidth: 360,
      }}>
        {Icon.chat(18)} 無料相談 (24h)
      </a>
    </div>
  );
}

// ============== Tweaks ==============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandHue": 195,
  "showStickyCTA": true,
  "heroVariant": "default"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = (window.useTweaks || (() => [TWEAK_DEFAULTS, () => {}]))(TWEAK_DEFAULTS);

  // apply brand hue to root vars (gentle)
  useEffect(() => {
    if (typeof t.brandHue === "number") {
      document.documentElement.style.setProperty("--brand-hue", t.brandHue);
    }
  }, [t.brandHue]);

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "'Noto Sans JP', sans-serif" }}>
      <PRBar />
      <TopNav />
      <Hero />
      <NurseConcerns />
      <ProviderCompare />
      <ThreeAxis />
      <LegalBasis />
      <FAQ />
      <FinalCTA />
      <Footer />
      {t.showStickyCTA && <StickyCTA />}

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="表示">
            <window.TweakToggle
              label="スクロール時の追従CTA"
              value={t.showStickyCTA}
              onChange={(v) => setTweak("showStickyCTA", v)}
            />
          </window.TweakSection>
          <window.TweakSection title="トーン" hint="(参考: 現状はティール#0E7490固定。色相のみ確認用)">
            <window.TweakSlider
              label="ブランド色相"
              min={150} max={240} step={1}
              value={t.brandHue}
              onChange={(v) => setTweak("brandHue", v)}
              format={(v) => `${v}°`}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
