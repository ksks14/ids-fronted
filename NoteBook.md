# 学习内容

## 项目初始化

```bash
yarn create vite

# 输入项目名
# 选择基本信息

cd ./${appname}

yarn install  #  安装依赖

yarn dev  #  运行项目
```

1. 配置项目自动打开
2. 配置eslint
   1. npm init @eslint/config 或者 npx eslint --init 
      1. 选择配置项
3. 引入ElementPlus
   1. 安装 yarn add element-plus
   2. 在main.ts中引入
4. 引入windiCss
   1. 安装 yarn add -D vue-cli-plugin-windicss
   2. yarn add vite-plugin-windicss

## 路由配置

利用Vue-router

```bash
# 添加Vue-Router
yarn add vue-router
```

1. login
   1. -> home
2. 404

## 组件之间通信

1. props
2. ref

## 事件

### 登录

1. 点击登录，进入登录主页面
   1. 点击按钮进入登录路由 完成
   2. 点击无账号，进入注册弹窗
      1. 注册输入用户名
      2. 输入密码
      3. 进行校验
      4. 完成注册
   3. 登录表单
      1. 用户名
      2. 密码
      3. 校验