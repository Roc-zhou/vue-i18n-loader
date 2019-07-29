# vue-i18n

> 单文件组件demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

单文件国际化 vue-i18n-loader 2018-04-13

1、安装国际化

    cnpm install --save vue-i18n / npm install --save vue-i18n

2、main.js使用vue-i18n

    // The Vue build version to load with the `import` command
    // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import VueI18n from 'vue-i18n'    // 引入 vue-i18n
    
    Vue.config.productionTip = false
    Vue.use(VueI18n)  // 使用 VueI18n
    
    // 这是国际化语言的存放位置
    const i18n = new VueI18n({
      locale: 'CN',  // 使用 this.$i18n.locale  = 'EN' 来切换语言
      messages: {
        "CN": require('./assets/CN'),
        "EN": require('./assets/EN')
      }
    })
   
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      i18n,  // 
      components: {
        App
      },
      template: '<App/>'
    })

3、对应的语言包文件

    /**
     * 全局的国际化文件
     * 使用方式 $t('lan.button[0]')
     */
    
    export const lan = {//中文
      button: ['取消', '确定', '提交', '放弃', '返回上一步', '上一页', '下一页', '发送验证码', '再次发送']
    }

4、在vue文件中使用<i18n><i18n>

1）安装@kazupon/vue-i18n-loader

    npm i --save-dev @kazupon/vue-i18n-loader / cnpm i --save-dev @kazupon/vue-i18n-loader

2)更改vue-loader.conf.js文件  (在build文件夹中)

    'use strict'
    const utils = require('./utils')
    const config = require('../config')
    const isProduction = process.env.NODE_ENV === 'production'
    const sourceMapEnabled = isProduction ?
      config.build.productionSourceMap :
      config.dev.cssSourceMap
    
    const loaders = utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction,
      // i18n-loader
      // you need to specify `i18n` loaders key with `vue-i18n-loader` (npm i --save-dev @kazupon/vue-i18n-loader)
      i18n: '@kazupon/vue-i18n-loader',
    })
    const i18n = '@kazupon/vue-i18n-loader' // 国际化
    loaders.i18n = i18n
    
    module.exports = {
      loaders,
    
      cssSourceMap: sourceMapEnabled,
      cacheBusting: config.dev.cacheBusting,
      transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
      }
    }

3)OK，在vue文件中开始使用

    <i18n>{
      "CN": {
        "title": ["欢迎你"]
      },
      "EN": {
        "title": ["Welcome"]
      },
      "JA": {
        "title": []
      },
      "KO": {
        "title": []
      }}
    </i18n>
    <template>
        <div class="hello">
            <h1>{{ $t('title[0]') }}</h1>
            <h2>Essential Links</h2>
    
        </div>
    </template>
    
    <script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        }
    };
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    </style>





