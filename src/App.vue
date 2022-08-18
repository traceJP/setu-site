<template>
  <v-app id="app">
    <v-main>
      <index></index>
    </v-main>
  </v-app>
</template>

<script>
import index from "/src/views/index"
export default {
  name: 'App',
  components: {
    index
  }
}
</script>
