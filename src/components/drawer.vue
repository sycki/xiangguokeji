<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
  >
    <v-list>
      <v-list-item href="/">
        <v-list-item-action>
          <v-icon>{{ mdiHome }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="/">
        <v-list-item-action>
          <v-icon>{{ mdiHome }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="/product.html">
        <v-list-item-action>
          <v-icon>{{ mdiShopify }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>产品</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="https://note.sycki.com/">
        <v-list-item-action>
          <v-icon>{{ mdiLibrary }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>博客</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="/contact.html">
        <v-list-item-action>
          <v-icon>{{ mdiAccountSupervisor }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>联系我们</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiHome, mdiShopify,  mdiAccountSupervisor, mdiLibrary } from '@mdi/js'
export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    mdiHome: mdiHome,
    mdiShopify: mdiShopify,
    mdiLibrary: mdiLibrary,
    mdiAccountSupervisor: mdiAccountSupervisor,
  })
}
</script>