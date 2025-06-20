# 温哥华优惠攻略网站 - 安装指南

## 系统要求

- Node.js 18.0 或更高版本
- npm 8.0 或更高版本
- 现代浏览器（Chrome、Firefox、Safari、Edge）

## 快速安装

### 方法一：使用启动脚本（推荐）

```bash
# 进入项目目录
cd vancouver-deals

# 运行启动脚本
./start.sh
```

### 方法二：手动安装

```bash
# 进入项目目录
cd vancouver-deals

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 访问网站

安装完成后，打开浏览器访问：

- **本地地址**: http://localhost:3000
- **网络地址**: http://你的IP地址:3000

## 功能演示

### 主页功能

- 🏠 **首页展示** - 温哥华优惠信息概览
- 🔍 **搜索功能** - 搜索优惠信息、景点、餐厅
- 🏷️ **分类筛选** - 按类别筛选优惠信息
- ❤️ **收藏功能** - 收藏感兴趣的优惠

### 旅游攻略页面

- 📍 **景点攻略** - 温哥华必游景点介绍
- 🍽️ **美食指南** - 当地美食推荐
- 🛍️ **购物指南** - 购物地点和特色
- 🏃 **户外活动** - 户外运动和活动

## 项目结构

```
vancouver-deals/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 主页
│   └── travel/            # 旅游攻略页面
│       └── page.tsx
├── components/            # React组件
│   ├── Header.tsx         # 头部导航
│   ├── Hero.tsx           # 英雄区域
│   ├── DealGrid.tsx       # 优惠信息网格
│   ├── CategoryFilter.tsx # 分类筛选
│   └── Footer.tsx         # 页脚
├── types/                 # TypeScript类型定义
│   └── index.ts
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind CSS配置
├── tsconfig.json          # TypeScript配置
├── next.config.js         # Next.js配置
├── start.sh              # 启动脚本
└── README.md             # 项目说明
```

## 开发说明

### 技术栈

- **前端框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **图标**: Heroicons
- **类型检查**: TypeScript

### 自定义配置

- 温哥华主题色彩配置在 `tailwind.config.js` 中
- 组件样式使用 Tailwind CSS 类名
- 响应式设计支持移动端和桌面端

### 数据管理

- 当前使用模拟数据
- 可以轻松集成后端API
- 支持本地存储收藏功能

## 故障排除

### 常见问题

1. **端口被占用**

   ```bash
   # 查找占用端口的进程
   lsof -i :3000

   # 杀死进程
   kill -9 <进程ID>
   ```

2. **依赖安装失败**

   ```bash
   # 清除npm缓存
   npm cache clean --force

   # 重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript错误**
   ```bash
   # 重新生成类型定义
   npm run build
   ```

### 性能优化

1. **图片优化**

   - 使用Next.js Image组件
   - 支持WebP格式
   - 响应式图片

2. **代码分割**
   - 自动代码分割
   - 懒加载组件
   - 优化包大小

## 部署

### Vercel部署（推荐）

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

### 其他平台

- Netlify
- Railway
- Heroku
- 自托管服务器

## 联系支持

如果遇到问题，请联系：

- 邮箱: info@vancouver-deals.com
- 项目地址: https://github.com/your-username/vancouver-deals

---

**祝您使用愉快！** 🎉
