
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
