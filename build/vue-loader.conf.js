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
