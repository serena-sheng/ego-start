# Chrome Web Store Listing — 启动台 · 搜索中心

> Last Updated: 2026-10-12

## Store Listing

**Extension Name**
启动台 · 搜索中心

**Short Description**
极简 Chrome 新标签页：必应 / Google / 小红书 / 哔哩哔哩 / SeedHub 六个搜索入口直达，另附四个 AI 控制台入口。

**Detailed Description**
把 Chrome 的新标签页换成一个干净、能直接用键盘操作的启动台。

打开新标签页就能看到六个搜索入口：必应国内版、必应国际版、Google、小红书、哔哩哔哩、SeedHub。在任一框里输入、回车，直接在对应站点出结果，不用先开首页再搜索。页面会记住你上次用的那个入口，下次打开自动聚焦到它。

往下是四个 AI 控制台入口：DeepSeek 开放平台、Kimi Code、GLM Coding Plan、豆包语音大模型，新标签页打开。

用法：按 `/` 聚焦当前搜索框，按 Esc 退出输入。每个搜索框各自独立，回车后直达对应站点。

隐私：不联网、不上传、不收集任何数据。所有内容都在本地运行，适合离线环境使用。

反馈与支持见下方链接。

**Category**
Search Tools

**Single Purpose**
把新标签页替换成一个多站搜索与 AI 控制台入口的启动台。

**Primary Language**
中文（简体）

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon [REQUIRED] | 128×128 PNG | ✅ Ready | `icons/icon-128.png` |
| Screenshot 1 [REQUIRED] | 1280×800 | ✅ Ready（亮色） | `store/screenshot-01-light.png` |
| Screenshot 2 [RECOMMENDED] | 1280×800 | ✅ Ready（暗色） | `store/screenshot-02-dark.png` |
| Small Promo Tile [RECOMMENDED] | 440×280 | ✅ Ready | `store/promo-440x280.png` |
| Marquee Promo Tile | 1400×560 | ⬜ Not created | |

### Screenshot Notes
- 截图 1：新标签页整体（亮色），能看到六个搜索框与四个控制台入口。
- 建议再补一张暗色模式截图，与亮色对照。
- 尺寸 1280×800，直角满幅。

## Permissions Justification

| Permission | Type | Justification |
|------------|------|---------------|
| （无） | — | 扩展不声明任何 `permissions` / `host_permissions`，因此无需理由。 |

## Privacy & Data Use

### Data Collection

**Does the extension collect user data?** No

扩展不发起任何网络请求，不收集、不上传任何数据。「上次使用的入口」存在本机（`localStorage`），不离开设备。

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

## Privacy Policy

**Privacy Policy URL**
<!-- TODO：托管到 GitHub Pages 或任一公开 URL。下方为可直接使用的文本。 -->

> 本扩展不收集、不存储、不传输任何个人信息。扩展仅将「上次使用的搜索入口」保存在本机浏览器存储中，该数据不会离开你的设备。扩展不访问、不修改你的浏览历史，也不与任何第三方共享数据。

## Distribution

**Visibility**: Public
**Regions**: All regions

## Developer Info

**Publisher Name**
serena-sheng

**Contact Email**
serenaamphistritesheng@outlook.com

**Support URL / Email**
https://github.com/serena-sheng/ego-start/issues

**Homepage URL**
https://github.com/serena-sheng/ego-start

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.1 | 2026-10-12 | 补 16/32/48/128 图标；修正描述中的入口计数；加 440×280 促销图与 2 张 1280×800 截图 | Draft |
| 1.0.0 | — | 初版 | — |

## Review Notes

### Known Issues / Limitations
- 未声明任何权限，审核应无权限相关风险。
- 使用 `chrome_url_overrides.newtab` 覆盖新标签页，属单一用途，符合最小功能政策。

### Rejection History
| Date | Reason | Fix Applied | Resubmitted |
|------|--------|-------------|-------------|
| — | — | — | — |
