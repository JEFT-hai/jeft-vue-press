<!--
 * @Author: your name
 * @Date: 2022-02-21 11:58:14
 * @LastEditTime: 2022-03-06 23:33:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\Circle.md
-->
# vue2-移动端


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37c087c6961a4c37819003668bf26d1c~tplv-k3u1fbpfcp-watermark.image?)

### canvas

```
import jCanvas from '../components/canvas'
```

### props


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| height | Number | 300 | 高度 |
| width | Number | 300 | 宽度 |
| canvaId | String | canvaId | id |
| start | Number | -1/2 | 起始角度 |
| config | Object |  | 配置参数 |

### config


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| bgcolor | Color | #eee | 背景颜色 |
| lineWidth | Number | 24 | 环形宽度 |
| data | [Number] | [] | 每段环形的数值-最终转换为比例 |
| colorList | [Color] | ['#406bff', '#0cc', '#9a90ff'] | 每段环形的颜色 |
| lineCap | butt/round/square | butt | 交界处处理 |

### demo

``` html
    <circle-canvas
        :width="200"
        :height="200"
        :config="{
          data: [100, 150, 200],
          lineWidth: 36,
          colorList: ['#406bff', '#0cc', '#9a90ff'],
          name: [1, 2, 3],
        }"
      ></circle-canvas>

```

``` js
data() {
    return {
      barList: [
        {
          value: 100,
          title: "100",
          footer: "1",
        },
        {
          value: 200,
          title: "200",
          footer: "2",
        },
        {
          value: 150,
          title: "150",
          footer: "3",
        },
      ],
    };
  }
```
