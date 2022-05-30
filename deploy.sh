#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

cd docs/.vuepress/dist

git init

git add .

git commit -m "gitee commit"

git remote add origin https://gitee.com/tingke/docs.git

 git push -u origin master
