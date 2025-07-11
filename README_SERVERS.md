# Como Rodar os Projetos

## Estrutura dos Projetos

Este repositório contém dois projetos Next.js:

1. **UIKit** (Site Principal) - Porta 3000
   - Localização: `/uikit`
   - URL: http://localhost:3000
   - Páginas principais: Landing pages, seções de templates

2. **Admin** (Painel Administrativo) - Porta 3001
   - Localização: `/admin`
   - URL: http://localhost:3001
   - Páginas principais: Dashboard, páginas administrativas

## Comandos para Rodar

### Rodar apenas o UIKit (Site Principal):

```bash
cd uikit && npm run dev
```

### Rodar apenas o Admin:

```bash
cd admin && npm run dev
```

### Rodar ambos simultaneamente:

```bash
npm run dev:both
```

## Acessar os Projetos

### Site Principal (UIKit) - http://localhost:3000

- **Homepage**: http://localhost:3000
- **Páginas básicas**: `/contact`, `/privacy-policy`, `/terms-condition`
- **Templates**: http://localhost:3000/templates
- **Seções demonstrativas**: http://localhost:3000/sections
- **Blocos reutilizáveis**: http://localhost:3000/blocks
- **Builder.io**: http://localhost:3000/builder

**Total: 60+ rotas demonstrativas disponíveis**

### Admin Dashboard - http://localhost:3001

- **Dashboard**: http://localhost:3001/dashboard
- **Página de Exemplo**: http://localhost:3001/sample-page
- **Utilitários de Design**:
  - Cores: http://localhost:3001/utils/color
  - Sombras: http://localhost:3001/utils/shadow
  - Tipografia: http://localhost:3001/utils/typography
- **Autenticação**:
  - Login: http://localhost:3001/auth/login
  - Registro: http://localhost:3001/auth/register

## Problemas Corrigidos

1. ✅ ConfigContext Provider corrigido em ambos projetos
2. ✅ useConfig hook atualizado para usar useContext
3. ✅ useLocalStorage otimizado com tratamento de erros
4. ✅ Dynamic imports removidos para melhor performance
5. ✅ Configuração de portas diferentes para evitar conflitos
