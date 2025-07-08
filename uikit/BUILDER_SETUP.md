# Builder.io Setup Guide

## 📋 Phase 1-2 Implementation Status

✅ **COMPLETED**: Infrastructure and Base Integration (FIXED)

### What Was Implemented

1. **SDK Installation**: `@builder.io/sdk-react` installed successfully
2. **Environment Configuration**: Added `NEXT_PUBLIC_BUILDER_API_KEY` to `.env`
3. **Routing Implementation**: Created Builder.io route at `app/builder/[[...slug]]/page.jsx`
4. **Component Registry**: Base `builder-registry.js` file created
5. **Configuration**: Centralized config at `src/lib/builder/config.js`

### ⚠️ Issue Fixed: Route Conflicts

**Problem**: Initial implementation used catch-all route `[[...slug]]` which conflicted with existing `(default)/page.jsx`

**Solution**: Created dedicated Builder.io namespace at `/builder/*` to avoid conflicts

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

1. The development server is now running correctly on http://localhost:3003

2. Go to Builder.io and create a new "Page" model

3. Create content with URL path matching Builder.io routes:

   - `/builder/` for root Builder.io content
   - `/builder/about` for about page, etc.

4. Visit `/test-builder` to see integration status

### File Structure Created

```
uikit/
├── .env                              # ✅ Builder.io API key added
├── builder-registry.js               # ✅ Component registry base (JavaScript)
├── BUILDER_SETUP.md                  # ✅ This documentation
├── src/
│   ├── app/
│   │   ├── builder/
│   │   │   └── [[...slug]]/
│   │   │       └── page.jsx         # ✅ Builder.io dedicated route
│   │   └── test-builder/
│   │       └── page.jsx             # ✅ Integration test page
│   └── lib/
│       └── builder/
│           └── config.js            # ✅ Centralized configuration (JavaScript)
```

### Integration Pattern Used

**Dedicated Namespace Pattern**: Created `/builder/*` routes to avoid conflicts with existing template structure. This approach:

- ✅ Preserves all existing template functionality
- ✅ Provides clean Builder.io integration
- ✅ Avoids route conflicts
- ✅ Maintains JavaScript consistency

### Current Route Hierarchy

- `(default)/*` - Existing template pages (preserved)
- `sections/*` - Existing sections (preserved)
- `blocks/*` - Existing blocks (preserved)
- `api/*` - API routes (preserved)
- `builder/[[...slug]]` - Builder.io content (dedicated namespace)
- `test-builder` - Integration test page

### Ready for Phase 3

The infrastructure is ready for **Phase 3: Component Registration**. The next phase will:

1. Register 17 main blocks from the template
2. Create dynamic imports for each component
3. Configure inputs for Builder.io visual editor
4. Test component rendering in Builder.io

### How to Use Builder.io Routes

- **Homepage Alternative**: Create content in Builder.io with URL path `/builder/`
- **Custom Pages**: Create content with URL paths like `/builder/about`, `/builder/contact`
- **Landing Pages**: Use `/builder/landing-name` for dedicated landing pages

### Troubleshooting

#### ✅ Fixed: TypeScript Errors

- Converted all files from TypeScript to JavaScript for consistency
- No TypeScript dependencies required

#### ✅ Fixed: Route Conflicts

- Moved Builder.io routes to dedicated `/builder/*` namespace
- All existing template routes preserved

#### Error: API Key Not Found

- Ensure `.env` file contains the correct API key
- Restart the development server after adding the key
- Check that the key starts with your Builder.io space ID

#### Error: Content Not Found

- Create content in Builder.io with URL path starting with `/builder/`
- Ensure content is published (not draft)
- Check that the model name is "page"

### Test URLs

- **Integration Test**: http://localhost:3003/test-builder
- **Existing Homepage**: http://localhost:3003/ (unchanged)
- **Builder.io Content**: http://localhost:3003/builder/\* (requires content creation)
