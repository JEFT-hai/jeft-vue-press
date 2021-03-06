<!--
 * @Author: your name
 * @Date: 2022-02-21 11:56:14
 * @LastEditTime: 2022-03-06 23:26:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-press\docs\guide\LocationMap.md
-->
vue2-百度地图选点


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32d9ae91c46e4ba9915570a55e0d1392~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de4de5db461c4746ae720bfa0b12ef6c~tplv-k3u1fbpfcp-watermark.image?)


[插件地址-jeft-vue](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjeft-vue "https://www.npmjs.com/package/jeft-vue")

use

```
import bMap from 'jeft-vue/components/location-map'
```

### props

| 参数               | 类型            | 默认值               | 描述                       |
| ---------------- | ------------- | ----------------- | ------------------------ |
| value            | Boolean       | false             | 显示组件                     |
| location         | Function      | null              | 定位方法，如果为空则不显示头部定位模块      |
| canLocation            | boolean        | true         | 是否显示定位图标                    |
| city             | string        | '' | 定位城市 |
| title     | string        | ‘’ | 默认搜索地址 - 只有initCenter为默认值时有效 |
| mapWrapStype            | Object         | {}        | 地图外部样式                     |
| mapStyle | Object       | {}             | 百度地图样式                     |
| mapKey       | string |                | 必传-百度地图key         |
| addressType       | string |      ‘only‘          |  only/list-only为只选一个，list为显示列表         |
| mapId       | string |      ‘mapPanel’          | 地图ID，多个地图传入不同ID，以使ID唯一         |
| initCenter       | Object |      {lat: '',lng: ''}          | 初始化地图中心点坐标         |
| userDetail       | Object |      {street: '',contactName: '',phoneNumber: '' }          | 用户信息         |
| bMap       | boolean |      true         |   是否使用百度地图，false返回高德/腾讯坐标(但是都是使用的百度地图)         |

### 事件

| 事件               | 返回参数            | 
| ---------------- | ------------- | 
| address            | {address: "深圳市福田区福华一路138号",city: "深圳市",contactName: "",lat: 22.54279614522198,lng: 114.05778768593017,phoneNumber: "",postcode: null,province: "广东省",street: "",title: "深圳国际商会大厦-A座",type: 0,uid: "108ed554a3f5358229fc4892",_poiType: "房地产"}       |      


### css - 去掉百度地图logo

```
.BMap_cpyCtrl {
    display: none;
}
.anchorBL {
    display: none;
}
```

### demo1 - 百度地图数据

``` html
    <j-location-map
      v-model="show"
      addressType="list"
      mapKey=""
      mapId="listMap"
      :initCenter.sync="initCenter"
      @address="address = $event"
    ></j-location-map>
    <j-button :style="{ marginBottom: '15px' }" @click="show = true" round
        >百度地图数据</j-button
      >
```


### demo2 - 腾讯/高德地图数据

``` html
    <j-location-map
      v-model="show1"
      :bMap="false"
      addressType="list"
      :initCenter.sync="initCenter1"
      @address="address1 = $event"
      mapKey=""
      mapId="listMap1"
    ></j-location-map>
     <j-button :style="{ marginBottom: '15px' }" @click="show1 = true" round
        >腾讯/高德地图数据</j-button
      >
```

### demo3 - 百度地图数据-选点+客户信息

``` html
    <j-location-map
      v-model="show2"
      addressType="only"
      mapKey="Gq7gTjpOaZIhkGs0l4MEOA1BkFsoATaP"
      mapId="listMap"
      @address="address2 = $event"
      :initCenter.sync="initCenter"
      :userDetail.sync="userInfo"
    ></j-location-map>
    <j-button :style="{ marginBottom: '15px' }" @click="show2 = true" round
        >百度地图数据-选点+客户信息</j-button
      >
```

``` js
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      address: {},
      address1: {},
      address2: {},
      initCenter: {},
      initCenter1: {},
      userInfo: {},
      city: "深圳市",
    };
  },
  methods: {
    goBack() {
      history.back();
    },
    async location() {
      return "深圳市";
    },
  },
```
