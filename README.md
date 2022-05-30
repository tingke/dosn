# Docs

> 一个基于 VuePress 的 知识管理 & 博客 主题

```
.
├── .github   (可选，GitHub 相关文件)
│   ├── workflows
│   │   ├── baiduPush.yml (可选，百度定时自动推送)
│   │   └── ci.yml (可选，自动部署)
├── docs (必须，不要修改文件夹名称)
│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)
│   ├── <结构化目录>
│   └── index.md (首页)
├── vdoing (可选，本地的vdoing主题)
├── utils  (可选，vdoing主题使用的node工具)
│   ├── modules
│   ├── config.yml (可选，批量操作front matter配置)
│   ├── editFrontmatter.js (可选，批量操作front matter工具)
├── baiduPush.sh (可选，百度推送命令脚本)
├── deploy.sh (可选，部署命令脚本)
│
└── package.json
```

*   `docs` 文件夹名称请不要修改

*   `docs/.vuepress` 用于存放全局的配置、样式、静态资源等，同官方，查看 [详情 (opens new window)](https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

*   `docs/@pages` 此文件夹是自动生成的，存放分类页、标签页、归档页对应的`.md`文件，一般不需要改动

*   `docs/_posts` 专门用于存放碎片化博客文章，里面的`.md`文件不需要遵循命名约定，不会生成结构化侧边栏和目录页。

*   `docs/<结构化目录>` 请查看[《构建结构化站点的核心配置和约定》](https://doc.xugaoyi.com/pages/33d574/)。

*   `docs/index.md` 首页

*   `theme-vdoing` 存放在本地的 vdoing 主题文件，如果你想深度的修改主题，首先要在`docs/.vuepress/config.js`中配置使用的主题指向这个文件。

    > ```
    > // config.js
    >  module.exports = {
    >    // theme: 'vdoing', // npm主题依赖包
    >     theme: require.resolve('../../theme-vdoing'), // 使用本地主题包
    >  }
    > ```


**注意**：主题的后续维护升级只对 npm 主题包负责，就是说你使用本地主题就等于放弃了后续的升级服务。因此，能在`docs/.vuepress/`内配置和修改的，就尽量不要改动主题内部代码。

提示

为了方便您更快的学习和使用本主题，我在代码当中添加了比较多的注释说明。
