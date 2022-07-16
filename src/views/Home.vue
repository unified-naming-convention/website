<template>
	<div class="home">
		<Introducing />
		<Features />
		<Why />
		<GetStarted />
	</div>
</template>

<script>
import Introducing from "@/components/Home/Introducing.vue";
import Features from "@/components/Home/Features.vue";
import Why from "@/components/Home/Why.vue";
import GetStarted from "@/components/Home/GetStarted.vue";
export default {
	components: {
		Introducing,
		Features,
		Why,
		GetStarted,
	},
};
</script>
