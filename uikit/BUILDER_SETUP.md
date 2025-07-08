# Builder.io Setup Guide

## 📋 Phase 1-2 Implementation Status

✅ **COMPLETED**: Infrastructure and Base Integration

### What Was Implemented

1. **SDK Installation**: `@builder.io/sdk-react` installed successfully
2. **Environment Configuration**: Added `NEXT_PUBLIC_BUILDER_API_KEY` to `.env`
3. **Routing Implementation**: Created catch-all route at `app/[[...slug]]/page.tsx`
4. **Component Registry**: Base `builder-registry.ts` file created
5. **Configuration**: Centralized config at `src/lib/builder/config.ts`

### Next Steps Required

#### 🔑 Step 1: Get Your Builder.io API Key

1. Go to [Builder.io](https://builder.io/content)
2. Sign up or log in to your account
3. Navigate to "Account Settings" → "API Keys"
4. Copy your Public API Key

#### 🔧 Step 2: Configure Environment Variable

Replace the placeholder in your `.env` file:

```bash
# Replace 'your-builder-api-key-here' with your actual API key
NEXT_PUBLIC_BUILDER_API_KEY=your-actual-api-key-here
```

#### 🚀 Step 3: Test the Integration

1. Restart your development server:

   ```bash
   cd uikit && npm run dev
   ```

2. Go to Builder.io and create a new "Page" model
3. Create content with URL path "/"
4. Visit your site to see Builder.io content

### File Structure Created

```
uikit/
├── .env                              # ✅ Builder.io API key added
├── builder-registry.ts               # ✅ Component registry base
├── src/
│   ├── app/
│   │   └── [[...slug]]/
│   │       └── page.tsx             # ✅ Builder.io catch-all route
│   └── lib/
│       └── builder/
│           └── config.ts            # ✅ Centralized configuration
└── BUILDER_SETUP.md                 # ✅ This documentation
```

### Integration Pattern Used

**Pattern B (Root Level)**: Since no `app/page.jsx` exists at the root level, we used the catch-all route pattern which allows Builder.io to handle all unmatched routes while preserving existing grouped routes like `(default)`.

### Current Route Hierarchy

- `(default)/*` - Existing template pages (preserved)
- `sections/*` - Existing sections (preserved)
- `blocks/*` - Existing blocks (preserved)
- `api/*` - API routes (preserved)
- `[[...slug]]` - New Builder.io content (catch-all for unmatched routes)

### Ready for Phase 3

The infrastructure is ready for **Phase 3: Component Registration**. The next phase will:

1. Register 17 main blocks from the template
2. Create dynamic imports for each component
3. Configure inputs for Builder.io visual editor
4. Test component rendering in Builder.io

### Troubleshooting

#### Error: API Key Not Found

- Ensure `.env` file contains the correct API key
- Restart the development server after adding the key
- Check that the key starts with your Builder.io space ID

#### Error: Content Not Found

- Create content in Builder.io with the exact URL path
- Ensure content is published (not draft)
- Check that the model name is "page"

#### Error: Route Conflicts

- The current setup preserves all existing routes
- Builder.io only handles unmatched routes via catch-all
- No existing functionality should be affected
