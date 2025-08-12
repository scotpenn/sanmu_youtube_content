# 三木有话说 - 内容管理系统

内部讨论和内容管理平台。

## 技术栈

- 前端：HTML + JavaScript + Tailwind CSS
- 后端：Vercel Serverless Functions
- 支持 Markdown 和 JavaScript 格式的文章
- Chart.js 数据可视化
- 响应式设计
- 环境变量支持

## 部署

本项目已配置为 Vercel 部署：

1. Fork 或 Clone 本仓库
2. 在 Vercel 导入项目
3. 自动部署完成

## 本地开发

```bash
# 使用任意静态服务器
python3 -m http.server 8000
# 或
npx serve
```

## 环境变量设置

在 Vercel 控制台设置以下环境变量：

```
LOGIN_PASSWORD=your-secure-password
```

## 添加新文章

### 方法一：使用网页界面
1. 登录后点击"+ 添加新文章"按钮
2. 填写文章信息（标题、ID、类型、格式）
3. 生成配置代码
4. 按照提示在 VS Code 中创建文章文件
5. 将配置代码添加到 `index.html`

### 方法二：完全手动添加
1. 在 `/articles` 目录创建文章文件（.md 或 .js）
2. 更新 `index.html` 中的 `contentLibraryData` 数组
3. 提交并推送到 GitHub，Vercel 会自动部署

## 安全说明

- 本站点仅供内部使用
- 包含密码保护功能
- 请勿公开分享访问链接
