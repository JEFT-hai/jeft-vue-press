
### vue2移动端城市选择

###### 自定义城市
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06ec77617f394677ac69bf36338c9547~tplv-k3u1fbpfcp-watermark.image?)

###### 默认城市数据
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/857208b0d13d424981719feb99201fb2~tplv-k3u1fbpfcp-watermark.image?)


[插件地址-jeft-vue](https://www.npmjs.com/package/jeft-vue)

### 引入

```
import locationCity from 'jeft-vue/components/location-city'
```

### props


| 参数 | 类型 | 默认值 |描述 |
| --- | --- | -- | -- |
| value | Boolean | false | 显示组件 |
| location | Function | null |  定位方法，如果为空则不显示头部定位模块 |
| title | string | '城市选择' | 组件标题 |
| city | string | defaultSelectCity | 默认选中城市 - cityData.js中可更改 |
| locationCity | string | defaultSelectCity | 默认选中城市 - cityData.js中可更改 |
| color | Color | '#e9bd80' | 显示组件 |
| safeAreaInsetTop | Boolean | false | 顶部安全 | 
| paddingTop | string/number | 0 | 自定义顶部高度-一般是状态栏高度 |

### cityList


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fe3d219e4ca477f9e60e338be315664~tplv-k3u1fbpfcp-watermark.image?)

1. type为tag则为标签模式
2. type为空或cell，则单独占一行


