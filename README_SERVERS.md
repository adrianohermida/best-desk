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

- **Site Principal (UIKit)**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3001/dashboard

## Problemas Corrigidos

1. ✅ ConfigContext Provider corrigido em ambos projetos
2. ✅ useConfig hook atualizado para usar useContext
3. ✅ useLocalStorage otimizado com tratamento de erros
4. ✅ Dynamic imports removidos para melhor performance
5. ✅ Configuração de portas diferentes para evitar conflitos
