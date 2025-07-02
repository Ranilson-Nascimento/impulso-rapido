# Contribuindo para o Impulso Rápido

Obrigado por seu interesse em contribuir com o Impulso Rápido! 🚀

## 🤝 Como Contribuir

### 1. Fork e Clone
```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU_USUARIO/impulso-rapido.git
cd impulso-rapido

# Adicione o repositório original como upstream
git remote add upstream https://github.com/Ranilson-Nascimento/impulso-rapido.git
```

### 2. Configuração do Ambiente
```bash
# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

### 3. Criando uma Branch
```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-fix
```

### 4. Fazendo Mudanças
- Siga as convenções de código existentes
- Adicione comentários quando necessário
- Teste suas mudanças localmente
- Execute os lints: `npm run lint`
- Verifique os tipos: `npm run typecheck`

### 5. Commit e Push
```bash
# Adicione os arquivos alterados
git add .

# Faça commit com uma mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"

# Push para sua branch
git push origin feature/nome-da-feature
```

### 6. Pull Request
1. Vá para o GitHub e abra um Pull Request
2. Descreva claramente o que foi alterado
3. Referencie issues relacionadas se houver
4. Aguarde a revisão

## 📝 Padrões de Commit

Utilizamos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, ponto e vírgula, etc
- `refactor:` refatoração de código
- `test:` adição ou correção de testes
- `chore:` mudanças no build, ferramentas, etc

Exemplos:
```
feat: adiciona integração com Google Analytics
fix: corrige problema de responsividade no mobile
docs: atualiza README com novas instruções
style: aplica formatação ESLint em todos os arquivos
```

## 🎨 Padrões de Código

### TypeScript
- Use tipos explícitos sempre que possível
- Evite `any`, prefira `unknown` quando necessário
- Utilize interfaces para objetos complexos

### React
- Use componentes funcionais com hooks
- Nomeie componentes em PascalCase
- Use props destrutured quando apropriado

### CSS/Tailwind
- Use classes utilitárias do Tailwind
- Mantenha consistência com o design system
- Use variáveis CSS customizadas para temas

### Estrutura de Arquivos
- Componentes em português vão em `src/componentes/`
- Componentes UI genéricos em `src/components/ui/`
- Hooks customizados em `src/hooks/`
- Utilitários em `src/lib/`

## 🐛 Reportando Bugs

### Antes de Reportar
1. Verifique se o bug já foi reportado
2. Teste na versão mais recente
3. Verifique se não é um problema local

### Como Reportar
1. Use o template de issue do GitHub
2. Inclua passos para reproduzir
3. Adicione screenshots se aplicável
4. Especifique o ambiente (OS, browser, etc)

### Template de Bug Report
```markdown
**Descrição do Bug**
Uma descrição clara e concisa do bug.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado**
Uma descrição clara do que você esperava que acontecesse.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 91.0]
- Versão do Node: [ex: 18.17.0]
```

## 💡 Sugerindo Funcionalidades

### Antes de Sugerir
1. Verifique se a funcionalidade já existe
2. Procure por sugestões similares nas issues
3. Considere se se alinha com os objetivos do projeto

### Como Sugerir
1. Use o template de feature request
2. Explique o problema que resolve
3. Descreva a solução proposta
4. Considere alternativas

## 🧪 Testes

```bash
# Execute os testes (quando implementados)
npm run test

# Execute os lints
npm run lint

# Verifique os tipos
npm run typecheck

# Teste a build
npm run build
```

## 📚 Recursos Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)

## ❓ Dúvidas

Se você tem dúvidas sobre como contribuir:

- Abra uma [Discussion](https://github.com/Ranilson-Nascimento/impulso-rapido/discussions)
- Entre em contato: ranilsonnunes6@gmail.com
- LinkedIn: [ranilson-nascimento](https://linkedin.com/in/ranilson-nascimento-875ba5181)

## 🙏 Reconhecimento

Todos os contribuidores serão reconhecidos no README do projeto. Obrigado por tornar o Impulso Rápido melhor! 🚀
