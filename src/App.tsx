import { useState, useEffect } from 'react'
import './App.css'

interface Article {
  id: number
  tag: string
  color: string
  tagColor: string
  emoji: string
  title: string
  excerpt: string
  body: string
  time: string
  readTime: string
}

const articles: Article[] = [
  {
    id: 1,
    tag: '🇧🇷 Brasil',
    color: '#1a3a1a',
    tagColor: '#22c55e',
    emoji: '🌟',
    title: 'Neymar está de volta! Ancelotti convoca o camisa 10 para a Copa 2026',
    excerpt: 'Após 31 meses fora da Seleção, Neymar é convocado por Carlo Ancelotti para a Copa do Mundo 2026. O atacante do Santos volta após lesão gravíssima no joelho.',
    body: `É OFICIAL! Neymar está convocado para a Copa do Mundo 2026! 🇧🇷

Carlo Ancelotti anunciou os 26 jogadores que vão defender o Brasil no Mundial em evento realizado no Museu do Amanhã, no Rio de Janeiro, no dia 18 de maio de 2026.

A principal novidade é o retorno de Neymar após 31 meses sem jogar pela Seleção. Sua última partida foi em outubro de 2023, quando sofreu ruptura do ligamento cruzado anterior e do menisco do joelho esquerdo no jogo contra o Uruguai pelas Eliminatórias.

O elenco convocado tem valor de mercado estimado em 908,7 milhões de euros (R$ 5,32 bilhões), segundo o Transfermarkt.

⚠️ Desfalques importantes: Éder Militão, Rodrygo e Estêvão sofreram lesões graves e ficaram de fora.

Destaques da convocação:
• Neymar (Santos) — o grande retorno
• Vini Jr. (Real Madrid) — avaliado em 150 mi de euros
• Endrick (Real Madrid)
• Bruno Guimarães (Newcastle) — 75 mi de euros
• Alisson, Casemiro e Marquinhos — lideranças do grupo
• Rayan — jovem promessa`,
    time: 'há 4 dias',
    readTime: '4 min de leitura',
  },
  {
    id: 2,
    tag: '⚽ Jogos do Brasil',
    color: '#1e3a1a',
    tagColor: '#4ade80',
    emoji: '🇧🇷',
    title: 'Grupo C: veja os jogos do Brasil na fase de grupos da Copa 2026',
    excerpt: 'Brasil cai no Grupo C ao lado de Marrocos, Escócia e Haiti. Estreia é dia 13 de junho contra os marroquinos no MetLife Stadium.',
    body: `O Brasil está no Grupo C da Copa do Mundo 2026 e tem um caminho favorável na fase de grupos.

📅 CALENDÁRIO DO BRASIL:

🗓️ 13 de junho — Brasil x Marrocos
📍 MetLife Stadium, Nova Jersey (EUA)
🕖 19h (horário de Brasília)

🗓️ 19 de junho — Brasil x Escócia
📍 A definir
🕖 A confirmar

🗓️ 24 de junho — Brasil x Haiti
📍 A definir
🕖 A confirmar

Se classificar entre os melhores do grupo, o Brasil estreia no mata-mata no dia 29 de junho, com local e adversário dependendo da posição final.

O Brasil foi cabeça de chave no sorteio, realizado em dezembro de 2025, ao lado de Alemanha, Argentina, França, Espanha, Inglaterra, Portugal, Países Baixos, Bélgica e os três anfitriões (EUA, Canadá e México).

A estratégia de Ancelotti deve variar entre 4-4-2 e 4-3-3 dependendo do adversário.`,
    time: 'há 4 dias',
    readTime: '3 min de leitura',
  },
  {
    id: 3,
    tag: '🌎 Sede',
    color: '#1e3050',
    tagColor: '#3b82f6',
    emoji: '🏟️',
    title: 'Copa 2026: EUA, Canadá e México — tudo sobre as sedes e estádios',
    excerpt: 'Pela primeira vez na história, três países sediam a Copa do Mundo ao mesmo tempo. São 16 cidades e 104 jogos ao longo de 39 dias.',
    body: `A Copa do Mundo FIFA 2026 acontece de 11 de junho a 19 de julho de 2026 em três países simultaneamente — uma inédita na história do torneio.

🇺🇸 ESTADOS UNIDOS (11 cidades-sede):
Nova York/Nova Jersey, Los Angeles, Dallas, San Francisco, Miami, Seattle, Boston, Atlanta, Kansas City, Guadalupe e Los Angeles SoFi.

🇲🇽 MÉXICO (3 cidades-sede):
Cidade do México (Estádio Azteca), Guadalajara e Monterrey.

🇨🇦 CANADÁ (2 cidades-sede):
Toronto e Vancouver.

🏆 FORMATO DO TORNEIO:
• 48 seleções participantes (antes eram 32)
• 12 grupos de 4 times cada
• 104 partidas no total
• Os 2 primeiros de cada grupo + 8 melhores terceiros avançam

📍 ABERTURA:
O jogo inaugural será México x África do Sul no histórico Estádio Azteca, na Cidade do México, no dia 11 de junho às 16h (horário de Brasília).

🏅 FINAL:
19 de julho no MetLife Stadium, em Nova Jersey (EUA) — o mesmo estádio da estreia do Brasil!`,
    time: 'há 5 dias',
    readTime: '5 min de leitura',
  },
  {
    id: 4,
    tag: '🌍 48 Seleções',
    color: '#2d1f3d',
    tagColor: '#a855f7',
    emoji: '🗺️',
    title: 'Copa 2026 terá 48 países: veja os grupos e as seleções classificadas',
    excerpt: 'Pela primeira vez o Mundial terá 48 seleções divididas em 12 grupos. Conheça todos os países confirmados e os grandes favoritos ao título.',
    body: `A Copa 2026 é histórica também pelo número de participantes: 48 seleções, divididas em 12 grupos de 4 times.

🏆 FAVORITOS AO TÍTULO:
🇫🇷 França — atual vice-campeã (2022)
🇦🇷 Argentina — atual campeã (2022)
🇧🇷 Brasil — em busca do Hexa
🇪🇸 Espanha — campeã da Eurocopa 2024
🇩🇪 Alemanha — sempre perigosa
🇵🇹 Portugal — com Cristiano Ronaldo (41 anos!)
🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra — forte geração

📊 VAGAS POR CONFEDERAÇÃO:
• UEFA (Europa): 16 vagas
• CONMEBOL (América do Sul): 6 vagas
• CONCACAF (América do Norte/Central): 6 vagas + 3 anfitriões
• AFC (Ásia): 8 vagas
• CAF (África): 9 vagas
• OFC (Oceania): 1 vaga

GRUPO A: México, Coreia do Sul, República Tcheca, África do Sul
GRUPO C: Brasil, Marrocos, Escócia, Haiti

A Copa terá pela primeira vez uma final com show no intervalo no estilo Super Bowl — o Coldplay está envolvido na escolha dos artistas que vão se apresentar.`,
    time: 'há 6 dias',
    readTime: '6 min de leitura',
  },
  {
    id: 5,
    tag: '🎯 Análise',
    color: '#3a2010',
    tagColor: '#f97316',
    emoji: '📊',
    title: 'Brasil favorito ao Hexa? Veja análise do elenco de Ancelotti para 2026',
    excerpt: 'Com Neymar de volta e Vini Jr no auge, o Brasil chega como um dos favoritos. Mas lesões de Militão, Rodrygo e Estêvão preocupam a torcida.',
    body: `O Brasil chega à Copa 2026 com um elenco forte mas com dúvidas importantes. Veja a análise completa:

✅ PONTOS FORTES:

🔥 Vini Jr. — melhor jogador do mundo em 2024, avaliado em 150 milhões de euros. Será a grande estrela do time.

💛 Neymar — o retorno emocional. Aos 34 anos, volta após 31 meses para sua provavelmente última Copa. Liderança dentro e fora de campo é fundamental.

⚡ Endrick — jovem prodígio do Real Madrid, promete ser surpresa positiva aos 19 anos.

🧠 Ancelotti — técnico mais vitorioso da história da Champions League. Primeira Copa como treinador.

❌ PREOCUPAÇÕES:

• Éder Militão — lesionado, não vai à Copa. Era titular absoluto da defesa.
• Rodrygo — lesão grave. Grande perda no ataque.
• Estêvão — o garoto mais aguardado ficou de fora por lesão.
• Neymar — estará 100%? Ainda há dúvidas sobre sua condição física real.

🏆 VEREDITO:
O Brasil é favorito, mas não isolado. Argentina e França também chegam fortíssimas. O Hexa depende da saúde do grupo e da forma de Neymar e Vini Jr.`,
    time: 'há 3 dias',
    readTime: '5 min de leitura',
  },
  {
    id: 6,
    tag: '🎬 Curiosidades',
    color: '#1a2a3a',
    tagColor: '#38bdf8',
    emoji: '🌟',
    title: 'Copa 2026: show do Coldplay, NBA no futebol e outras novidades inéditas',
    excerpt: 'A Copa 2026 promete revolucionar o entretenimento do futebol mundial com shows, experiências ao estilo NBA e a maior final da história.',
    body: `A Copa do Mundo 2026 não será apenas mais um Mundial. Será uma revolução no entretenimento esportivo.

🎸 SHOW NA FINAL:
Pela primeira vez na história, a final da Copa terá um show no intervalo no estilo Super Bowl americano. O Coldplay está envolvido na curadoria dos artistas — promete ser épico!

🏀 FUTEBOL NO ESTILO NBA:
Neymar falou ao Disney+ sobre as novidades: "Você não vai a um jogo de basquete (NBA) apenas para assistir a um jogo. Há um show. Há um intervalo, as pessoas saem para dançar."

O craque espera que a Copa mude a experiência do torcedor dentro dos estádios, com entretenimento antes, durante e depois dos jogos.

📺 NÚMEROS HISTÓRICOS:
• 104 partidas (recorde absoluto)
• 48 seleções (16 a mais que em 2022)
• 39 dias de competição
• 16 cidades-sede em 3 países
• Mais de 5 milhões de ingressos disponíveis

🕐 ABERTURA TRIPLA:
Pela primeira vez, a cerimônia de abertura será realizada simultaneamente nos três países-sede — México, EUA e Canadá.

Será, muito provavelmente, a maior Copa do Mundo da história. 🏆`,
    time: 'há 2 dias',
    readTime: '4 min de leitura',
  },
]

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
    { time: now(), msg: '[SW] Service Worker registrado com sucesso ✓', type: 'hit' },
    { time: now(), msg: '[SW] Estratégia: Stale-While-Revalidate ativa', type: 'revalidate' },
  ])

  function addLog(msg: string, type: string) {
    setSwLogs(prev => [{ time: now(), msg, type }, ...prev].slice(0, 20))
  }

  useEffect(() => {
    const up   = () => { setIsOffline(false); addLog('[SW] Rede restaurada — revalidando...', 'fetch') }
    const down = () => { setIsOffline(true);  addLog('[SW] Offline — Cache Only ativado', 'offline') }
    window.addEventListener('online',  up)
    window.addEventListener('offline', down)
    return () => { window.removeEventListener('online', up); window.removeEventListener('offline', down) }
  }, [])

  function toggleOffline() {
    if (!isOffline) {
      setIsOffline(true)
      addLog('[SW] Simulando modo offline...', 'offline')
      addLog(`[SW] ${cachedIds.length} artigos disponíveis no cache`, 'hit')
    } else {
      setIsOffline(false)
      setIsRevalidating(true)
      addLog('[SW] Rede restaurada', 'fetch')
      addLog('[SW] Stale-While-Revalidate: revalidando em background...', 'revalidate')
      setTimeout(() => {
        setIsRevalidating(false)
        addLog('[SW] Cache atualizado ✓', 'hit')
      }, 1800)
    }
  }

  function openArticle(article: Article) {
    setSelectedArticle(article)
    const hit = cachedIds.includes(article.id)
    if (hit) {
      addLog(`[SW] Cache HIT → /article/${article.id}`, 'hit')
      if (!isOffline) setTimeout(() => addLog(`[SW] Revalidando /article/${article.id} em background...`, 'revalidate'), 600)
    } else {
      addLog(`[SW] Cache MISS → GET /article/${article.id}`, 'fetch')
      setTimeout(() => {
        setCachedIds(prev => [...prev, article.id])
        addLog(`[SW] /article/${article.id} salvo no CacheStorage ✓`, 'hit')
      }, 400)
    }
  }

  function getFiltered() {
    if (activeTab === 'brasil') return articles.filter(a => a.tag.includes('Brasil') || a.tag.includes('Jogos') || a.tag.includes('Análise'))
    if (activeTab === 'cached') return articles.filter(a => cachedIds.includes(a.id))
    return articles
  }

  const logColor: Record<string,string> = { hit:'#4ade80', fetch:'#60a5fa', revalidate:'#a78bfa', offline:'#f87171' }

  const statusInfo = isRevalidating
    ? { bg:'#1e3a5f', dot:'#60a5fa', text:'Revalidando em segundo plano...' }
    : isOffline
    ? { bg:'#3a2500', dot:'#f59e0b', text:'⚠  Modo Offline — lendo do cache' }
    : { bg:'#0f2d1f', dot:'#4ade80', text:'Online — Cache ativo' }

  return (
    <div style={{ maxWidth:430, margin:'0 auto', minHeight:'100vh', display:'flex', flexDirection:'column', background:'#0f0f13', fontFamily:"'Inter','Segoe UI',system-ui,sans-serif", position:'relative', color:'#f1f5f9' }}>

      {/* HEADER */}
      <div style={{ background:'#0f0f13', borderBottom:'1px solid #1e1e2e', padding:'14px 18px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#22c55e,#16a34a)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>⚽</div>
          <div>
            <div style={{ fontSize:17, fontWeight:700, letterSpacing:'-.3px' }}>Copa 2026</div>
            <div style={{ fontSize:10, color:'#334155', letterSpacing:'.5px', textTransform:'uppercase' }}>Offline Manager</div>
          </div>
        </div>
        <button onClick={toggleOffline} style={{ background: isOffline ? '#3a2500' : '#0f2d1f', border:`1px solid ${isOffline?'#92400e':'#166534'}`, borderRadius:10, padding:'7px 14px', color: isOffline?'#fbbf24':'#4ade80', fontSize:13, fontWeight:600, cursor:'pointer' }}>
          {isOffline ? '📵 Offline' : '📶 Online'}
        </button>
      </div>

      {/* STATUS */}
      <div style={{ background: statusInfo.bg, padding:'8px 18px', display:'flex', alignItems:'center', gap:8, fontSize:12, fontWeight:600 }}>
        <div style={{ width:7, height:7, borderRadius:'50%', background: statusInfo.dot }} />
        <span style={{ color: statusInfo.dot }}>{statusInfo.text}</span>
        <span style={{ marginLeft:'auto', fontSize:10, color:'#334155', fontWeight:400 }}>Stale-While-Revalidate</span>
      </div>

      {/* TABS */}
      <div style={{ display:'flex', background:'#0f0f13', borderBottom:'1px solid #1e1e2e', padding:'0 18px' }}>
        {[['todas','Todas'],['brasil','🇧🇷 Brasil'],['cached','📦 Salvas']].map(([val,label]) => (
          <button key={val} onClick={() => setActiveTab(val)} style={{ flex:1, padding:'11px 4px', fontSize:13, fontWeight:600, border:'none', background:'none', cursor:'pointer', borderBottom: activeTab===val ? '2px solid #22c55e' : '2px solid transparent', color: activeTab===val ? '#22c55e' : '#475569' }}>
            {label}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div style={{ flex:1, padding:'14px', display:'flex', flexDirection:'column', gap:12 }}>
        {getFiltered().length === 0 && (
          <div style={{ textAlign:'center', padding:'60px 20px', color:'#475569', fontSize:14 }}>
            <div style={{ fontSize:40, marginBottom:12 }}>📦</div>
            Nenhum artigo salvo ainda.<br />Leia os artigos online primeiro.
          </div>
        )}
        {getFiltered().map(article => {
          const isCached  = cachedIds.includes(article.id)
          const available = !isOffline || isCached
          return (
            <div key={article.id} onClick={() => available && openArticle(article)}
              style={{ background:'#16161f', borderRadius:16, border:'1px solid #1e1e2e', overflow:'hidden', cursor: available ? 'pointer' : 'not-allowed', opacity: available ? 1 : 0.35 }}
            >
              <div style={{ height:100, background:`linear-gradient(135deg, ${article.color} 0%, #0f0f13 100%)`, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 20px' }}>
                <div style={{ fontSize:48 }}>{article.emoji}</div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20, background: article.tagColor+'22', color: article.tagColor, border:`1px solid ${article.tagColor}44`, marginBottom:6 }}>{article.tag}</div>
                  <div style={{ fontSize:10, color:'#475569' }}>{article.readTime}</div>
                </div>
              </div>
              <div style={{ padding:'14px 16px' }}>
                <div style={{ fontSize:15, fontWeight:700, lineHeight:1.4, marginBottom:8, color:'#f1f5f9' }}>{article.title}</div>
                <div style={{ fontSize:13, color:'#64748b', lineHeight:1.6, marginBottom:12 }}>{article.excerpt}</div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:10, borderTop:'1px solid #1e1e2e' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background: isCached ? '#4ade80' : '#334155' }} />
                    <span style={{ fontSize:11, color: isCached ? '#4ade80' : '#475569', fontWeight:600 }}>{isCached ? 'Em cache' : 'Sem cache'}</span>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{ fontSize:11, color:'#475569' }}>{article.time}</span>
                    <span style={{ fontSize:12, fontWeight:700, color:'#22c55e' }}>Ler →</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* SW CONSOLE */}
      <div style={{ background:'#090910', borderTop:'1px solid #1e1e2e', padding:'10px 14px', maxHeight:120, overflowY:'auto' }}>
        <div style={{ color:'#334155', fontSize:10, letterSpacing:.8, marginBottom:6, textTransform:'uppercase', fontFamily:'monospace' }}>⚙ Service Worker Console</div>
        {swLogs.map((log, i) => (
          <div key={i} style={{ display:'flex', gap:10, fontSize:11, padding:'1px 0', fontFamily:'monospace' }}>
            <span style={{ color:'#334155', flexShrink:0 }}>{log.time}</span>
            <span style={{ color: logColor[log.type] || '#94a3b8' }}>{log.msg}</span>
          </div>
        ))}
      </div>

      {/* ARTICLE VIEW */}
      {selectedArticle && (
        <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, background:'#0f0f13', zIndex:200, overflowY:'auto', display:'flex', flexDirection:'column' }}>
          <div style={{ height:180, background:`linear-gradient(160deg, ${selectedArticle.color} 0%, #0f0f13 100%)`, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'14px 18px 18px', flexShrink:0 }}>
            <button onClick={() => setSelectedArticle(null)} style={{ background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.15)', borderRadius:10, padding:'6px 14px', color:'#f1f5f9', fontSize:13, cursor:'pointer', alignSelf:'flex-start' }}>
              ← Voltar
            </button>
            <div>
              <div style={{ fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20, background: selectedArticle.tagColor+'22', color: selectedArticle.tagColor, border:`1px solid ${selectedArticle.tagColor}44`, display:'inline-block', marginBottom:8 }}>
                {selectedArticle.tag}
              </div>
              <div style={{ fontSize:18, fontWeight:700, lineHeight:1.3, color:'#f1f5f9' }}>{selectedArticle.title}</div>
            </div>
          </div>
          <div style={{ padding:'12px 18px', borderBottom:'1px solid #1e1e2e', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontSize:12, color:'#475569' }}>{selectedArticle.time} · {selectedArticle.readTime}</span>
            <span style={{ fontSize:12, fontWeight:600, color: cachedIds.includes(selectedArticle.id) ? '#4ade80' : '#60a5fa' }}>
              {cachedIds.includes(selectedArticle.id) ? '🟢 Cache' : '🔵 Rede'}
            </span>
          </div>
          {isOffline && (
            <div style={{ margin:'14px 18px 0', background:'#3a250055', border:'1px solid #92400e', color:'#fbbf24', padding:'10px 14px', borderRadius:10, fontSize:12, fontWeight:600 }}>
              ⚠ Modo Offline — conteúdo servido do cache local
            </div>
          )}
          <div style={{ padding:'18px', fontSize:15, lineHeight:1.9, color:'#94a3b8', whiteSpace:'pre-line', flex:1 }}>
            {selectedArticle.body}
          </div>
        </div>
      )}
    </div>
  )
}
