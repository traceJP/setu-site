<template>
  <div>
    <images></images>
    <about></about>
  </div>
</template>

<script>
import images from "../components/Images/index"
import about from "../components/About/index"
export default {
  name: "web-view",
  components: {
    images,
    about
  },
}
</script>

<style scoped>

</style>
