<template>
	<div class="home">
		<Introducing />
		<Features />
		<Supporters />
		<Why />
		<GetStarted />
	</div>
</template>

<script>
import Introducing from "@/components/Home/Introducing.vue";
import Features from "@/components/Home/Features.vue";
import Supporters from "@/components/Home/Supporters.vue";
import Why from "@/components/Home/Why.vue";
import GetStarted from "@/components/Home/GetStarted.vue";
export default {
	components: {
		Introducing,
		Features,
		Supporters,
		Why,
		GetStarted,
	},
};
</script>
