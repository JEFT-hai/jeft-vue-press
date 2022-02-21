<!--
 * @Author: your name
 * @Date: 2022-02-18 17:52:37
 * @LastEditTime: 2022-02-21 15:38:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \npm\jeft-vue-press\docs\.vuepress\theme\layouts\GLobalLayout.vue
-->
<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <!-- <header><h1>Header</h1></header>
    <component :is="layout" />
    <footer><h1>Footer</h1></footer> -->
    <div :class="['main', { showMobile: showMobile }]">
      <component :is="layout" />
      <div class="mobile" v-if="showMobile">
        <iframe
          ref="iframe"
          class="demo"
          :src="exampleUrl"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlPrefix: "http://jeft-vue-example.xuhaichao.cn/#/",
      // urlPrefix: "http://localhost:8081/#/",
    };
  },
  mounted() {
    console.log("path", this.$page.path);
    console.log("frontmatter", this.$frontmatter);
    const $iframe = this.$refs.iframe;
    if ($iframe) {
      $iframe.onload = () => {
        console.log("change", $iframe);
      };
    }
  },
  computed: {
    layout() {
      if (this.$page.path) {
        console.log("pathC", this.$page);
        if (this.$frontmatter.layout) {
          console.log("frontmatterC", this.$frontmatter);
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
    showMobile() {
      return this.$page.path.indexOf("components") != -1;
    },
    exampleUrl() {
      if (!this.showMobile) {
        return "";
      } else {
        const path = this.$page.path;
        const base = path.replace(".html", "");
        const baseName = base.split("/").pop();
        return this.urlPrefix + baseName;
      }
    },
  },
};
</script>
<style scoped>
  .main {
    /* width: 100vw;
                                                                                                                        display: flex;
                                                                                                                        flex-direction: row;
                                                                                                                        overflow: hidden; */
  }
  .theme-container {
    /* flex: 1; */

    background-color: #f7f7f7;
  }
  .mobile {
    position: fixed;
    z-index: 1;
    right: 10px;
    top: 100px;
    height: 540px;
    width: 360px;
    border-radius: 12px;
    background-color: white;
    overflow: hidden;
  }
  .main.showMobile .theme-container {
    padding-right: 380px;
  }

  .mobile .demo {
    height: 100%;
    width: 100%;
  }
</style>