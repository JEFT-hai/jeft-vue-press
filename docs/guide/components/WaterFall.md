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

### demo

``` html
    <j-pull-refresh
      v-model="isJWLoading"
      @refresh="onJWRefresh"
      class="list-wrapper main"
      loading-text="loading..."
      success-text="刷新成功了"
    >
      <j-list v-model="jWLoading" :finished="jWFinished" @load="onJWLoad">
        <j-water-fall :addItems="addItems" v-model="refreshed"></j-water-fall>
      </j-list>
    </j-pull-refresh>
```

``` js
data() {
    return {
      isJWLoading: false,
      jWLoading: false,
      jWFinished: false,
      refreshed: false,
      addItems: [
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 682,
          id: 1,
        },
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 782,
          id: 2,
        },
      ],
      addTItems: [
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 682,
          id: 11,
        },
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 782,
          id: 12,
        },
      ],
    };
  },
  methods: {
    onJWLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.isJWLoading = false;

        // this.addItems = this.addTItems

        // 加载状态结束
        this.jWLoading = false;

        // 数据全部加载完成
        this.jWFinished = true;
      }, 1000);
    },
    onJWRefresh() {
      setTimeout(() => {
        this.refreshed = true;
        this.addItems = JSON.parse(JSON.stringify(this.addTItems));
        this.isJWLoading = false;
      }, 1000);
    },
  },
```

