<template>
	<v-app-bar>
		<div id="head">
			<div id="title">
				<h1>{{ computedTitle }}</h1>
			</div>
			<div id="buttons">
				<ToggleButton :view="views[0]"/>
				<ToggleButton :view="views[1]"/>
				<ToggleButton :view="views[2]"/>
				<ToggleButton :view="views[3]"/>
				<ToggleButton :view="views[4]"/>
			</div>
		</div>
	</v-app-bar>
</template>

<script>
import ToggleButton from "@/components/ToggleButton.vue"

export default {
    props: [ "views", "userNotes" ],
    components: {
        ToggleButton
    },
    computed: {
        computedTitle() {
            if (this.userNotes) return this.userNotes.split("\n")[0];
            return "First line is the title."
        }
    }
}
</script>

<style lang="scss" scoped>
#head {
    height: 100px;
    display: flex;
}

#title {
    display: flex;
    flex-grow: 1;
    padding-left: 20px;

    align-items: center;
}

#buttons {
    
    display: flex;
    flex-direction: row;

    align-items: center;

    &>div {
        background-color: black;

        width: 50px;
        height: 50px;
        margin-right: 5px;
    }
}
</style>