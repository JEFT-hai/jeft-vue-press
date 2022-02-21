
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc3a20aeaa84326952a3a3c469b9d68~tplv-k3u1fbpfcp-watermark.image?)

[插件地址-jeft-vue](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue "https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue")

use

```
import RequestState from 'jeft-vue/components/request-state'
复制代码
```

### props

| 参数           | 类型       | 默认值                                           | 描述                            |
| ------------ | -------- | --------------------------------------------- | ----------------------------- |
| image        | string  | ''                                         | empty / loading / search / 自定义传入图片src                        |
| text     | string | empty - '没有数据' ，loading - '加载中...'                                        | ''          |
| bottomTop  | Number  | 10                                          | 底部占位大小（px）                      |
| color         | Color   | 背景颜色                                            | transparent                          |
| textColor        | Color   |  empty - '#d0d5e0' ，loading - '#444'                                             | 文字颜色  |
