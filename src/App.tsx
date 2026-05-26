import { useState, useEffect } from 'react'

interface Article {
  id: number
  tag: string
  tagColor: string
  emoji: string
  title: string
  excerpt: string
  body: string
  time: string
  readTime: string
  imgUrl: string
}

const articles: Article[] = [
  {
    id: 1,
    tag: 'BRASIL',
    tagColor: '#ffe243',
    emoji: '🇧🇷',
    title: 'Neymar está de volta! Ancelotti convoca o camisa 10 para a Copa 2026',
    excerpt: 'Após 31 meses fora da Seleção, Neymar é convocado por Carlo Ancelotti. O atacante do Santos volta após lesão gravíssima no joelho.',
    body: `É OFICIAL! Neymar está convocado para a Copa do Mundo 2026! 🇧🇷

Carlo Ancelotti anunciou os 26 jogadores que vão defender o Brasil no Mundial em evento realizado no Museu do Amanhã, no Rio de Janeiro, no dia 18 de maio de 2026.

A principal novidade é o retorno de Neymar após 31 meses sem jogar pela Seleção. Sua última partida foi em outubro de 2023, quando sofreu ruptura do ligamento cruzado anterior do joelho esquerdo no jogo contra o Uruguai pelas Eliminatórias.

Destaques da convocação:
• Neymar (Santos) — o grande retorno
• Vini Jr. (Real Madrid) — avaliado em 150 mi de euros
• Endrick (Real Madrid)
• Bruno Guimarães (Newcastle)
• Alisson, Casemiro e Marquinhos — lideranças do grupo`,
    time: 'há 2 horas',
    readTime: '4 min',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoR6KCotAJl1JRZ9VcFUFafp6_uRHbvuJIhleuMrqmCTehsxxEnhGcMg9-W9-jILt6L5gGcDPYoRAsloTeD0-_lfDZYs-2UzvCWAvDo3LRJX30XO34GSnuuAhS2Mdwr1YPqd1WAcxbE7t_gv_SFm9h747SmDAb7YeFhqszbCYkHaK-74xzOsKkt_VJ3VL1tA7FpJcZxzwamWKFBLhtZVVmWHg4-4FtA6-dmB8uY5k-N6jsQfRsEuuFVv9hqfhJ7WOlyrjTfMmQLAY',
  },
  {
    id: 2,
    tag: 'SEDE',
    tagColor: '#65df76',
    emoji: '🏟️',
    title: 'Logística Avançada: Estádios 100% Prontos para a Copa 2026',
    excerpt: 'O comitê organizador confirma que toda a infraestrutura está operando sob protocolos de elite nos três países-sede.',
    body: `A Copa do Mundo FIFA 2026 acontece de 11 de junho a 19 de julho em três países simultaneamente.

🇺🇸 ESTADOS UNIDOS (11 cidades):
Nova York/Nova Jersey, Los Angeles, Dallas, San Francisco, Miami, Seattle, Boston, Atlanta, Kansas City, Guadalupe e Los Angeles SoFi.

🇲🇽 MÉXICO (3 cidades):
Cidade do México (Estádio Azteca), Guadalajara e Monterrey.

🇨🇦 CANADÁ (2 cidades):
Toronto e Vancouver.

A final será no MetLife Stadium em Nova Jersey no dia 19 de julho — o mesmo estádio da estreia do Brasil!`,
    time: 'há 4 horas',
    readTime: '3 min',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW20SKdnJzYvjH99ba-EdYkwO5bQvvjPfrfseerxVDmDQX7x3DzxG2VqEL7l2MHD43Cx-BjGggcjuiskGFEN1u8AFqz0ioXfu3pauYVW70ZqZUf_Y-tEAoJx8uQRKpmtFAFzIN334DtcZqe84LWpLY_CQKYJo8SJkWVSm3S_EtgRZNeN2EDxSV0AiaPdFZiWgyM4OR4OkXOYpo3JFeeT16FJB1B-kRNeuZoHSi3bnss2N9kY919zcHrSnlSjGG0US41rbf8zVLFZs',
  },
  {
    id: 3,
    tag: 'ANÁLISE',
    tagColor: '#65df76',
    emoji: '📊',
    title: 'Big Data: Algoritmos de IA calculam probabilidades do Hexa',
    excerpt: 'Sistemas de inteligência artificial processam milhões de dados para prever o desempenho da Seleção Brasileira em 2026.',
    body: `O Brasil chega à Copa 2026 com um elenco forte mas com dúvidas importantes.

✅ PONTOS FORTES:
• Vini Jr. — melhor jogador do mundo em 2024, avaliado em 150 milhões de euros
• Neymar — o retorno emocional aos 34 anos, provavelmente sua última Copa
• Endrick — jovem prodígio do Real Madrid, 19 anos
• Ancelotti — técnico mais vitorioso da história da Champions League

❌ PREOCUPAÇÕES:
• Éder Militão — lesionado, não vai à Copa
• Rodrygo — lesão grave, grande perda no ataque
• Estêvão — o garoto mais aguardado ficou de fora

🏆 VEREDITO: O Brasil é favorito, mas não isolado. Argentina e França chegam fortíssimas.`,
    time: 'há 6 horas',
    readTime: '5 min',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcmYT8wZv0FhLalgoNbTgSATwVmTURtZs8we_RldK4EHN1n3eOZSKGw5twv5HXBh1gwR9Na6QdQYuNNsMwlWfVz-AzNelPcEWJqKP-NbVUaN1eVdiEm0DgvwQPR5kTpHSS1HBuWVzqHCFPoLlsijEB7xLw18cjRxCoLMrW7aVAGulEYgTxqeXJlH_fl9wXiWwQgQ93ULR0xkpDrQfNptM25ymAb-wdioi_kkXEU4rAW84wN6Nctksj1JPjHcj6-eo1e_2kJe-nRjw',
  },
  {
    id: 4,
    tag: 'BRASIL',
    tagColor: '#ffe243',
    emoji: '⚽',
    title: 'Grupo C: veja os jogos do Brasil na fase de grupos',
    excerpt: 'Brasil cai no Grupo C ao lado de Marrocos, Escócia e Haiti. Estreia é dia 13 de junho no MetLife Stadium.',
    body: `O Brasil está no Grupo C da Copa do Mundo 2026.

📅 CALENDÁRIO DO BRASIL:

🗓️ 13 de junho — Brasil x Marrocos
📍 MetLife Stadium, Nova Jersey (EUA)
🕖 19h (horário de Brasília)

🗓️ 19 de junho — Brasil x Escócia

🗓️ 24 de junho — Brasil x Haiti

O Brasil foi cabeça de chave no sorteio realizado em dezembro de 2025.`,
    time: 'há 1 dia',
    readTime: '3 min',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoR6KCotAJl1JRZ9VcFUFafp6_uRHbvuJIhleuMrqmCTehsxxEnhGcMg9-W9-jILt6L5gGcDPYoRAsloTeD0-_lfDZYs-2UzvCWAvDo3LRJX30XO34GSnuuAhS2Mdwr1YPqd1WAcxbE7t_gv_SFm9h747SmDAb7YeFhqszbCYkHaK-74xzOsKkt_VJ3VL1tA7FpJcZxzwamWKFBLhtZVVmWHg4-4FtA6-dmB8uY5k-N6jsQfRsEuuFVv9hqfhJ7WOlyrjTfMmQLAY',
  },
  {
    id: 5,
    tag: 'CURIOSIDADES',
    tagColor: '#65df76',
    emoji: '🎸',
    title: 'Show do Coldplay na final e experiência ao estilo NBA na Copa 2026',
    excerpt: 'A Copa 2026 promete revolucionar o entretenimento do futebol mundial com shows, experiências inéditas e a maior final da história.',
    body: `A Copa do Mundo 2026 não será apenas mais um Mundial. Será uma revolução no entretenimento esportivo.

🎸 SHOW NA FINAL:
Pela primeira vez na história, a final da Copa terá um show no intervalo no estilo Super Bowl americano.

🏀 FUTEBOL NO ESTILO NBA:
Haverá entretenimento antes, durante e depois dos jogos dentro dos estádios.

📺 NÚMEROS HISTÓRICOS:
• 104 partidas (recorde absoluto)
• 48 seleções participantes
• 39 dias de competição
• 16 cidades-sede em 3 países`,
    time: 'há 2 dias',
    readTime: '4 min',
    imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcmYT8wZv0FhLalgoNbTgSATwVmTURtZs8we_RldK4EHN1n3eOZSKGw5twv5HXBh1gwR9Na6QdQYuNNsMwlWfVz-AzNelPcEWJqKP-NbVUaN1eVdiEm0DgvwQPR5kTpHSS1HBuWVzqHCFPoLlsijEB7xLw18cjRxCoLMrW7aVAGulEYgTxqeXJlH_fl9wXiWwQgQ93ULR0xkpDrQfNptM25ymAb-wdioi_kkXEU4rAW84wN6Nctksj1JPjHcj6-eo1e_2kJe-nRjw',
  },
]

const TROPHY_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDxiRC3tDVL-XuiyCq849oO1pdw9LPQp7WcVvhau7DVEGNiGGFW8jiTOpS0-3va2TctyRcuSaUKRYKv53ZnlUBwJJoQL_xns6jvqHAjVPxbXMTKdMcgmuc4SPIeMs_u6EhlmqpTNYf8EJjSIwQcNwFqI4MtjBgTG3MzTDlVLTq3KoQi3PqOMikIzcdgryyprFBx3JCugvohL26Ww2rUqXOgPDVpsSUmL_y9MifUi4_1BhLogQPTaryWNkcAtrjHlDnMyiSNDEOO7U'
const BALL_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_m8oovJ79nOcQ7N0tbhROaMHLl2YNjcHsO9T7KZxU660jqnS1P1aOWcWYmFrmkOUIpJl51NKlAXPP9nLmWY7T1vNu7osZC9PUyFRbPLN-c_XGW6hplk_3gD823nLPXTwT5qhLys4TGZqnNPnEoqZHQvTVnfhrDJU8lhB23uqb4m10BP3AueLE37PXRHJJN2NH-upLKSuszCz63H8WUOjWn_YjZutUHarujX7Ue8kY_tnY97n7XErnBHOq6prK9M0rlKKlhHyVcI'

function now() {
  const d = new Date()
  return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`
}

export default function App() {
  const [isOffline, setIsOffline]             = useState(!navigator.onLine)
  const [activeTab, setActiveTab]             = useState('todas')
  const [cachedIds, setCachedIds]             = useState<number[]>([1, 2, 3])
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [isRevalidating, setIsRevalidating]   = useState(false)
  const [swLogs, setSwLogs] = useState([
    { time: now(), msg: 'Fetching news assets from global edge...', type: 'hit' },
    { time: now(), msg: 'Database synchronized with FIFA Hub', type: 'revalidate' },
    { time: now(), msg: 'Local cache validated: 100%', type: 'hit' },
  ])

  function addLog(msg: string, type: string) {
    setSwLogs(prev => [{ time: now(), msg, type }, ...prev].slice(0, 20))
  }

  useEffect(() => {
    const up   = () => { setIsOffline(false); addLog('Network restored — revalidating cache...', 'fetch') }
    const down = () => { setIsOffline(true);  addLog('Network lost — Cache Only activated', 'offline') }
    window.addEventListener('online',  up)
    window.addEventListener('offline', down)
    return () => { window.removeEventListener('online', up); window.removeEventListener('offline', down) }
  }, [])

  // Auto log
  useEffect(() => {
    const msgs = [
      'Syncing stadium humidity data...',
      'Fetching Real-time FIFA World Ranking...',
      'New content payload received',
      'Encrypting user preferences...',
      'System load: 12% - All cores optimal',
      'Article cached: Neymar Jr recovery protocol',
    ]
    const interval = setInterval(() => {
      if (!isOffline) addLog(msgs[Math.floor(Math.random() * msgs.length)], 'fetch')
    }, 4000)
    return () => clearInterval(interval)
  }, [isOffline])

  function toggleOffline() {
    if (!isOffline) {
      setIsOffline(true)
      addLog('Simulating offline mode...', 'offline')
      addLog(`${cachedIds.length} articles available in cache`, 'hit')
    } else {
      setIsOffline(false)
      setIsRevalidating(true)
      addLog('Network restored', 'fetch')
      addLog('Stale-While-Revalidate: updating cache in background...', 'revalidate')
      setTimeout(() => { setIsRevalidating(false); addLog('Cache updated ✓', 'hit') }, 1800)
    }
  }

  function openArticle(article: Article) {
    setSelectedArticle(article)
    const hit = cachedIds.includes(article.id)
    if (hit) {
      addLog(`Cache HIT → /article/${article.id}`, 'hit')
      if (!isOffline) setTimeout(() => addLog(`Revalidating /article/${article.id} in background...`, 'revalidate'), 600)
    } else {
      addLog(`Cache MISS → GET /article/${article.id}`, 'fetch')
      setTimeout(() => { setCachedIds(prev => [...prev, article.id]); addLog(`/article/${article.id} saved to CacheStorage ✓`, 'hit') }, 400)
    }
  }

  function getFiltered() {
    if (activeTab === 'brasil') return articles.filter(a => a.tag === 'BRASIL')
    if (activeTab === 'salvas') return articles.filter(a => cachedIds.includes(a.id))
    return articles
  }

  const logColor: Record<string,string> = { hit:'#65df76', fetch:'#60a5fa', revalidate:'#a78bfa', offline:'#f87171' }

  const statusDot   = isRevalidating ? '#60a5fa' : isOffline ? '#f59e0b' : '#65df76'
  const statusText  = isRevalidating ? 'Revalidando cache...' : isOffline ? '⚠ MODO OFFLINE — Cache Only' : 'System Status: Optimal'
  const statusBg    = isRevalidating ? '#1e3a5f' : isOffline ? '#3a2500' : '#0e0e0e'

  return (
    <div style={{ fontFamily:"'Inter','Montserrat',system-ui,sans-serif", background:'#131313', minHeight:'100vh', color:'#e2e2e2', position:'relative', maxWidth:430, margin:'0 auto' }}>

      {/* ── GOOGLE FONTS ── */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes rotate-ball { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes float-trophy { 0%,100%{transform:translateY(0) scale(1);filter:drop-shadow(0 0 20px rgba(255,223,67,.4))} 50%{transform:translateY(-12px) scale(1.05);filter:drop-shadow(0 0 40px rgba(255,223,67,.7))} }
        @keyframes pulse-neon { 0%,100%{box-shadow:0 0 5px #65df76,0 0 10px #65df76;opacity:1} 50%{box-shadow:0 0 15px #65df76,0 0 25px #65df76;opacity:.7} }
        @keyframes confetti { 0%{transform:translateY(-10px) rotate(0deg);opacity:.8} 100%{transform:translateY(100vh) rotate(360deg);opacity:0} }
        .ball-spin{animation:rotate-ball 10s linear infinite}
        .trophy-float{animation:float-trophy 6s ease-in-out infinite}
        .neon-pulse{animation:pulse-neon 2s infinite}
        .card-hover:hover{transform:translateY(-2px);border-color:rgba(101,223,118,.5)!important;transition:all .2s}
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#3e4a3d}
      `}</style>

      {/* ── HEADER ── */}
      <header style={{ position:'sticky', top:0, zIndex:100, background:'rgba(19,19,19,.92)', backdropFilter:'blur(12px)', borderBottom:'1px solid #3e4a3d', padding:'12px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', boxShadow:'0 0 15px rgba(101,223,118,.15)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <img src={BALL_URL} alt="Ball" className="ball-spin" style={{ width:32, height:32 }} />
          <span style={{ fontFamily:'Montserrat', fontWeight:900, fontSize:20, color:'#65df76', letterSpacing:'-.5px', textTransform:'uppercase' }}>COPA 2026</span>
        </div>
        <button onClick={toggleOffline} style={{ display:'flex', alignItems:'center', gap:6, padding:'5px 12px', background:'rgba(101,223,118,.08)', border:'1px solid rgba(101,223,118,.2)', borderRadius:99, cursor:'pointer' }}>
          <div className="neon-pulse" style={{ width:8, height:8, borderRadius:'50%', background: isOffline ? '#f59e0b' : '#65df76' }} />
          <span style={{ fontFamily:'JetBrains Mono', fontSize:11, color: isOffline ? '#f59e0b' : '#65df76', fontWeight:500, textTransform:'uppercase' }}>
            {isOffline ? 'Offline' : 'Online'}
          </span>
        </button>
      </header>

      {/* ── STATUS BAR ── */}
      <div style={{ background: statusBg, padding:'6px 20px', display:'flex', alignItems:'center', gap:6, borderBottom:'1px solid #3e4a3d30' }}>
        <span style={{ fontFamily:'monospace', fontSize:12 }}>⌨</span>
        <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color: statusDot, letterSpacing:2, textTransform:'uppercase' }}>{statusText}</span>
        {!isOffline && <span style={{ marginLeft:'auto', fontFamily:'JetBrains Mono', fontSize:10, color:'rgba(101,223,118,.4)' }}>LATENCY: 14MS</span>}
      </div>

      {/* ── HERO ── */}
      <section style={{ position:'relative', minHeight:280, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', overflow:'hidden', background:'radial-gradient(circle, rgba(35,166,70,.15) 0%, rgba(0,0,0,0) 70%)', padding:'20px' }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(0,151,57,.08), rgba(255,223,0,.04), rgba(0,151,57,.08))', opacity:.5 }} />
        <img src={TROPHY_URL} alt="Trophy" className="trophy-float" style={{ width:160, height:160, objectFit:'contain', position:'relative', zIndex:1 }} />
        <div style={{ textAlign:'center', position:'relative', zIndex:1, marginTop:12 }}>
          <h2 style={{ fontFamily:'Montserrat', fontWeight:900, fontSize:28, color:'#65df76', textTransform:'uppercase', letterSpacing:'-1px', textShadow:'0 0 20px rgba(101,223,118,.3)', margin:0 }}>A Caminho do Hexa</h2>
          <p style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#ffe243', letterSpacing:'3px', textTransform:'uppercase', marginTop:4 }}>Rumo a 2026 | Operação Inteligência</p>
        </div>
        {/* Bola decorativa */}
        <img src={BALL_URL} alt="" className="ball-spin" style={{ position:'absolute', top:16, right:16, width:40, height:40, opacity:.4 }} />
      </section>

      {/* ── TABS ── */}
      <nav style={{ position:'sticky', top:56, zIndex:50, background:'rgba(19,19,19,.85)', backdropFilter:'blur(12px)', borderBottom:'1px solid #3e4a3d', display:'flex', justifyContent:'center', gap:24, padding:'8px 0' }}>
        {[['todas','grid_view','Todas'],['brasil','flag','Brasil'],['salvas','bookmark','Salvas']].map(([val, icon, label]) => (
          <button key={val} onClick={() => setActiveTab(val)} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, background: activeTab===val ? 'rgba(101,223,118,.1)' : 'none', border:'none', cursor:'pointer', padding:'4px 16px', borderRadius:99, transition:'all .2s' }}>
            <span className="material-symbols-outlined" style={{ color: activeTab===val ? '#65df76' : '#bdcab9', fontSize:22 }}>{icon}</span>
            <span style={{ fontFamily:'Montserrat', fontSize:10, fontWeight:700, color: activeTab===val ? '#65df76' : '#bdcab9', textTransform:'uppercase', letterSpacing:1 }}>{label}</span>
          </button>
        ))}
      </nav>

      {/* ── CARDS ── */}
      <main style={{ padding:'16px', paddingBottom:160, display:'flex', flexDirection:'column', gap:12 }}>
        {getFiltered().length === 0 && (
          <div style={{ textAlign:'center', padding:'60px 20px', color:'#64748b' }}>
            <div style={{ fontSize:40, marginBottom:12 }}>📦</div>
            <p style={{ fontFamily:'JetBrains Mono', fontSize:12 }}>Nenhum artigo disponível.<br />Acesse online primeiro.</p>
          </div>
        )}

        {getFiltered().map((article, i) => {
          const isCached  = cachedIds.includes(article.id)
          const available = !isOffline || isCached
          const featured  = i === 0

          return (
            <div key={article.id} className="card-hover" onClick={() => available && openArticle(article)}
              style={{ background:'#0e0e0e', borderRadius:12, border:'1px solid #3e4a3d', overflow:'hidden', cursor: available ? 'pointer' : 'not-allowed', opacity: available ? 1 : 0.35, transition:'all .2s' }}
            >
              {/* Imagem */}
              <div style={{ position:'relative', height: featured ? 200 : 140, overflow:'hidden' }}>
                <img src={article.imgUrl} alt={article.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .7s' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, #0e0e0e 0%, transparent 60%)' }} />
                {featured && (
                  <div style={{ position:'absolute', top:12, left:12, background:'#ffe243', color:'#393000', padding:'2px 10px', fontFamily:'JetBrains Mono', fontSize:10, fontWeight:700, borderRadius:2 }}>LIVE</div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding:'12px 14px' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color: article.tagColor, fontWeight:500 }}>{article.tag}</span>
                    <div style={{ width:6, height:6, borderRadius:'50%', background: isCached ? '#65df76' : '#3e4a3d', boxShadow: isCached ? '0 0 6px #65df76' : 'none' }} />
                    <span style={{ fontFamily:'JetBrains Mono', fontSize:9, color:'#bdcab9' }}>{isCached ? 'OFFLINE READY' : 'SEM CACHE'}</span>
                  </div>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:9, color:'#64748b' }}>{article.time}</span>
                </div>
                <h3 style={{ fontFamily:'Montserrat', fontWeight:800, fontSize: featured ? 18 : 15, lineHeight:1.3, color:'#e2e2e2', marginBottom:6 }}>{article.title}</h3>
                <p style={{ fontSize:13, color:'#bdcab9', lineHeight:1.55, marginBottom:10 }}>{article.excerpt}</p>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:8, borderTop:'1px solid #3e4a3d' }}>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#65df76', fontWeight:500 }}>⟶ Ler artigo</span>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:9, color:'#64748b' }}>{article.readTime} leitura</span>
                </div>
              </div>
              {/* Progress bar */}
              <div style={{ height:2, background:'rgba(101,223,118,.1)' }}>
                <div style={{ height:'100%', background:'#65df76', width: isCached ? '100%' : '0%', transition:'width 1s' }} />
              </div>
            </div>
          )
        })}

        <div style={{ textAlign:'center', marginTop:8 }}>
          <button style={{ background:'#65df76', color:'#003911', padding:'10px 32px', fontFamily:'Montserrat', fontWeight:800, fontSize:12, textTransform:'uppercase', letterSpacing:2, border:'none', cursor:'pointer', borderRadius:4, boxShadow:'0 0 20px rgba(101,223,118,.3)' }}>
            Carregar Mais Dados
          </button>
        </div>
      </main>

      {/* ── SW CONSOLE ── */}
      <div style={{ position:'fixed', bottom:64, left:'50%', transform:'translateX(-50%)', width:'100%', maxWidth:430, background:'rgba(14,14,14,.96)', backdropFilter:'blur(12px)', borderTop:'1px solid rgba(101,223,118,.2)', padding:'8px 16px', maxHeight:100, overflow:'hidden', zIndex:50 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:4 }}>
          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#65df76', animation:'pulse-neon 2s infinite' }} />
            <span style={{ fontFamily:'JetBrains Mono', fontSize:9, color:'#65df76', textTransform:'uppercase', letterSpacing:2 }}>Service Worker Logs</span>
          </div>
          <span style={{ fontFamily:'JetBrains Mono', fontSize:9, color:'#64748b' }}>v2.0.26-ALPHA</span>
        </div>
        {swLogs.slice(0,4).map((log, i) => (
          <div key={i} style={{ display:'flex', gap:8, fontSize:11, fontFamily:'JetBrains Mono', padding:'1px 0' }}>
            <span style={{ color:'#3e4a3d', flexShrink:0 }}>{log.time}</span>
            <span style={{ color: logColor[log.type] || '#bdcab9' }}>&gt; [SW] {log.msg}</span>
          </div>
        ))}
      </div>

      {/* ── BOTTOM NAV ── */}
      <nav style={{ position:'fixed', bottom:0, left:'50%', transform:'translateX(-50%)', width:'100%', maxWidth:430, background:'rgba(14,14,14,.96)', backdropFilter:'blur(12px)', borderTop:'1px solid #3e4a3d', display:'flex', justifyContent:'space-around', alignItems:'center', height:64, zIndex:100 }}>
        {[['todas','grid_view','Todas'],['brasil','flag','Brasil'],['salvas','bookmark','Salvas']].map(([val, icon, label]) => (
          <div key={val} onClick={() => setActiveTab(val)} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, cursor:'pointer', padding:'4px 16px', borderRadius:99, background: activeTab===val ? 'rgba(101,223,118,.1)' : 'none', transition:'all .2s' }}>
            <span className="material-symbols-outlined" style={{ color: activeTab===val ? '#65df76' : '#bdcab9', fontSize:24 }}>{icon}</span>
            <span style={{ fontFamily:'Montserrat', fontSize:10, fontWeight:700, color: activeTab===val ? '#65df76' : '#bdcab9', textTransform:'uppercase', letterSpacing:1 }}>{label}</span>
          </div>
        ))}
      </nav>

      {/* ── ARTICLE VIEW ── */}
      {selectedArticle && (
        <div style={{ position:'fixed', inset:0, background:'#131313', zIndex:200, overflowY:'auto', display:'flex', flexDirection:'column', maxWidth:430, margin:'0 auto' }}>
          {/* Header com gradiente */}
          <div style={{ minHeight:200, background:`linear-gradient(160deg, #003314 0%, #131313 100%)`, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'14px 20px 20px', flexShrink:0, position:'relative', overflow:'hidden' }}>
            <img src={selectedArticle.imgUrl} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.2 }} />
            <button onClick={() => setSelectedArticle(null)} style={{ background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.15)', borderRadius:8, padding:'6px 14px', color:'#e2e2e2', fontSize:13, cursor:'pointer', alignSelf:'flex-start', position:'relative', zIndex:1, fontFamily:'Montserrat', fontWeight:600 }}>
              ← Voltar
            </button>
            <div style={{ position:'relative', zIndex:1 }}>
              <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color: selectedArticle.tagColor, fontWeight:700, textTransform:'uppercase', letterSpacing:2 }}>{selectedArticle.tag}</span>
              <h1 style={{ fontFamily:'Montserrat', fontWeight:900, fontSize:20, lineHeight:1.3, color:'#e2e2e2', marginTop:6 }}>{selectedArticle.title}</h1>
            </div>
          </div>

          {/* Meta */}
          <div style={{ padding:'10px 20px', borderBottom:'1px solid #3e4a3d', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#64748b' }}>{selectedArticle.time} · {selectedArticle.readTime} leitura</span>
            <span style={{ fontFamily:'JetBrains Mono', fontSize:10, fontWeight:600, color: cachedIds.includes(selectedArticle.id) ? '#65df76' : '#60a5fa' }}>
              {cachedIds.includes(selectedArticle.id) ? '🟢 CACHE HIT' : '🔵 NETWORK'}
            </span>
          </div>
        
          {/* Banner offline */}
          {isOffline && (
            <div style={{ margin:'14px 20px 0', background:'rgba(58,37,0,.6)', border:'1px solid #92400e', color:'#fbbf24', padding:'10px 14px', borderRadius:8, fontSize:12, fontWeight:600, fontFamily:'JetBrains Mono' }}>
              ⚠ MODO OFFLINE — Conteúdo servido do cache local
            </div>
          )}

          {/* Body */}
          <div style={{ padding:'20px', fontSize:15, lineHeight:1.85, color:'#bdcab9', whiteSpace:'pre-line', flex:1, fontFamily:'Inter' }}>
            {selectedArticle.body}
          </div>
        </div>
      )}
    </div>
  )
}
