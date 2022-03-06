<!--
 * @Author: your name
 * @Date: 2022-02-21 12:02:30
 * @LastEditTime: 2022-03-06 23:59:44
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\components\Rule.md
-->

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3149838f526c453f9c3a1923b3ad13c7~tplv-k3u1fbpfcp-watermark.image?)

- 使用popup封装
- 可以使用js调用

[插件地址-jeft-vue](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue "https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue")

use

```
component :
import jRule from 'jeft-vue/components/rule'

plugin :
immport { Rule } from 'jeft-vue'
Vue.use(Rule)

this.$rule(options)
```

### props

| 参数        | 类型     | 默认值                                 | 描述                                    |
| --------- | ------ | ----------------------------------- | ------------------------------------- |
| name     | string | 规则                                 | 弹窗标题 |
| content      | string | 说明内容  | 可为富文本或者一段文字（已做xss处理）                                 |
| height | string | '75vh'                                | 弹窗高度                           |
| xssOptions     | Object  | xss过滤规则                                | {}                           |
| safe-area-inset-bottom | boolean  | true | popup属性 - 安全底部                                  |
| closeOnPopstate | boolean  | true | popup属性 - 页面返回关闭弹窗                                 |
| tips: popup属性皆可传递 |


### demo1 - plugin方式

``` html 
<j-button :style="{ marginBottom: '15px' }" @click="showRule" round
        >显示说明</j-button>
```

``` js
  methods: {
    showRule() {
      this.$rule({
        name: "说明",
        content: "1...,<br />2...",
        // popup参数
        round: true,
      });
    },
  },
```

### demo2 - component

``` html
<j-rule v-model="show" name="说明" height="75vh"> 这是详细内容... </j-rule>
<j-button :style="{ marginBottom: '15px' }" @click="show = true" round
        >显示说明-组件方式调用2</j-button
      >
```

``` js
data() {
    return {
      show: false,
    };
  },
```
