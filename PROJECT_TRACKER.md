# 项目追踪：Local Shop Template

## 里程碑
- ✅ 2026-06-09：完成基础模板（Hero / 菜单 / 到店信息）
- ✅ 2026-06-09：补齐移动端底部悬浮条（电话/导航/微信）
- ✅ 2026-06-09：修复微信图标交互（大/小图标均弹窗）
- ✅ 2026-06-09：菜单结构改为左图右文 + 方形占位图
- ✅ 2026-06-10：推送至 GitHub (yanbingfanyi-gif/local-shop-template) 并部署到 Vercel
  - 在线预览：https://local-shop-template.vercel.app
- ✅ 2026-06-11：重构为「零依赖 / 纯静态 / 可配置」企业官网 Starter Kit
  - 目录整理为 assets/css、assets/js、assets/img；新增 assets/js/config.js 作为唯一配置入口（站点信息/主题预设/导航/联系方式/各页面文案）
  - style.css 改用统一 CSS 变量（--primary-color 等），两套配色预设迁移到 config.js，由 script.js 在运行时动态写入，配色切换按钮自动识别全部预设
  - index.html 移除所有 {{占位符}} 与硬编码文案/品牌图标，改为空容器 + script.js 渲染；服务项目改用行业中性图标与措辞（原"菜单"→"服务项目"）
  - 仍为纯文件夹结构，双击 index.html 即可运行（无需 npm/构建步骤），localStorage 访问加 try/catch 兼容 file:// 场景

## 已交付 / 已复用记录
| 日期 | 客户/项目名 | 版本 | 备注 |
|------|-------------|------|------|
| 2026-06-10 | 半山咖啡 Nanshan Road · Banshan Coffee | warm 主题 | 作品集示例站；文案除核心信息（地址/电话/微信）外为简单中文占位；已部署 https://banshan-coffee.vercel.app |

## 待优化清单
- [ ] 增加「营业状态」开关（营业中 / 休息中）
- [ ] 增加「活动横幅」组件（可关闭）
- [ ] 增加「相册/环境展示」页

---

以后每接一单，就在这里加一行，一年下来就是我们的作品年表。
