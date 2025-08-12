# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chinese-language interactive dashboard website for the "三木有话说" (Sanmu YouTube) channel. It's an internal strategic planning tool with password protection that transforms static reports into an interactive decision-making interface.

## Architecture

### Core Files
- `index.html` - Main dashboard with interactive strategy visualization
- `article.html` - Template for displaying detailed content articles
- `pet-goodbye.js` - Example article data module for pet farewell guide

### Key Features
1. Password-protected access (password: "sanmu")
2. Interactive content pillars with filtering
3. Expandable topic cards with detailed strategies
4. Chart.js visualizations for data insights
5. Dynamic article system with JS-based content loading

## Development Commands

This is a static website with no build process. To run locally:
```bash
# Use any static server, for example:
python3 -m http.server 8000
# or
npx http-server
```

## Vercel Deployment

This site is optimized for Vercel deployment:

1. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Vercel will auto-detect the static site

2. **Environment Variables**:
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add `LOGIN_PASSWORD` with your desired password

3. **Automatic Deployment**:
   - Every push to `main` branch triggers automatic deployment
   - Preview URLs for pull requests

### Adding New Articles

Two methods available:

1. **Using Web Interface** (Recommended):
   - Click the "+ 添加新文章" button
   - Fill in article details (title, ID, type, format)
   - Generate configuration code
   - Create the article file manually in `/articles` directory
   - Add configuration to `contentLibraryData` in `index.html`

2. **Manual Method**:
   - Create article file: `/articles/[topic-id].{js|md}`
   - Add configuration to `contentLibraryData` array

## Content Structure

### Main Dashboard (`index.html`)
- Three content pillars: 人生解惑, 情绪工具, 禁忌揭秘
- 20 pre-defined video topics with expandable details
- Content library section for completed articles
- Growth flywheel visualization using HTML/CSS

### Article System
Articles support two formats:

1. **JavaScript format** (default):
   - Article data stored in `articles/[topic-id].js`
   - Each article exports a `window.articleData` object
   - Supports custom sections, charts, and complex layouts

2. **Markdown format**:
   - Article content stored in `articles/[topic-id].md`
   - Add `?format=md` to the URL (e.g., `article.html?topic=my-article&format=md`)
   - Automatically styled with consistent theme
   - Title extracted from first H1 heading

Example URLs:
- JS format: `article.html?topic=pet-goodbye`
- MD format: `article.html?topic=new-article&format=md`

## Important Notes

- All content is in Chinese (zh-CN)
- Uses Tailwind CSS via CDN for styling
- Chart.js for data visualizations (no SVG/Mermaid)
- Responsive design with mobile considerations
- Internal use only (robots.txt prevents indexing)