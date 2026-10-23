# A Curiosa na Cozinha 🍽️
**Website oficial e vitrine de encomendas por Indira Rocha Zinga**

Este projeto é um website estático moderno, elegante e responsivo (*landing page one-page*) desenvolvido em **React 19 + Vite + TypeScript + Tailwind CSS**.

O website foi projetado para funcionar de forma **100% independente**, sem necessidade de servidores proprietários, banco de dados ou backend, perfeito para hospedagem rápida e gratuita como **Render Static Site**, **Vercel**, **Netlify** ou **GitHub Pages**, com posterior ligação ao domínio personalizado (ex: `www.acuriosanacozinha.com`).

---

## 🚀 Funcionalidades Principais

- **Identidade Visual Premium:** Inspirada nas raízes da gastronomia angolana e na marca pessoal de Indira Rocha Zinga (cores magenta/rosa, tons quentes de barro e tipografia refinada).
- **Hero com Slideshow Automático:** Transição suave por *crossfade* a cada 3,5 segundos entre as 3 fotografias principais (`hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`).
- **Apresentação Humana & Comercial:** Seção "Sobre" com a história, pilares e manifesto da marca.
- **Cardápio Interativo:** Pratos com fotos, descrições, preços em Kwanzas (Kz), filtros por categoria e tempo de preparação.
- **Modal de Detalhes do Prato:** Exibição detalhada com ingredientes, porções sugeridas e botão direto de encomenda.
- **Formulário de Encomenda:** Coleta nome, telefone/WhatsApp, data desejada, horário preferido, local de entrega e observações, com validação de campos obrigatórios e garantia de privacidade.
- **Integração Direta com WhatsApp:** Formatação automática e codificação de URL para envio instantâneo ao número da proprietária (`+244 936 949 003`).
- **Seção de Serviços:** Encomendas, Buffet & Eventos, Conteúdo Culinário e Parcerias.
- **Galeria Visual & Reprodutor de Vídeos Locais:** Suporte a vídeos MP4 locais carregados a partir de `/assets/videos/`.
- **CTA Final & Rodapé Completo:** Links para redes sociais (Instagram, TikTok, YouTube, WhatsApp) e copyright.

---

## 📁 Estrutura de Arquivos

```text
a-curiosa-na-cozinha/
├── public/
│   └── assets/
│       ├── images/          # Fotografias (hero-1.jpg, prato-1.jpg, etc.)
│       └── videos/          # Vídeos locais (video-1.mp4, video-2.mp4)
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Barra de navegação minimalista (Logo + Encomendar)
│   │   ├── Hero.tsx         # Slideshow com destaque no prato de fundo
│   │   ├── Dishes.tsx       # Vitrine de pratos e filtros
│   │   ├── DishModal.tsx    # Modal com detalhes completos do prato
│   │   ├── OrderModal.tsx   # Formulário e envio para WhatsApp
│   │   ├── Services.tsx     # Serviços (4 opções com interações próprias)
│   │   ├── ServiceModal.tsx # Modal interativo exclusivo para cada serviço
│   │   ├── GalleryAndVideos.tsx # Galeria de fotos e player de vídeo
│   │   ├── CTA.tsx          # Seção "Pronto para saborear?"
│   │   └── Footer.tsx       # Rodapé e redes sociais
│   ├── data/
│   │   ├── dishes.ts        # Arquivo central para editar pratos e preços
│   │   └── config.ts        # Configurações de telefone, WhatsApp e redes
│   ├── utils/
│   │   └── whatsapp.ts      # Gerador de links e mensagens do WhatsApp
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Como Executar Localmente

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em seu computador.

### 2. Instalar dependências
No terminal, dentro da pasta do projeto, execute:
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará acessível no seu navegador em: `http://localhost:3000` (ou na porta indicada pelo terminal).

### 4. Gerar a versão de produção (Build)
```bash
npm run build
```
Os arquivos otimizados prontos para deploy serão criados na pasta `dist/`.

---

## 📸 Guia Passo a Passo: Como Colocar Suas Fotos e Vídeos

Todas as imagens e vídeos do projeto ficam centralizados dentro da pasta:
👉 **`public/assets/`**

### 1. Onde colocar as Fotos (`public/assets/images/`):
Basta arrastar ou colar suas fotos para a pasta `public/assets/images/` substituindo os arquivos com os nomes abaixo (formatos aceitos: `.jpg`, `.png` ou `.webp`):

| Nome do Arquivo | Onde aparece no site | Resolução Recomendada |
| :--- | :--- | :--- |
| **`prato-fundo.jpg`** | Imagem de fundo do topo e rodapé (sem letras) | 1920 × 1080 px (16:9) |
| **`hero-1.jpg`** | 1ª foto da Indira na lateral do Hero | 1920 × 1080 px (16:9) |
| **`hero-2.jpg`** | 2ª foto da Indira na lateral do Hero | 1920 × 1080 px (16:9) |
| **`hero-3.jpg`** | 3ª foto da Indira na lateral do Hero | 1920 × 1080 px (16:9) |
| **`prato-1.jpg`** | Foto do 1º prato: Mufete de peixe | 800 × 600 px |
| **`prato-2.jpg`** | Foto do 2º prato: Calulu de peixe | 800 × 600 px |
| **`prato-3.jpg`** | Foto do 3º prato: Frango à moda da casa | 800 × 600 px |
| **`prato-4.jpg`** | Foto do 4º prato: Arroz de marisco | 800 × 600 px |
| **`prato-5.jpg`** | Foto do 5º prato: Moamba de galinha | 800 × 600 px |
| **`prato-6.jpg`** | Foto do 6º prato: Feijoada rica | 800 × 600 px |
| **`galeria-1.jpg` a `galeria-6.jpg`** | Fotografias da grade visual da Galeria | 800 × 600 px |

### 2. Onde colocar os Vídeos (`public/assets/videos/`):
Basta colar os seus vídeos no formato `.mp4` dentro da pasta `public/assets/videos/`:
- **`video-1.mp4`**: Primeiro vídeo (bastidores, receita ou apresentação)
- **`video-2.mp4`**: Segundo vídeo (dicas de preparo ou técnicas culinárias)

> 💡 **Dica:** Os nomes das imagens e dos pratos também podem ser personalizados abrindo o arquivo `src/data/dishes.ts`.

---

## 🍽️ Como Alterar Preços, Pratos e Telefone

- **Para alterar pratos, descrições e preços:**
  Abra o arquivo `src/data/dishes.ts` e edite a lista `DISHES`.
- **Para alterar o número de WhatsApp e links de redes:**
  Abra o arquivo `src/data/config.ts` e edite o campo `whatsappNumber`.

---

## 🌐 Como Fazer Deploy no Render (Static Site)

### Passo 1: Subir o projeto para o GitHub
1. Inicialize o repositório git (se ainda não o fez):
   ```bash
   git init
   git add .
   git commit -m "Versao inicial A Curiosa na Cozinha"
   ```
2. Crie um novo repositório no seu GitHub (ex: `a-curiosa-na-cozinha`).
3. Conecte e envie o código:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/a-curiosa-na-cozinha.git
   git branch -M main
   git push -u origin main
   ```

### Passo 2: Conectar ao Render
1. Acesse [render.com](https://render.com) e crie ou entre na sua conta.
2. Clique no botão **"New +"** no canto superior direito e selecione **"Static Site"**.
3. Conecte a sua conta do GitHub e escolha o repositório `a-curiosa-na-cozinha`.
4. Preencha as configurações de build:
   - **Name:** `a-curiosa-na-cozinha`
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Na aba **Environment** (Variáveis de Ambiente), adicione:
   - **Key:** `NODE_VERSION`
   - **Value:** `22.14.0`
6. Clique em **"Create Static Site"**.
7. Em menos de 2 minutos seu website estará no ar com HTTPS gratuito!

### Passo 3: Adicionar Domínio Personalizado (Opcional)
No painel do Render, vá em **Settings** > **Custom Domains** e adicione seu domínio (por exemplo `acuriosanacozinha.com`). Siga as instruções de DNS fornecidas pelo Render no seu registrador de domínio.

---

## 📱 Contato & Suporte
- **Chef & Proprietária:** Indira Rocha Zinga
- **Marca:** A Curiosa na Cozinha
- **WhatsApp:** +244 936 949 003
- **Localização:** Luanda, Angola
