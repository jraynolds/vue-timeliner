<template>
    <div id="notes">
        <textarea v-model="userNotes" />
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    data() {
        return {
            userNotes: 'First line is the title.\n\nCAPS ARE A CHAPTER\n\nThis is an event.\n\nThis is an event too.\n\nHover over a word with a capital first letter, like "This".\n\nNow click it. This will add it to the two columns on the right.\n\nClick it again to remove it--or you can manipulate the word on its corresponding information box.\n\nTry clicking on the header (e.g. "This" if you clicked on "This") and typing in a comma, then another word, like "Click." Then press enter.\n\nNow the Know!'
        }
    },
    watch: {
        userNotes: function() {
            this.emitNotes();
        }
    },
    methods: {
        emitNotes: _.throttle(function() {
            this.$emit("updateNotes", this.userNotes);
        }, 1000)
    },
    beforeMount() {
        this.emitNotes();
    }
}
</script>

<style lang="scss" scoped>
textarea {
    height: 100%;
    width: 100%;
    padding: 5px;

    resize: none;
}
</style>