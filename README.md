# Impulso Rápido

[![Deploy em produção](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fimpulso-rapido.vercel.app)](https://impulso-rapido.vercel.app)
[![Acesse a página em tempo real](https://img.shields.io/badge/Ver%20Landing%20Page-impulso--rapido.vercel.app-06B6D4?style=flat-square&logo=vercel)](https://impulso-rapido.vercel.app)

![Banner do projeto](./page.png)

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

Impulso Rápido é uma landing page para criação rápida de páginas de alta conversão, desenvolvida com Next.js, TypeScript e Tailwind CSS. O projeto inclui recursos de otimização com IA, portfólio express, depoimentos e integração com analytics, pronto para deploy no Vercel.

## 🚀 Recursos

- Destaque de Benefícios: Apresenta de forma clara e concisa os principais benefícios do seu produto ou serviço.
- Portfólio Express: Galeria de exemplos de landing pages criadas rapidamente para diversos nichos.
- Formulário de Contato: Coleta de informações simples para briefing inicial do cliente.
- Depoimentos: Sessão de prova social com depoimentos curtos de clientes satisfeitos.
- Otimização Turbo com IA: Integração com ferramenta de IA para sugerir melhorias de texto visando conversão.
- Analytics Integrado: Configuração rápida de Google Analytics ou outra ferramenta de análise.

## 🛠️ Tech Stack

- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
- Shadcn/ui (componentes Radix)  
- Ferramenta de IA para otimização de texto  
- Vercel para deploy contínuo

## 📥 Instalação

Pré-requisitos:

- Node.js (>=14.x)  
- npm ou yarn  

Passos:

```bash
# Clone o repositório
git clone https://github.com/Ranilson-Nascimento/impulso-rapido.git

# Acesse a pasta do projeto
cd impulso-rapido

# Instale as dependências
npm install
# ou
yarn install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local com suas chaves de API
```

## ⚙️ Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
# ou
yarn build
```

Inicia o servidor em modo de produção:

```bash
npm run start
# ou
yarn start
```

## ♻️ Deploy no Vercel

### Método 1: Via GitHub (Recomendado)
1. Faça o push do código no GitHub
2. Acesse [Vercel](https://vercel.com/) e crie um novo projeto
3. Selecione o repositório `impulso-rapido`
4. Configure as variáveis de ambiente na aba Settings > Environment Variables:
   - `GOOGLE_GENAI_API_KEY` (para IA)
   - `NEXT_PUBLIC_GA_ID` (para Analytics)
   - Outras variáveis conforme necessário
5. Clique em Deploy

### Método 2: Via Vercel CLI
```bash
# Instale a CLI do Vercel
npm i -g vercel

# Faça o deploy
vercel

# Para deploy de produção
vercel --prod
```

### Configurações importantes:
- Framework: Next.js (detectado automaticamente)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## 🗂️ Estrutura do Projeto

```bash
├── docs/
│   └── blueprint.md   # Especificação do projeto
├── public/
│   └── favicon.ico
├── src/
│   ├── app/           # Rotas e layout do Next.js
│   ├── componentes/   # Componentes específicos da landing page (em pt-br)
│   ├── components/    # Componentes genéricos UI (em en-us)
│   ├── hooks/         # Custom hooks
│   └── lib/           # Utils e funções de apoio
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✉️ Contato

Desenvolvido por **Ranilson Nascimento** (<ranilsonnunes6@gmail.com>)  
LinkedIn: [ranilson-nascimento-875ba5181](https://linkedin.com/in/ranilson-nascimento-875ba5181)  
GitHub: [@Ranilson-Nascimento](https://github.com/Ranilson-Nascimento)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!
