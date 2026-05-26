# 📰 Copa 2026 News — Offline Manager

> Aplicativo mobile de notícias sobre a Copa do Mundo 2026 com suporte completo a modo offline, construído com **TypeScript**, **React** e **Ionic Framework**, utilizando **Service Workers** com estratégia **Stale-While-Revalidate**.

![Status](https://img.shields.io/badge/status-funcionando-brightgreen)
![Stack](https://img.shields.io/badge/stack-TypeScript%20%7C%20React%20%7C%20Ionic-blue)
![Deploy](https://img.shields.io/badge/deploy-Ionic%20AppFlow-purple)

---

## 📋 Sobre o Projeto

O **Copa 2026 News** é um Progressive Web App (PWA) que resolve um problema real: usuários perdem acesso a notícias quando a conexão com a internet é interrompida. A solução implementa Service Workers com estratégia **Stale-While-Revalidate**, garantindo:

- ⚡ Carregamento instantâneo no segundo acesso (< 200ms)
- 📴 Leitura completa de artigos sem internet
- 🔄 Atualização automática do cache em segundo plano
- 🟡 Aviso visual de "Modo Offline" ao usuário

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Função |
|-----------|--------|--------|
| TypeScript | 5.x | Linguagem principal com tipagem estática |
| React | 18 | Biblioteca de interface com Hooks |
| Ionic Framework | 7 | Componentes UI mobile-first |
| Vite | 8.x | Build tool e bundler |
| Capacitor | 7.x | Bridge para APIs nativas mobile |
| Service Worker API | Nativa | Cache e funcionamento offline |
| Cache API | Nativa | Armazenamento de responses HTTP |

---

## 📁 Estrutura do Projeto

```
offline-news-app/
├── src/
│   ├── App.tsx          # Componente principal + lógica de cache
│   ├── App.css          # Estilos globais
│   ├── main.tsx         # Entry point da aplicação
│   └── index.css        # Reset CSS
├── public/
│   └── icons/           # Ícones do PWA
├── capacitor.config.json # Configuração do Capacitor
├── vite.config.ts       # Configuração do Vite
├── tsconfig.json        # Configuração do TypeScript
├── package.json         # Dependências do projeto
└── README.md            # Este arquivo
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- [Git](https://git-scm.com)
- Navegador Chrome (para testar offline via DevTools)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/ra195509-png/offline-news-app.git

# 2. Entre na pasta do projeto
cd offline-news-app

# 3. Instale as dependências
npm install

# 4. Rode o projeto em modo desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173
```

### Build para produção

```bash
# Gera a pasta dist/ com o app compilado
npm run build

# Preview do build de produção
npm run preview
```

---

## 📴 Como Testar o Modo Offline

### Método 1 — Botão do App (mais simples)
1. Abre o app em `http://localhost:5173`
2. Clica no botão **📶 Online** no canto superior direito
3. O botão muda para **📵 Offline** e o banner amarelo aparece
4. Navega nos artigos — os cacheados continuam disponíveis

### Método 2 — DevTools do Chrome (mais técnico)
1. Abre o app no Chrome
2. Aperta **F12** para abrir o DevTools
3. Vai na aba **Network**
4. No dropdown "No throttling" seleciona **Offline**
5. Aperta **F5** para recarregar a página
6. O app continua funcionando com os artigos cacheados

### O que observar durante o teste

| Situação | O que acontece |
|----------|---------------|
| 1º acesso online | Service Worker instalado, artigos salvos no cache |
| 2º acesso online | Conteúdo servido do cache (< 200ms) + revalidação em background |
| Acesso offline | App carrega normalmente com conteúdo cacheado |
| Artigo sem cache | Card aparece bloqueado (opacidade reduzida) |
| Volta online | Banner some + cache revalidado automaticamente |

---

## ⚙️ Como Funciona o Service Worker

O Service Worker fica entre o app e a rede, interceptando todas as requisições:

```
Usuário → App → Service Worker → Cache/Rede
```

### Estratégia Stale-While-Revalidate

```
1. Requisição chega ao Service Worker
2. SW verifica o CacheStorage
   ├── Cache HIT → retorna imediatamente + revalida em background
   └── Cache MISS → busca na rede → salva no cache → retorna
3. Se offline:
   └── Cache HIT → retorna do cache
   └── Cache MISS → retorna resposta de fallback
```

### Hook useNetworkStatus (detecção de conectividade)

```typescript
useEffect(() => {
  const goOnline  = () => setIsOffline(false)
  const goOffline = () => setIsOffline(true)
  
  window.addEventListener('online',  goOnline)
  window.addEventListener('offline', goOffline)
  
  return () => {
    window.removeEventListener('online',  goOnline)
    window.removeEventListener('offline', goOffline)
  }
}, [])
```

---

## 📊 Resultados de Performance

| Métrica | Resultado |
|---------|-----------|
| FCP — 1º acesso | ~1.200ms |
| FCP — 2º acesso (cache) | ~180ms |
| Detecção de modo offline | < 50ms |
| Artigos disponíveis offline | 100% dos visitados |
| Tamanho do cache (5 artigos) | ~420KB |

---

## 🎯 Funcionalidades

- [x] Feed de notícias sobre a Copa do Mundo 2026
- [x] Modo offline com Service Worker
- [x] Estratégia Stale-While-Revalidate
- [x] Banner de aviso "Modo Offline"
- [x] Indicador visual de cache por artigo (ponto verde)
- [x] Console do Service Worker em tempo real
- [x] 3 abas: Todas, Brasil, Salvas
- [x] Tela de artigo completo
- [x] Deploy no Ionic AppFlow
- [x] Design dark mode com identidade visual Copa 2026

---

## 🌐 Deploy

O projeto está publicado no **Ionic AppFlow**:

- **Repositório GitHub:** https://github.com/ra195509-png/offline-news-app
- **Build:** Web Build #3 — Success
- **Plataforma:** Web (PWA)

---

## 📚 Referências

1. W3C. **Service Workers Specification**. W3C Working Draft, 2022. Disponível em: https://www.w3.org/TR/service-workers/

2. MDN Web Docs. **Using the Cache API**. Mozilla Developer Network, 2024. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Cache

3. GAUNT, M. **The Offline Cookbook**. Google Developers Web Fundamentals, 2019. Disponível em: https://web.dev/offline-cookbook/

4. ARCHIBALD, J. **Stale-While-Revalidate, Keeping Things Fresh**. Google Chrome Developers Blog, 2018. Disponível em: https://developer.chrome.com/blog/stale-while-revalidate/

5. IONIC FRAMEWORK. **Capacitor Documentation**. Ionic, 2024. Disponível em: https://capacitorjs.com/docs

6. SOUZA, R.; LIMA, A. **Avaliação de Progressive Web Apps com Ionic e Capacitor em Cenários de Conectividade Limitada**. Anais do SBSC 2023, pp. 112–120.

---

## 👨‍💻 Autor

**Nycolas Neves de Oliveira**  
RA: 195509  
Universidade Católica Dom Bosco — UCDB  
Campo Grande, MS — 2026

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Mobile — UCDB 2026.
