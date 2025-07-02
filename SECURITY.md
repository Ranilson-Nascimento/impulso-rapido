# Política de Segurança

## 🛡️ Versões Suportadas

Atualmente, oferecemos suporte de segurança para as seguintes versões:

| Versão | Suportada          |
| ------ | ------------------ |
| 1.x.x  | ✅ Sim             |
| < 1.0  | ❌ Não             |

## 🚨 Reportando Vulnerabilidades

A segurança do Impulso Rápido é levada a sério. Se você descobrir uma vulnerabilidade de segurança, por favor:

### ✉️ Contato Privado
**NÃO** reporte vulnerabilidades através de issues públicas.

Entre em contato diretamente:
- **Email**: ranilsonnunes6@gmail.com
- **Assunto**: [SECURITY] Vulnerabilidade no Impulso Rápido

### 📋 Informações a Incluir
- Descrição detalhada da vulnerabilidade
- Passos para reproduzir o problema
- Impacto potencial
- Versão afetada
- Sugestão de correção (se houver)

### ⏱️ Processo de Resposta
1. **Confirmação**: Responderemos em até 48 horas
2. **Avaliação**: Investigaremos a vulnerabilidade
3. **Correção**: Desenvolveremos e testaremos a correção
4. **Release**: Publicaremos a correção o mais rápido possível
5. **Disclosure**: Divulgaremos a vulnerabilidade após a correção

### 🏆 Reconhecimento
Contribuidores que reportam vulnerabilidades de forma responsável serão reconhecidos (se desejarem) no arquivo de CHANGELOG.

## 🔒 Práticas de Segurança

### Dependências
- Todas as dependências são regularmente auditadas
- Utilizamos `npm audit` para verificar vulnerabilidades
- Dependências são mantidas atualizadas

### Código
- Revisão de código obrigatória para todos os PRs
- Linting e verificação de tipos automática
- Testes de segurança em CI/CD

### Deploy
- Variáveis de ambiente sensíveis nunca commitadas
- HTTPS obrigatório em produção
- Headers de segurança configurados

## 🛠️ Ferramentas de Segurança

### Para Desenvolvedores
```bash
# Auditoria de dependências
npm audit

# Verificação automática de vulnerabilidades
npm audit fix

# Verificação de tipos (previne alguns problemas)
npm run typecheck
```

### Headers de Segurança
O projeto inclui headers de segurança configurados:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 📚 Recursos de Segurança

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

## 🔄 Atualizações de Segurança

Recomendamos:
- Manter todas as dependências atualizadas
- Seguir as releases de segurança do Next.js
- Monitorar vulnerabilidades conhecidas

---

**Obrigado por ajudar a manter o Impulso Rápido seguro!** 🛡️
