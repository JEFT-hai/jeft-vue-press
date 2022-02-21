
![891639648449_.pic.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c119fddecfed4512b7df07e8615dc53f~tplv-k3u1fbpfcp-watermark.image?)

![901639648489_.pic.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b57c26f3e3ff48f2b2b203b35530135d~tplv-k3u1fbpfcp-watermark.image?)

![881639645062_.pic.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3fe5f21e0e39488e8eed95d49cb8ab5d~tplv-k3u1fbpfcp-watermark.image?)

[插件地址-jeft-vue](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue "https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue")

use

```
plugin :
immport { jUpProgress } from 'jeft-vue'
Vue.use(jUpProgress)

this.$process(10)
this.$process({
    status: 'success'
})
复制代码
```

### props

| 参数                     | 类型      | 默认值     | 描述                   |
| ---------------------- | ------- | ------- | -------------------- |
| process                   | number  | 0      | 进度百分比                 |
| status                | string  | 'hide'    | 'hide', 'pending', 'success', 'error',  pending可以直接使用number传值 |
| title                 | string  | 'pending' - 上传中，‘success'-上传成功， ‘error' - 上传失败  | 提示标题                 |
| text             | string  | '' | error情况才会被展示，错误提示                  |
| duration | number | 1500    | success情况使用，成功之后延迟关闭弹窗      |

tips: popup属性皆可传递      