#!/bin/bash

echo "🚀 启动温哥华优惠攻略网站..."

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到Node.js，请先安装Node.js"
    exit 1
fi

# 检查npm是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: 未找到npm，请先安装npm"
    exit 1
fi

echo "📦 安装依赖..."
npm install

echo "🔧 启动开发服务器..."
npm run dev

echo "✅ 网站已启动！"
echo "🌐 访问地址: http://localhost:3000"
echo "📱 支持移动端和桌面端访问"
echo ""
echo "按 Ctrl+C 停止服务器" 