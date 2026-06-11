/* ============================================================
 * 通用企业官网 Starter Kit — 站点配置
 * ============================================================
 * 这是整个网站唯一需要修改的文件。
 * 换一个客户 / 换一个行业，只需要改这里的内容和颜色，
 * 不需要碰 index.html、style.css 或 script.js。
 *
 * 使用纯 <script> 全局变量（非 ES module），
 * 这样直接双击 index.html 用浏览器打开也能正常运行，
 * 不需要本地服务器或 npm run dev。
 * ============================================================ */

window.SITE_CONFIG = {

  /* ── 基本信息 ── */
  meta: {
    siteName: "示例企业",
    tagline: "一句话品牌定位 / 标语",
    logoUrl: "", // 留空 = 使用 siteName 作为文字 Logo；填图片路径则显示图片 Logo
    // 顶部作品展示横幅，交付给真实客户前可将 show 设为 false
    demoBanner: { show: true, text: "🚀 3-Day Delivery for Local Shops | Mobile-First | No Coding Needed" },
  },

  /* ── 主题配色 ──
   * active 指向 presets 中的某一个 key。
   * 改 primaryColor 即可让全站按钮、链接、Hover 效果同步变化；
   * 也可以整组替换 preset，一次性更换网站皮肤。
   * 新增预设：复制一份 warm 或 fresh，改个名字加进 presets 即可，
   * 配色切换按钮会自动识别全部预设。 */
  theme: {
    active: "warm", // "warm" | "fresh" | 自定义预设名

    presets: {
      warm: {
        primaryColor:     "#b6783c",
        primaryColorDark: "#8f5c2a",
        primaryColorRgb:  "182,120,60",
        dark:      "#2e2117",
        darkRgb:   "46,33,23",
        charcoal:  "#3d2e22",
        cream:     "#faf3ea",
        creamDark: "#f0e4d4",
        body:      "#4a3a2c",
        muted:     "#9c8a78",
        border:    "#ece0d2",
      },
      fresh: {
        primaryColor:     "#5fa37e",
        primaryColorDark: "#44805f",
        primaryColorRgb:  "95,163,126",
        dark:      "#1f2e26",
        darkRgb:   "31,46,38",
        charcoal:  "#2a3b32",
        cream:     "#f3f9f5",
        creamDark: "#e6f2ec",
        body:      "#3a4a42",
        muted:     "#8aa499",
        border:    "#dcebe3",
      },
    },
  },

  /* ── 顶部导航 ── */
  navLinks: [
    { label: "关于我们", href: "#about" },
    { label: "服务项目", href: "#services" },
    { label: "环境展示", href: "#gallery" },
    { label: "顾客评价", href: "#reviews" },
    { label: "到店信息", href: "#visit" },
  ],

  /* ── 联系方式（多处复用：顶部条 / 导航 / 到店信息 / 页脚 / 移动端悬浮条） ── */
  contact: {
    address: "{{详细地址}}",
    mapUrl:  "{{地图跳转链接}}",
    phone:   "{{电话号码}}",
    wechat:  "{{微信号}}",
    wechatQrImage: "assets/img/wechat-qr-placeholder.svg",
    wechatQrCaption: "扫码添加企业微信",
    hours: {
      weekday: "{{周一至周五营业时间}}",
      weekend: "{{周末营业时间}}",
      holiday: "{{节假日营业时间}}",
    },
  },

  /* ── 各页面内容 ── */
  pages: {

    home: {
      hero: {
        eyebrow: "欢迎光临",
        title: "示例企业",
        desc: "一句话品牌定位 / 标语，介绍你的核心业务和价值主张。",
        ctaPrimary:   { label: "查看服务项目", href: "#services" },
        ctaSecondary: { label: "立即导航" }, // href 自动取自 contact.mapUrl
        highlights: [
          { icon: "🌱", text: "核心卖点一" },
          { icon: "✨", text: "核心卖点二" },
          { icon: "⭐", text: "核心卖点三" },
        ],
      },
    },

    about: {
      eyebrow: "关于我们",
      title: "品牌故事标题",
      quote: "品牌理念 / 一句话宣言",
      author: "创始人 / 负责人姓名",
      paragraphs: [
        "品牌故事正文第一段：介绍公司的起源、使命和核心价值观，让客户了解你的故事。",
        "品牌故事正文第二段：介绍团队、专业能力或服务范围，建立信任感。",
      ],
      stats: [
        { target: 5,   suffix: "",  label: "用心经营 (年)" },
        { target: 20,  suffix: "+", label: "核心服务" },
        { target: 500, suffix: "+", label: "好评客户", format: "comma" },
        { target: 98,  suffix: "%", label: "回头客比例" },
      ],
    },

    services: {
      eyebrow: "精心呈现",
      title: "服务项目一览",
      intro: "服务简介文案占位：用一两句话概括你的服务亮点和适用人群。",
      categories: [
        { id: "cat1", label: "分类一" },
        { id: "cat2", label: "分类二" },
        { id: "cat3", label: "分类三" },
        { id: "cat4", label: "分类四" },
      ],
      items: [
        { cat: "cat1", icon: "💼", name: "服务项目 1", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat1", icon: "📋", name: "服务项目 2", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat2", icon: "🤝", name: "服务项目 3", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat2", icon: "📈", name: "服务项目 4", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat3", icon: "🎯", name: "服务项目 5", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat3", icon: "💡", name: "服务项目 6", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat4", icon: "🏆", name: "服务项目 7", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
        { cat: "cat4", icon: "📊", name: "服务项目 8", price: "XXX", desc: "服务描述占位文字，介绍这项服务包含的内容。", tags: ["标签A", "标签B"] },
      ],
      footerNote: "如需了解更多服务详情或获取报价，欢迎致电咨询。",
    },

    gallery: {
      eyebrow: "环境展示",
      title: "走进我们",
      items: [
        { icon: "🛋️", caption: "环境图片1说明" },
        { icon: "💼", caption: "环境图片2说明" },
        { icon: "🪴", caption: "环境图片3说明" },
        { icon: "🖥️", caption: "环境图片4说明" },
        { icon: "🪟", caption: "环境图片5说明" },
        { icon: "🎨", caption: "环境图片6说明" },
      ],
    },

    reviews: {
      eyebrow: "真实反馈",
      title: "客户怎么说",
      items: [
        { name: "客户 1", initial: "A", info: "客户1信息", source: "来源平台", text: "客户1评价内容占位文字，简短真实的使用感受。" },
        { name: "客户 2", initial: "B", info: "客户2信息", source: "来源平台", text: "客户2评价内容占位文字，简短真实的使用感受。" },
        { name: "客户 3", initial: "C", info: "客户3信息", source: "来源平台", text: "客户3评价内容占位文字，简短真实的使用感受。" },
      ],
      summary: { rating: 4.9, totalCount: 300, satisfaction: 95 },
    },

    visit: {
      eyebrow: "欢迎光临",
      title: "到店信息",
      intro: "到店信息简介文案占位：营业时间、地址、联系方式一目了然。",
    },
  },

  /* ── 页脚 ── */
  footer: {
    description: "页脚品牌简介占位文字，简要介绍公司定位与服务范围。",
    socials: [
      { icon: "📕", label: "小红书", href: "#" },
      { icon: "⭐", label: "大众点评", href: "#" },
      { icon: "🎵", label: "抖音", href: "#" },
    ],
    copyrightYear: 2026,
    // 作品署名：交付给真实客户前可将 show 设为 false
    credit: { show: true, name: "George Wang", email: "yanbingfanyi@gmail.com" },
  },

};
