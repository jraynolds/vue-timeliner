<template>
	<v-app-bar
		color="black"
		app
		height="auto"
	>
		<v-row id="headerRow">
			<v-col id="title" class="pa-0">
				<h1 class="pl-2" style="color: white;">{{ title }}</h1>
			</v-col>
			<div id="buttons">
					<ToggleButton :view="views[0]" 
						:bgColor="'white'" 
						:innerText="'Title\nCHAPTER\nThis.\nThis too.'" 
						:color="'black'" />
					<ToggleButton :view="views[1]"
						:hasArrow="true" >
						<div style="font-size: 0.7em; text-align: center; color: black; background-color: white; grid-row: 4 / 5; grid-column: 3 / 8" />
						<div style="font-size: 0.7em; text-align: center; color: black; background-color: white; grid-row: 6 / 7; grid-column: 2 / 4" />
						<div style="font-size: 0.7em; text-align: center; color: black; background-color: white; grid-row: 7 / 8; grid-column: 7 / 9" />
						<div style="font-size: 0.7em; text-align: center; color: black; background-color: white; grid-row: 8 / 9; grid-column: 2 / 4" />
					</ToggleButton>
					<ToggleButton :view="views[2]" style="grid-row-gap: 2px;" >
						<div style="background-color: white; grid-row: 1 / 3; grid-column: 1 / 10" />
						<div style="background-color: red; grid-row: 3 / 7; grid-column: 1 / 10" />
						<div style="background-color: green; grid-row: 7 / 10; grid-column: 1 / 10" />
					</ToggleButton>
					<!-- <ToggleButton :view="views[3]"/> -->
					<ToggleButton :view="views[4]"
						:hasArrow="true" >
						<div style="background-color: red; grid-row: 6 / 9; grid-column: 8 / 9" />
						<div style="background-color: red; grid-row: 2 / 3; grid-column: 8 / 9" />
						<div style="background-color: green; grid-row: 5 / 8; grid-column: 2 / 3" />
						<div style="background-color: green; grid-row: 2 / 3; grid-column: 2 / 3" />
					</ToggleButton>
			</div>
		</v-row>
	</v-app-bar>
</template>

<script>
import ToggleButton from "@/components/Head/ToggleButton.vue"

export default {
    props: { 
			views: {},
			title: { default: "First line is the title." }
		},
    components: {
        ToggleButton
    }
}
</script>

<style scoped>
#buttons {
	width: 300px;
	padding-right: 5px;
	
	display: flex;
	justify-content: flex-end;
}

header, #headerRow {
	height: auto !important;
}

#headerRow, #title {
	height: 100%;
}

#buttons {
	min-width: 300px;
	height: 50px;
	margin-left: auto;
}

#title {
	min-width: 400px;
	height: 50px;
	overflow: auto;
}
</style>