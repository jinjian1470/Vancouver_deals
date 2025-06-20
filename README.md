# 温哥华生活旅游打折优惠信息攻略网站

一个现代化的温哥华优惠信息、旅游攻略和生活指南网站，帮助用户发现温哥华最棒的优惠和体验。

## 功能特色

- 🎯 **优惠信息展示** - 展示温哥华各类优惠信息，包括景点、美食、购物等
- 🏷️ **分类筛选** - 按类别筛选优惠信息，快速找到所需内容
- ❤️ **收藏功能** - 用户可以收藏感兴趣的优惠信息
- 🔍 **搜索功能** - 支持关键词搜索优惠信息
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代化UI** - 使用Tailwind CSS构建的美观界面

## 技术栈

- **前端框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **图标**: Heroicons
- **动画**: Framer Motion
- **类型检查**: TypeScript
- **通知**: React Hot Toast

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 项目结构

```
vancouver-deals/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # React组件
│   ├── Header.tsx         # 头部导航
│   ├── Hero.tsx           # 英雄区域
│   ├── DealGrid.tsx       # 优惠信息网格
│   ├── CategoryFilter.tsx # 分类筛选
│   └── Footer.tsx         # 页脚
├── types/                 # TypeScript类型定义
│   └── index.ts
├── public/                # 静态资源
└── package.json
```

## 主要功能模块

### 1. 优惠信息展示

- 展示温哥华各类优惠信息
- 包含图片、标题、描述、价格、位置等信息
- 支持折扣标签和有效期显示

### 2. 分类筛选

- 景点 (Attractions)
- 美食 (Food)
- 购物 (Shopping)
- 活动 (Activities)
- 文化 (Culture)
- 交通 (Transport)
- 住宿 (Hotel)

### 3. 收藏功能

- 用户可以收藏感兴趣的优惠信息
- 收藏状态持久化存储

### 4. 搜索功能

- 支持关键词搜索
- 实时搜索建议

## 数据模型

### Deal (优惠信息)

```typescript
interface Deal {
  id: number;
  title: string;
  description: string;
  category: string;
  discount: string;
  originalPrice: number;
  discountedPrice: number;
  location: string;
  image: string;
  validUntil: string;
  tags: string[];
}
```

## 自定义配置

### Tailwind CSS 配置

项目使用自定义的温哥华主题色彩：

```javascript
vancouver: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
}
```

## 部署

### Vercel 部署

推荐使用 Vercel 进行部署：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

项目也可以部署到其他支持 Node.js 的平台，如：

- Netlify
- Railway
- Heroku

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 邮箱: info@vancouver-deals.com
- 电话: +1 (604) 555-0123
- 地址: 温哥华市中心

---

**温哥华优惠攻略** - 让您在温哥华的生活更加精彩！ 🏔️
