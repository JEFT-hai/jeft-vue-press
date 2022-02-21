<!--
 * @Author: your name
 * @Date: 2022-02-18 14:40:17
 * @LastEditTime: 2022-02-21 14:54:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\README.md
-->


此组件库基于 `vant`源码借鉴开发。用于封装平时用到的组件。

:tada: 支持按需/手动/一次性引入。

:100: [引入方式类似Vant](https://youzan.github.io/vant/#/zh-CN/quickstart)

### 注意

使用less - 因为vue2使用webpack4,直接使用最新less-loader会报错
```
npm install less less-loader@6.0.0
```

## 按需引入

按需引入使用 babel-plugin-component， babel如下:

install
```js
npm install babel-plugin-component -D
```

babel.config.js

```js
module.exports = {
presets: [
'@vue/app'
],
plugins: [
    ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
        }, 'vant'],
    [
    "component",
        {
        // 组件库的名字，需要和 package.json 里的 name 相同
        "libraryName": "jeft-vue",
        // 存放组件的文件夹，如果不想配置此项，默认文件夹的名字为 lib
        "libDir": "components",
        "style": true,
        "ext":".less"
        }
    ]
    ]
}
```

## 手动引入

```js
import bMap from 'jeft-vue/components/location-map'
```

## 一次性引入

```js
import jeftVue from '../components'

Vue.use(jeftVue)
```
