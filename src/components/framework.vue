<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
      clipped-left
      clipped-right
      style="z-index: 110"
    >
      <v-avatar tile size="32px">
        <v-img src="../assets/toolbar-title.svg"></v-img>
      </v-avatar>
      
      <v-toolbar-title style="margin-left: 20px;">橡果科技工作室</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- 默认隐藏，当屏幕宽度达到md及以上时显示 -->
      <div class="d-none d-md-flex">
        <v-btn text style="font-size: large;" href="/">
          首页
        </v-btn>
        <!-- 在按钮上使用路由时，href会重新加载页面，@click不会重新加载但需要写js函数，to方式会使按钮高亮 -->
        <v-btn text style="font-size: large;" href="/product.html">
          产品
        </v-btn>
        <v-btn text style="font-size: large;" href="https://note.sycki.com/">
          博客
        </v-btn>
        <v-btn text style="font-size: large;" href="/contact.html">
          联系我们
        </v-btn>
      </div>

      <v-btn class="d-flex d-md-none" icon @click.stop="drawer=false;drawer=true"><v-icon>{{ appBarMenu }}</v-icon></v-btn>
    </v-app-bar>

    <!-- 默认显示，当屏幕宽度达到md及以上时隐藏 -->
    <home-drawer :drawer="drawer" class="d-flex d-md-none"></home-drawer>

    <v-content>
      <slot name="content"></slot>
    </v-content>
    
    <v-footer
      color="indigo"
      app
      absolute
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mdiMenu } from '@mdi/js'
  import homeDrawer from "../components/drawer.vue";
  export default {
    name: "Framework",
    components: {
      "home-drawer": homeDrawer,
    },
    props: {
      source: String,
    },
    data: () => ({
      appBarMenu: mdiMenu,
      drawer: false,
    }),
  }
</script>