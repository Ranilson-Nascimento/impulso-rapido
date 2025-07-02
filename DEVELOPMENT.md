# Guia de Desenvolvimento - Impulso Rápido

## 🚀 Configuração Inicial

### 1. Clonando o Repositório
```bash
git clone https://github.com/Ranilson-Nascimento/impulso-rapido.git
cd impulso-rapido
```

### 2. Instalação de Dependências
```bash
npm install
# ou
yarn install
```

### 3. Configuração das Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite o arquivo .env.local com suas configurações
```

#### Variáveis Necessárias:
- `GOOGLE_GENAI_API_KEY`: Chave da API do Google AI (Gemini) para otimização com IA
- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics (opcional)
- `NEXT_PUBLIC_SITE_URL`: URL do seu site (para produção)

### 4. Executando o Projeto
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Verificação de tipos TypeScript
npm run typecheck

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js 13+
│   ├── layout.tsx         # Layout principal com SEO
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   └── sitemap.ts         # Sitemap automático
├── componentes/           # Componentes em português
│   └── pagina-inicial/    # Componentes da landing page
├── components/            # Componentes UI reutilizáveis
│   ├── landing/           # Componentes específicos da landing
│   └── ui/               # Componentes UI base (shadcn/ui)
├── hooks/                 # Custom hooks
├── lib/                   # Utilities e configurações
└── ai/                    # Configuração da IA (Genkit)
```

## 🎨 Personalização

### Temas
O projeto suporta múltiplos temas de cores. Edite em `src/app/layout.tsx`:
- `theme-neutral` (padrão)
- `theme-sky`
- `theme-amber`
- `theme-rose`
- `theme-green`

### Componentes
- **Herói**: `src/componentes/pagina-inicial/Heroi.tsx`
- **Benefícios**: `src/componentes/pagina-inicial/Beneficios.tsx`
- **Portfólio**: `src/componentes/pagina-inicial/Portfolio.tsx`
- **Depoimentos**: `src/componentes/pagina-inicial/Depoimentos.tsx`
- **Contato**: `src/componentes/pagina-inicial/Contato.tsx`

## 🤖 IA e Otimização

### Configuração do Google AI (Gemini)
1. Obtenha uma chave de API em [Google AI Studio](https://aistudio.google.com/)
2. Adicione a chave em `.env.local`:
   ```
   GOOGLE_GENAI_API_KEY=sua_chave_aqui
   ```

### Usando o Genkit
```bash
# Iniciar o ambiente de desenvolvimento do Genkit
npm run genkit:dev

# Com watch mode
npm run genkit:watch
```

## 📊 Analytics

### Google Analytics
1. Crie uma propriedade no Google Analytics
2. Adicione o Measurement ID em `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
O projeto é compatível com:
- Netlify
- AWS Amplify
- Firebase Hosting
- Qualquer provedor que suporte Next.js

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run start`: Inicia o servidor de produção
- `npm run lint`: Executa o ESLint
- `npm run typecheck`: Verifica os tipos TypeScript
- `npm run preview`: Build e start em sequência

## 🐛 Troubleshooting

### Erro de Dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de Tipos TypeScript
```bash
# Verificar tipos
npm run typecheck
```

### Problemas com IA
- Verifique se a chave do Google AI está correta
- Certifique-se de que a API está habilitada

## 📝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

- **Email**: ranilsonnunes6@gmail.com
- **GitHub**: [@Ranilson-Nascimento](https://github.com/Ranilson-Nascimento)
- **LinkedIn**: [ranilson-nascimento](https://linkedin.com/in/ranilson-nascimento-875ba5181)
