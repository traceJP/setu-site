<template>
  <div class="left-bottom-box">
    <!-- 下载 -->
    <about-button icon-name="mdi-download">
    
    </about-button>
    <!-- r18锁开关 -->
    <!-- TODO: icon name change -> lock-open-check-outline lock-remove-outline -->
    <about-button icon-name="mdi-lock-remove-outline">
  
    </about-button>
    <!-- 关于作者 -->
    <about-button icon-name="mdi-information-outline">
      // TODO: card-box
    </about-button>
    <!-- 链接github -->
    <about-button
        icon-name="mdi-github"
        :disabled-dialog="true"
        link-to="https://github.com/traceJP/setu-site"
    >
    </about-button>
  </div>
</template>

<script>
import AboutButton from "@/components/AboutButton/index"

export default {
  name: "index",
  components: {
    AboutButton
  },
  data: () => ({
  
  }),
  methods: {

  }
}
</script>

<style scoped>

.left-bottom-box {
  width: auto;
  height: 30vh;
  position: absolute;
  left: 1%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
}

</style>
