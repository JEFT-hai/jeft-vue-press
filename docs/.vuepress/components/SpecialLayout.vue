<!--
 * @Author: your name
 * @Date: 2022-02-18 17:25:40
 * @LastEditTime: 2022-02-18 17:29:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \npm\jeft-vue-press\docs\.vuepress\components\specialLayout.vue
-->
<template>
  <div class="container">
    <header>
      <Content slot-key="header" />
    </header>
    <main>
      <Content />
    </main>
    <footer>
      <Content slot-key="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less'>
</style>