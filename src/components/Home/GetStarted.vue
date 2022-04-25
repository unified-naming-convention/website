<template>
	<div class="section getStarted">
		<div class="content">
			<sub>Make your impact</sub>
			<h2>Get started with the Unified Naming Convention.</h2>
			<p>
				A syndicate of script executor products will be able to push towards a universally accepted API where scripting is <em>simple</em> and
				<em>compatibile</em> with all products.
			</p>
			<button primary @click="openAPI">Access the API</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		openAPI() {
			window.open("https://github.com/unified-naming-convention/NamingStandard", "_blank");
		},
	},
};
</script>

<style lang="scss" scoped>
.section {
	background-color: $background-tertiary;

	width: 100%;
	box-sizing: border-box;

	.content {
		margin: 0 auto;
		width: max-content;
		max-width: 100%;
		sub {
			color: $secondary;
			font-weight: 500;
			margin: 0;
		}

		h2 {
			font-size: 2.5rem;

			font-weight: 600;
			line-height: 1.5;
		}

		p {
			margin: 2rem 0;
			font-size: 1.3rem;
			color: #48596b;
			line-height: 1.5;
			width: 80ch;
			max-width: 100%;
			em {
				font-weight: bold;
			}
		}
	}
}
</style>
