# Typedoc Demo

> 针对 ts + vite + vue3 的项目，根据项目注释生成文档工具，使用的库 typedoc + vitepress, typedoc 适用于 ts，vitepress 适用 vite。

## 目录说明：

| **文件**             | **描述**                                          |
| -------------------- | ------------------------------------------------- |
| index.md             | vitepress 首页加载文件                            |
| src                  | 下面放两个 ts 文件供演示，符合一般工程项目结构    |
| .vitepress/config.ts | vitepress 配置文件                                |
| typedoc.js           | typedoc 脚本文件，用于生成适配 vitepress 的侧目录 |
| apidocConfig.json    | 自动生成的侧目录文件                              |

## 命令

![image.png](https://cdn.nlark.com/yuque/0/2023/png/646567/1676860503231-2930f6d2-7318-4f46-ba4d-e2de48956e19.png#averageHue=%23242120&clientId=ue3f80698-e898-4&from=paste&height=102&id=ud4bab390&name=image.png&originHeight=128&originWidth=620&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=11556&status=done&style=none&taskId=ubef4c070-3f88-4f5a-b404-90ffad34fab&title=&width=496)

pnpm docs:dev 本地运行
