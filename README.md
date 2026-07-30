# 贾木天个人网站

深色主题个人作品集网站，基于 React 18 + Vite 6 构建。

## 功能模块

- **Hero** — 全屏首页，编辑级大标题 + 打字机动画
- **About** — 个人介绍 + 证件照 + 数据统计 + 教育背景 + 技能标签
- **Projects** — 3 列作品墙，3D 卡片倾斜效果
- **Blog** — 研究笔记网格
- **Advantages** — 6 项核心能力 Bento 网格
- **Contact** — 联系方式收尾页

## 交互效果

- WebGL 流体鼠标轨迹（SplashCursor）
- 打字机动画（TextType / HoverType）
- 顶部滚动进度条
- 数字递增动画
- 3D 卡片倾斜
- 磁吸按钮
- 光晕视差滚动

## 在新电脑上使用

```bash
# 1. 克隆仓库
git clone https://github.com/Mutian330/personal-website.git

# 2. 进入项目目录
cd personal-website

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npx vite --host 0.0.0.0 --port 5173

# 5. 构建生产版本
npm run build
```

## 技术栈

- React 18
- Vite 6
- 纯 CSS（无 UI 框架）
- WebGL（流体光标效果）

## 内容修改

所有文本内容集中在 `src/data/content.js`，修改后重新构建部署即可。
