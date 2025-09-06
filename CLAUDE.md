# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chinese-language interactive dashboard website for the "三木有话说" (Sanmu YouTube) channel. It's an internal strategic planning tool with password protection that transforms static reports into an interactive decision-making interface.

## Development Commands

```bash
# Run locally (no build required - static site)
npm run dev    # Uses python3 -m http.server 8000
npm start      # Uses serve .
```

## Architecture

### Core Structure
- `index.html` - Main dashboard with interactive strategy visualization, content pillars (人生解惑, 情绪工具, 禁忌揭秘), and 20 expandable topic cards
- `article.html` - Universal template that dynamically loads article content based on URL parameters
- `/articles/` - Article content directory supporting both `.js` and `.md` formats
- `/api/` - Vercel serverless functions for authentication and configuration

### Article System

**JavaScript Articles** (`articles/[topic-id].js`):
- Export data via `window.articleData` object
- Support custom sections with HTML content
- Can include Chart.js visualizations
- Example: `article.html?topic=pet-goodbye`

**Markdown Articles** (`articles/[topic-id].md`):
- Standard markdown with automatic styling
- Requires `format=md` URL parameter
- Example: `article.html?topic=exhausted&format=md`

### Adding New Articles

1. Create article file in `/articles/[topic-id].{js|md}`
2. Add entry to `contentLibraryData` array in `index.html`:
```javascript
{
    id: 'topic-id',
    title: '文章标题',
    type: '文章类型', // e.g., '信息图', '深度分析'
    url: './article.html?topic=topic-id' // Add &format=md for markdown
}
```
3. Commit and push - Vercel auto-deploys on push to main

## Vercel Deployment

### Configuration
- `vercel.json` specifies no build/install commands and security headers
- Environment variable: `LOGIN_PASSWORD` (required for authentication)
- Auto-deploys on push to `main` branch

### API Endpoints
- `/api/auth.js` - Password authentication (uses `LOGIN_PASSWORD` env var)
- `/api/config.js` - Returns environment configuration

## Topic Management System

### Interactive Status Management
- Each topic card includes a three-dot menu with icon-based actions
- Topics can be marked as "used" (✓ green checkmark) or "unused" (✗ gray X)
- Used topics automatically move to dedicated "已使用选题库" section
- Status changes are handled via event delegation for performance

### Topic Categories and Structure
**Current Categories:**
- 人生解惑 (Life Guidance) - Teal color
- 情绪工具 (Emotional Tools) - Orange color  
- 禁忌揭秘 (Taboo Revelations) - Amber color
- 实用指南 (Practical Guides) - Purple color

**Topic Data Structure:**
```javascript
{
    id: number,
    pillar: string, // Category name
    title: string, // Topic title
    status: 'used' | 'unused', // Management state
    details: string // HTML content with strategy details
}
```

### Adding New Topics
1. Add topic object to `topicsData` array in `index.html`
2. Include all required fields (id, pillar, title, status, details)
3. Topics default to 'unused' status
4. Use existing pillar names for consistent color coding

## Key Implementation Details

- All UI text and content in Chinese (zh-CN)
- Tailwind CSS via CDN for styling
- Chart.js for data visualizations (avoid SVG/Mermaid)
- Password protection via serverless function
- Responsive design with mobile support
- No build process - pure static site with client-side rendering
- Interactive topic management with persistent state handling