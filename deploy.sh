#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm build

# copy
cp -rf docs/.vuepress/dist/** dist

cd dist

git add .

git commit -m "feat: update"

git push -u origin master

cd ..

git add .

git commit -m "feat: update"

git push -u origin master

