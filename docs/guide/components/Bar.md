<!--
 * @Author: your name
 * @Date: 2022-02-21 11:56:52
 * @LastEditTime: 2022-03-06 23:30:04
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\components\Bar.md
-->
# vue2柱状图-移动端


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b80e08285fb3444f98a7610b7d3f1e3a~tplv-k3u1fbpfcp-watermark.image?)

[插件地址-jeft-vue](https://www.npmjs.com/package/jeft-vue)

## bar

```
import bar from 'jeft-vue/components/bar'
```

### props


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| height | Number | 150 | 外层高度 |
| barMaxHeight | Number | 100 | 柱形最大高度 |
| barWidth | Number | 50 | 柱形宽度 |
| barMaxValue | Number | 2000 | 柱形值上限 |

## bar-item

```
import barItem from 'jeft-vue/components/bar-item'
```

### props


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| value | Number | 0 | 柱形的值 |
| maxValue | Number | 2000 | 柱形值上限 |
| barMaxHeight | Number | 100 | 柱形最大高度 |
| barWidth | Number | 50 | 柱形宽度 |
| title | String | '' | 上部分标题 |
| footer | String | '' | 底部标题 |
| bg | String | '' | 柱状图颜色 |

### css

```
@bar-width: 100px;
@bar-height: 200px;
@bar-transition-time: 1s;
@bar-title-font-size: 18px; // 标题样式
@bar-title-font-color: @grayMain;
@bar-title-margin-top: 0;
@bar-title-margin-bottom: @padding-base;
@bar-footer-font-size: 15px; // footer样式
@bar-footer-font-color: @grayMain;
@bar-footer-margin-top: @padding-xs;
@bar-footer-margin-bottom: @padding-xs;
```

### demo

``` html
    <j-bar :barMaxValue="250">
        <j-bar-item
          v-for="item in barList"
          :value="item.value"
          :title="item.title"
          :footer="item.footer"
          :key="item.footer"
        ></j-bar-item>
    </j-bar>
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