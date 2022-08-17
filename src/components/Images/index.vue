<template>
  <div class="auto-images-box">
    <v-img
        @click="changeImages"
        :src="responseData.urls"
        :lazy-src="responseData.urls"
        :aspect-ratio="responseData.width / responseData.height"
        max-width="80%"
        max-height="90%"
    ></v-img>
  </div>
</template>

<script>
import globalQuery from "@/api/apiEntry"

export default {
  name: "index",
  data: () => ({
    responseData: {
      pid: '',
      p: '',
      uid: '',
      title: '',
      author: '',
      r18: '',
      width: 1920,
      height: 1080,
      tags: '',
      ext: '',
      uploadDate: '',
      urls: '',
    }
  }),
  methods: {
    changeImages() {
      this.responseData = globalQuery("lolicon")
    },
  },
  created() {
    this.changeImages()
  }
}
</script>

<style scoped>

.auto-images-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
