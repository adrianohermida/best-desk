# 🚀 Como Executar o Dashboard Admin

## 📋 Estrutura Atual

### Site Principal (Porta 3000)

- **URL**: `http://localhost:3000`
- **Conteúdo**: Landing pages do SaasAble (100% template original)
- **Admin Links**: Redirecionam para o servidor admin

### Dashboard Admin (Porta 3001)

- **URL**: `http://localhost:3001`
- **Conteúdo**: Dashboard admin original do SaasAble (100% template original)

## 🎯 Como Usar

### 1. Site Principal (já rodando)

```bash
# Já está rodando em http://localhost:3000
# Menu "Dashboard" → redireciona para admin
```

### 2. Iniciar Servidor Admin

```bash
# Em um novo terminal
cd admin
npm run dev -- --port 3001
```

## 🔗 Navegação

### Do Site Principal:

- `/` → Landing page (template original)
- `/admin` → Página de redirecionamento
- `/admin/dashboard` → Redireciona para dashboard admin
- `/admin/analytics` → Redireciona para analytics admin
- `/admin/users` → Redireciona para users admin

### No Admin (localhost:3001):

- `/` → Redireciona automaticamente para `/dashboard`
- `/dashboard` → Dashboard principal com métricas
- `/sample-page` → Página exemplo para users

## ✅ Benefícios da Arquitetura

1. **100% Template Original**: Sem modificações nos arquivos do SaasAble
2. **Separação Clara**: Site e admin completamente separados
3. **Fácil Manutenção**: Updates do template não afetam customizações
4. **Performance**: Cada servidor otimizado para sua função

## 🔧 Para Produção

### Opção 1: Subdomínios

- `site.com` → Site principal
- `admin.site.com` → Dashboard admin

### Opção 2: Proxy Reverso

- `site.com/` → Site principal
- `site.com/admin/*` → Proxy para servidor admin

### Opção 3: Build Unificado

- Integrar completamente os dois projetos em um só

---

**Status**: ✅ FASE 2 Completa - Admin routes limpas e redirecionamentos configurados
