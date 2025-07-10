# Roteamento do Admin - SaasAble

## Estrutura Atual

O projeto agora está configurado para usar a estrutura completa do template admin original, evitando duplicação de código.

### Arquitetura

1. **Pasta `/uikit`**: Contém o site principal e landing pages
2. **Pasta `/admin`**: Contém o dashboard admin completo do SaasAble
3. **Roteamento**: As rotas `/admin/*` no uikit redirecionam para a estrutura original

### Rotas Admin Disponíveis

- `/admin/dashboard` → Dashboard principal
- `/admin/analytics` → Analytics do sistema
- `/admin/users` → Gerenciamento de usuários

### Como Funciona

1. As páginas em `/uikit/src/app/admin/*` são páginas de redirecionamento
2. Elas apontam para `http://localhost:3001` onde roda o servidor admin original
3. Isso mantém a integridade do template SaasAble sem modificações

### Para Produção

Em produção, você pode:

1. **Subdominios**: `admin.seusite.com` para o admin
2. **Proxy Reverso**: Nginx ou similar para rotear `/admin` para o servidor admin
3. **Build Único**: Integrar completamente os dois projetos

### Vantagens

- ✅ Usa a estrutura original do SaasAble
- ✅ Evita duplicação de componentes
- ✅ Mantém o design e funcionalidades originais
- ✅ Fácil manutenção e atualizações
- ✅ Separação clara entre site e admin

### Comandos para Desenvolvimento

```bash
# Terminal 1 - Site principal (porta 3000)
cd uikit && npm run dev

# Terminal 2 - Admin dashboard (porta 3001)
cd admin && npm run dev -- --port 3001
```

Agora o menu "Dashboard" no cabeçalho do site redirecionará corretamente para o dashboard admin completo!
