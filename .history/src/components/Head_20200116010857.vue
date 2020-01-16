<template>
	<v-app-bar height="80">
		<v-row>
			<v-col>
				<h1>{{ computedTitle }}</h1>
			</v-col>
			<v-spacer/>
			<v-row>
				<v-col>
					<ToggleButton :view="views[0]"/>
				</v-col>
				<v-col>
					<ToggleButton :view="views[1]"/>
				</v-col>
				<v-col>
					<ToggleButton :view="views[2]"/>
				</v-col>
				<v-col>
					<ToggleButton :view="views[3]"/>
				</v-col>
				<v-col>
					<ToggleButton :view="views[4]"/>
				</v-col>
			</v-row>
		</v-row>
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