# 个人网站 Portfolio

基于 Next.js 15 + TypeScript + Tailwind CSS + Vanta.js 构建的现代化单页滚动个人网站。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📁 项目结构

```
resume-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 单页滚动主页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # 可复用组件
│   ├── Navigation.tsx     # 锚点导航组件
│   ├── VantaBackground.tsx # Vanta.js动画背景
│   ├── ScrollArrow.tsx    # 滚动箭头组件
│   ├── sections/          # 页面区域组件
│   │   ├── HomeSection.tsx    # Home区域
│   │   ├── ProjectSection.tsx # Project区域
│   │   └── AboutSection.tsx   # About区域
│   └── index.ts          # 组件导出
├── hooks/                # 自定义Hooks
│   └── useScrollWheel.ts # 滚轮监听Hook
├── types/                # TypeScript类型定义
│   └── vanta.d.ts        # Vanta.js类型
└── ...
```

## 🎯 页面结构

**单页滚动设计** - 三个全屏区域：

- **Home** - 主页区域，集成Vanta.js HALO动画背景
- **Project** - 项目展示区域
- **About** - 个人介绍区域

## ✨ 滚动功能

### 🖱️ 多种滚动方式

1. **鼠标滚轮** - 智能检测滚动方向，自动跳转到下一个/上一个区域
2. **导航栏点击** - 点击导航菜单直接跳转到指定区域
3. **滚动箭头** - 每个区域底部的上下箭头按钮

### 🎭 滚动特性

- ⚡ **平滑滚动** - CSS scroll-behavior 和 JavaScript scrollIntoView
- 🎯 **智能跳转** - 滚轮监听自动跳转到完整区域
- 📍 **活跃指示** - 导航栏实时高亮当前区域
- 🚫 **防抖处理** - 防止滚动过快导致的跳跃
- 📱 **响应式** - 完美适配桌面端和移动端

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Vanta.js + Three.js
- **滚动**: 自定义滚轮监听 + CSS smooth scroll
- **开发工具**: ESLint

## 🎨 设计特性

- 🌟 **Vanta.js 3D动画背景** - Home区域炫酷动态效果
- 🎭 **毛玻璃导航栏** - 半透明背景模糊效果
- 🔘 **精美滚动箭头** - 半透明圆形按钮设计
- 📱 **完全响应式** - 适配各种屏幕尺寸
- 🎨 **现代化设计** - 简洁优雅的视觉风格

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 🎮 使用方法

1. **滚动体验**: 使用鼠标滚轮在三个区域间平滑切换
2. **快速导航**: 点击顶部导航栏直接跳转
3. **精确控制**: 使用页面底部箭头按钮逐个区域导航
