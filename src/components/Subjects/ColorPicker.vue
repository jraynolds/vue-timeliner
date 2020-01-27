<template>
  <Verte 
    v-model="subject.color" 
    picker="square" 
    model="hsl" 
    style="border: 2px dashed black;" />
</template>

<script>
import Verte from 'verte'
import 'verte/dist/verte.css'

export default {
  components: {
    Verte
  },
  props: [ "subject" ]
}
</script>

<style>
circle {
  display: none;
}
</style>