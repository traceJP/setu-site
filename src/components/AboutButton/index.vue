<template>
  <div>
    <v-btn
        @click.stop="action"
        text
        icon
        plain
        color="#c3c3c3"
    >
      <v-icon>{{ iconName }}</v-icon>
    </v-btn>
    <v-dialog
        v-model="dialog"
        v-if="!disabledDialog"
        :width="width"
        :height="height"
    >
      <div>
        <slot></slot>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    iconName: String,
    width: String || Number,
    height: String || Number,
    disabledDialog: {
      type: Boolean,
      default: false,
    },
    linkTo: {
      type: String,
      default: null,
    }
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    action() {
      if (this.linkTo === null) {
        this.dialog = true
      } else {
        window.open(this.linkTo, "_blank")
      }
    },
  },
}
</script>

<style scoped>


</style>
