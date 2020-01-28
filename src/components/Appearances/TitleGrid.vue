<template>
  <div class="titleGrid"
    :style="{ gridTemplateColumns: templateColumns }">
    <Bar :type="'chapter'" 
      :title="chapter.title" 
      :style="{ gridColumnStart: centerIndex, gridColumnEnd: centerIndex+1 }"/>
    <SubjectCircle v-for="(subject, index) in subjects"
      :key="index"
      :subject="subject"
      :isHidden="!isInChapter(subject)"
      :style="{ gridRow: '1/2', gridColumnStart: getColumn(index), gridColumnEnd: getColumn(index)+1 }" 
      />
    <SubjectCircle v-if="subjects.length%2 != 0"
      :isHidden="true"
      :style="{ gridRow: '1/2', gridColumn: '1/2'}" />
  </div>
</template>

<script>
import Bar from '@/components/Appearances/Bar'
import SubjectCircle from '@/components/Appearances/SubjectCircle'

export default {
  props: [ "chapter", "subjects" ],
  components: {
    Bar,
    SubjectCircle
  },
  computed: {
    centerIndex() {
      if (this.subjects.length == 1) return 2;
      return Math.ceil(this.subjects.length/2) + 1;
    },
    templateColumns() {
      let columns = "61px";
      for (let i=0; i<this.subjects.length; i++) {
				if (i%2==0) {
					columns += " 10px";
				} else {
					columns = "10px " + columns;
				}
      }
      if (this.subjects.length%2 != 0) columns = "10px " + columns;
      return columns;
    }
  },
  methods: {
    getColumn(index) {
      if (index%2 == 0) { // if even, this is going right of center
        return this.centerIndex + index/2 + 1;
      } // if odd, left of center
      return this.centerIndex - Math.floor(index/2) - 1
    },
    isInChapter(subject) {
      for (let event of this.chapter.events) {
        for (let string of subject.strings) {
          if (event.includes(string)) return true;
        }
      }
      return false;
    }
  }
}
</script>

<style>
.titleGrid {
  display: grid;

  grid-column-gap: 10px;
}
</style>