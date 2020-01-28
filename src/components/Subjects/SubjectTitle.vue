<template>
  <form
    ref="form"
    @submit="changeStrings"
    onSubmit="return false;"
    style="width: auto;"
  >
    <v-text-field 
      class="mt-n2" 
      style="font-size: 1.3em;"
      v-model="titleText"
      hide-details=true
      color="unset"
    />
  </form>
</template>

<script>
export default {
  props: [ "strings" ],
  data() {
    return {
      titleText: this.strings.join(", ")
    }
  },
  computed: {
    titleStrings() {
      return this.strings.join(", ");
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

<style>
.v-application .primary--text {
  /* color: black !important; */
  caret-color: black !important;
}

.theme--light.v-input input, .theme--light.v-input {
  color: inherit;
}
</style>