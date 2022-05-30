#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm build

# copy
cp -r docs/.vuepress/dist/. dist

cd dist

git init

git commit -am "feat: update"

git remote add origin https://gitee.com/tingke/docs.git

git push -u origin master

cd ..

git commit -am "feat: update"

git remote add origin https://gitee.com/tingke/doc-source.git

git push -u origin master

