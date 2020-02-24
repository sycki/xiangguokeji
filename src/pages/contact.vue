<template>
  <v-app id="inspire">
    <framework>
      <template v-slot:content>
        <sub-content></sub-content>
      </template>
    </framework>
  </v-app>
</template>

<script>
  import Framework from "../components/framework.vue"
  import SubContent from '../components/contact.vue'
  export default {
    components: {
      Framework,
      SubContent
    }
  }
</script>