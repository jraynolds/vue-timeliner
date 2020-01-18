<template>
  <form
    ref="form"
    @submit="changeStrings"
    onSubmit="return false;"
  >
    <v-text-field class="mt-n2" style="font-size: 1.3em;"
      v-model="titleStrings"
      hide-details=true
    />
  </form>
</template>

<script>
export default {
  props: [ "subject" ],
  data() {
    return {
      titleStrings: this.subject.strings.join(", ")
    }
  },
  methods: {
    changeStrings() {
      document.activeElement.blur();
      this.$emit('changeStrings', this.titleStrings);
    }
  }
}
</script>

<style scoped>
.v-application .primary--text {
  color: black !important;
  caret-color: black !important;
}
</style>