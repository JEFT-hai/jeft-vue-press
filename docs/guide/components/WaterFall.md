# 不规则瀑布流-移动端


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2858289466940349719286f1cc0fb41~tplv-k3u1fbpfcp-watermark.image?)

### use

需配合j-pull-refresh,j-list使用

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00c452e1d9c740fe8e6edb9f9338dc0d~tplv-k3u1fbpfcp-watermark.image?)

```
import jWaterFall from 'jeft-vue/components/water-fall'
```


### props


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| value | Boolean | false | 是否刷新 - v-model |
| addMethod | push/add | push | push 尾部添加 / add 头部添加 |
| addItems | []Item | [] | 新添加的列表 |
| padding | Number | 5 | 左右的间距 |
| middlePadding | Number | 0 | 中间间距，为0时取padding值 |

#### item


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| title | String | '' | 文字内容 |
| cover | String | '' |  封面 |
| height | number | | 封面高度 |
| width | number | '' |  封面宽度 |