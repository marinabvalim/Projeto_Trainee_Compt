# Projeto Front-End – Trilha Trainee Comp Júnior

Autor(a): **Marina Barbosa Valim**.

## 🚀 Tecnologias
- React (biblioteca de UI – interface do usuário)
- Vite (ferramenta de build/servidor de desenvolvimento)
- JavaScript (ES6+)
- TMDB API
- Docker

## 🔗 API Utilizada
- Site: https://www.themoviedb.org/
- Documentação: https://developer.themoviedb.org/reference/configuration-details

**Base URLs úteis (HTTP – protocolo de transferência de hipertexto):**
- API base: `https://api.themoviedb.org/3`
- Imagens: `https://image.tmdb.org/t/p/` (ex.: `w500`, `original`)


## 🧩 Funcionalidades
- Listagem de filmes/séries populares
- Busca por título
- Página de detalhes (sinopse, nota média, gêneros, elenco – se aplicado)
- Componentes reutilizáveis (cards, grids, cabeçalho/rodapé)
- Tratamento básico de erros e carregamento (loading)

## 🛠️ Como rodar localmente
```bash
# 1) Clone o repositório
git clone <URL_DO_SEU_REPO>
cd <PASTA_DO_PROJETO>

# 2) Instale as dependências (NPM – gerenciador de pacotes do Node.js)
npm install

# 3) Configure as variáveis de ambiente em um arquivo .env na raiz
# (veja o exemplo abaixo)

# 4) Rode o servidor de desenvolvimento (Vite)
npm run dev
