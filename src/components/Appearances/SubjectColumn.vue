<template>
  <div class="subjectColumn" :class="{ hidden: isHidden }">
    <SubjectSquare v-for="(square, index) of squares" 
      :key="index"
      :subject="subject"
      :style="{ gridRowStart: square.start+1, gridRowEnd: square.end+1 }"  />
  </div>
</template>

<script>
import SubjectSquare from '@/components/Appearances/SubjectSquare'

export default {
  props: [ "chapter", "subject", "isHidden" ],
  components: {
    SubjectSquare
  },
  computed: {
    squares() {
      if (!this.subject) return;

      let appearsIn = [];
      for (let event of this.chapter.events) {
        let subjectAppears = false;
        for (let string of this.subject.strings) {
          if (event.includes(string)) subjectAppears = true;
        }
        appearsIn.push(subjectAppears);
      }

      let squares = [];
      for (let i=0; i<appearsIn.length; i++) {
        if (appearsIn[i]) { // We've found the first occurrance
          let j;
          for (j=1; j<appearsIn.length; j++) {
            if (!appearsIn[i + j]) {
              j--;
              break;
            }
          } // j + i is the next index the subject doesn't appear at
          let square = {};
          square.start = i;
          square.end = i + j;
          squares.push(square);
          i += j;
        } 
      }

      return squares;
    },
  }
}
</script>

<style>
.subjectColumn {
  display: grid;
  grid-row-gap: 10px;

  width: 25%;
}
</style>