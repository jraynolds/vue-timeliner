<template>
  <div id="subjectAdder" class="mb-2">
    <v-form
      ref="form"
      @submit="submit"
      onSubmit="return false;"
    >
      <v-text-field class="pt-0 ma-2 mt-3 mb-n5"
        label="Enter name(s), comma-separated"
        v-model="charString" 
      />
      <v-btn class="pa-0 mb-0"
        block
        bottom
        ripple
        :disabled="charString == ''" 
        @click="submit" 
      >
        Add Character
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charString: ""
    }
  },
  methods: {
    submit() {
      this.$emit('addSubject', this.charString);
      this.charString = "";
    }
  }
}
</script>

<style scoped>
#subjectAdder {
  background-color: white;

  border-radius: 5px;
}
</style>