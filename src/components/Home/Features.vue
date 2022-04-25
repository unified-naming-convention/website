<template>
	<div class="features section">
		<div class="feature">
			<h2>Branding Begone!</h2>
			<p>
				Write your scripts without the hassle of featuring multiple product names all over them. UNC is an entirely
				<strong>vanilla</strong> API, functions are named to what they <strong>do</strong>, not to what brand they "belong" to.
			</p>
		</div>
		<div class="feature">
			<h2>Easier Scripting</h2>
			<p>
				Scripters writing scripts is no longer a daunting task, products which feature full UNC support will automatically work with their
				script.
			</p>
		</div>
		<div class="feature">
			<h2>Dedicated documentation</h2>
			<p>
				Indepth documentation for all functions are available through the GitHub Link. Featuring viable function aliases, full descriptions
				and complete examples for how functions should work.
			</p>
		</div>
		<div class="feature">
			<h2>Open to additions and edits!</h2>
			<p>
				UNC is an evergrowing API - edits, additions and criticisms are open and taken by anyone via our GitHub. It aims to provide a unified
				API after all!
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.section {
	background: $background-secondary;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	gap: 2rem;

	border-bottom: 1px solid lighten($text-primary, 50%);

	.feature {
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
		h2 {
			border-left: 2px solid $secondary;
			padding-left: 20px;
			font-size: 1.5rem;
			font-weight: 500;
		}
		p {
			font-size: 1.25rem;
			padding-left: 20px;
			color: $text-secondary;
			line-height: 1.5;
		}
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
}
</style>
