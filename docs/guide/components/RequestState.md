<!--
 * @Author: your name
 * @Date: 2022-02-21 12:02:11
 * @LastEditTime: 2022-03-06 23:55:28
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\components\RequestState.md
-->

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

### demo

``` html
    <j-request-state :image="state">
        <template v-slot:image v-if="state == 'loading'">
          <j-loading size="100%"></j-loading>
        </template>
        <template v-slot:text v-if="state == 'loading'">
          <span></span>
        </template>
      </j-request-state>
    <j-request-state image="loading"></j-request-state>
```

``` js
  data() {
    return {
      state: "loading",
    };
  },
  mounted() {
    setTimeout(() => {
      this.state = "";
    }, 1800);
  },
```
