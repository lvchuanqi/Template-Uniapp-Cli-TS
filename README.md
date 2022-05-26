## uni-app cli 工程化模板(Vue3 + Ts + Vite + Pinia)

### 一、前言

本工程基于 uniapp cli 的官方 npx 模板创建生成而来，适用于创建基于 vue3 架构系列的 uni-app 应用,包含(iOS,Android,微信小程序,H5)客户端

> 模板中未对 **manifest.json** 这一 uni-app 特有文件进行配置，以便于在其他项目中使用本工程化模板

### 二、技术栈

#### 框架库

- Vue 3 [新官网](https://staging-cn.vuejs.org/)
- TypeScript [官网](https://www.tslang.cn/)
- uni-app cli [文档](https://uniapp.dcloud.io/worktile/CLI.html#uni-cli)
- pnpm [官网](https://www.pnpm.cn/)
- Pinia [官网](https://pinia.web3doc.top/)
- Vite [官网](https://cn.vitejs.dev/) (注：Vite 是 uni-app cli 被动引进的只能被迫使用)
- Axios [官网](https://www.axios-http.cn/)
- Sass [官网](https://www.sass.hk/)
- Less [官网](https://less.bootcss.com/)

- Eslint(尚未集成) [官网](http://eslint.cn/)

#### UI 库

- vk-uview-ui [官网](https://vkuviewdoc.fsq.pub/) (注：vk 作者基于 uView 1.8.3 进行的 Fork,旨在升级提供可被 Vue3 所支持的 ui 库)
- ThorUI(尚未集成) [官网](https://thorui.cn/doc/) (注：供 uni-app 以及 vue3 用户使用的 ui 库)

### 三、构建以及安装

1. uni-cli 模板拉取

```
//JavaScript 方式
npx degit dcloudio/uni-preset-vue#vite my-vue3-project

//TypeScript 方式
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

2. 依赖安装

```
pnpm i
//OR
pnpm install
```

3. 如果想升级 SDK 可以使用官方的 uvm

```
npx @dcloudio/uvm alpha //升级到最新的Alpha版 这里推荐使用选择pnpm方式
```

4. pnpm 的使用

```
pnpm up //升级所有依赖
pnpm add <pakage> //添加依赖 使用方式类似 yarn

pnpm config set auto-install-peers true //设置 peers 的自动安装
pnpm config set strict-peer-dependencies false //设置 peers 严格对等依赖模式开关
```

### 四、目录结构

├─src<br>
| ├─api ················································· Api集中管理器<br>
| | └─service ······································· Api模块化目录<br>
| ├─components ······························ 自定义组件<br>
| ├─hooks ··········································· 全局 hook 管理<br>
| ├─pages ··········································· 业务页面<br>
| ├─plugins ········································ 旨在使用 Install 方式开发的插件<br>
| ├─static ············································ 静态文件图片/css 等<br>
| ├─store ············································· 装填管理<br>
| | ├─index.ts<br>
| | └─modules<br>
| |     └─commonStore.ts ···················· common状态管理<br>
| ├─types ············································ 全局类型声明<br>
| | └─axios.d.ts ··································· axios类型案例<br>
| ├─utils ··············································· 工具类<br>
| ├─App.vue<br>
| ├─env.d.ts<br>
| ├─main.ts<br>
| ├─manifest.json ···························· 原uni-app manifest.json<br>
| ├─pages.json ································· 原uni-app页面配置路由等<br>
| └─uni.scss<br>
├─.env ················································· 环境变量<br>
├─.env.development ····················· 开发环境变量<br>
├─.env.production ·························· 生产环境变量<br>
├─.gitignore ······································ Git 忽略文件 svn 请参考文件内容目录手动 ignore<br>
├─index.html ···································· 页面模板<br>
├─LICENSE<br>
├─package.json ······························· 依赖包声明文件<br>
├─pnpm-lock.yaml ························· pnpm yaml<br>
├─Readme.md <br>
├─tsconfig.json ································ ts 配置文件<br>
└─vite.config.ts ································ vite 配置文件<br>

### 五、开发以及使用

由于 cli 工程 Alpha 内的更新速度快于正式版,鉴于减少 Bug 以及未知问题以及兼容,工程模板中 Dcloud SDK 建议跟随官网进行升级，同时搭配 HBuilder X Alpha 并且确保其内置的编译器进行同步与官网进行更新,以免出现了 app 客户端上出现的[uni-app 运行环境版本和编译器版本不一致的问题](https://ask.dcloud.net.cn/article/35627)
![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20190412/625475b29032effbd28316ddec895b06.png)

1. 下载 Hbuild X Alpha 版本 (推荐使用 vscode + volar)
2. 项目启动

```
pnpm dev:h5
pnpm dev:app

或者直接在Hbuild X中使用原来方式启动
```

>@作者:Legend Tree
>
>@时间:2022/05/26