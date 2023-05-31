// nav
module.exports = [
    { text: "首页", link: "/" },
    {
        text: "前端",
        link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
            { text: "CSS", link: "/pages/c8f128/" },
            { text: "JavaScript", link: "/pages/23e8b8/" },
            { text: "ES6 笔记", link: "/pages/f344d070a1031ef7/" },
            { text: "Vue2", link: "/pages/471299/" },
            { text: "小程序", link: "/pages/df2429/" },
            { text: "Git学习笔记", link: "/pages/8292d8/" },
            { text: "收藏", link: "/pages/beb6c0bd8a66cea6/" },
        ],
    },
    {
        text: "开发规范", link: "/standard/"
    },
    // {
    //     text: "索引",
    //     link: "/archives/",
    //     items: [
    //         { text: "分类", link: "/categories/" },
    //         { text: "标签", link: "/tags/" },
    //         { text: "归档", link: "/archives/" },
    //     ],
    // },
    {
        text: "归档",
        link: "/archives/"
    },
    { text: "关于", link: "/about/" },
];
