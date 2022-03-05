# React Practice

## 目录说明
```
|-- packages
    |-- create-react-app
    |-- react-30-days
    |-- react-yearOf2016
    |-- umi-dva-antd
    |-- umi-dev-antd-pro
```

### creact-react-app

实践 create-react-app 工具建立的项目

### react-30-days

估计原本是计划进行 30 天挑战，后来停了，为啥呢。后面可以做完。

### react-yearOf2016

2016年刚接触 react 时尝试创建的项目，有个纪念意义。后面可以尝试升级到最新的react，看看一个基本上空的项目如果升级能否顺利。

## lerna 使用说明

### 常用命令

- lerna create 创建子包 
`lerna create <name> [loc(指定目录)]`

- lerna add 安装依赖

`lerna add <package>[@version] [--dev] [--exact] [--peer]`

`lerna add fetch` 全部包安装 fetch

`lerna add fetch packages/utils/` 指定包安装 fetch


- lerna run 运行包命令

`lerna run test` 全部包运行 test

`lerna run --scope @xxx/utils test` 指定包运行 test


## 参考
- https://segmentfault.com/a/1190000019700577 packages 间的依赖讲解非常清晰