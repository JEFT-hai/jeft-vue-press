<!--
 * @Author: your name
 * @Date: 2022-02-21 12:00:45
 * @LastEditTime: 2022-03-06 23:55:42
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\components\Steps.md
-->
# 步骤条

水平模式下增加 allTextCenter

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4f72bc77c8f477b9b2d22c111202646~tplv-k3u1fbpfcp-watermark.image?)

### props


|  |  | |
| --- | --- | -- |
| allTextCenter | false | 文字处于中心位置 |
| reverse | false | 文字是否处于下方 |


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91e52c548adc444ebee7b890f7914835~tplv-k3u1fbpfcp-watermark.image?)


### demo1

``` html
<j-steps :active="1">
        <j-step>买家下单</j-step>
        <j-step>商家接单</j-step>
        <j-step>提货</j-step>
        <j-step>交易完成</j-step>
      </j-steps>
```

### demo2

``` html
      <j-steps class="center-steps" :active="3" allTextCenter reverse>
        <j-step>买家下单</j-step>
        <j-step>商家接单</j-step>
        <j-step>提货</j-step>
        <j-step>交易完成</j-step>
      </j-steps>
```

### demo3

``` html
      <j-steps direction="vertical" :active="0">
        <j-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </j-step>
        <j-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </j-step>
        <j-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </j-step>
      </j-steps>
```
