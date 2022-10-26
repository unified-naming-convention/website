<template>
	<div class="section introducing">
		<img src="@/assets/UNC.png" alt="" />
		<div class="split">
			<div class="content">
				<h1>It’s time for a change, introducing UNC.</h1>
				<p>
					The <strong>Unified Naming Convention</strong>, otherwise simply known as UNC is a new, progressive and purposefully vanilla
					unified scripting API.
				</p>
				<p>
					UNC is made to combat complex scripting and embrace a fresh standard that provides a far smoother experience for scripters.
					Meaning <strong>one version of a script works across any fully UNC supported product</strong>!
				</p>
				<a href="https://github.com/unified-naming-convention/NamingStandard" target="_blank" rel="noopener noreferrer">
					<button primary>Access the API</button>
				</a>
			</div>
			<div class="image">
				<img src="@/assets/Example.png" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.section {
	background-color: $background-secondary;
	display: flex;
	flex-direction: column;

	> img {
		text-align: left;
		margin-left: 0;
		width: 120px;
	}

	.split {
		padding: 1rem;
		box-sizing: border-box;
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr;

		.content {
			width: 80%;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			p {
				color: $text-secondary;
				line-height: 1.5;
				font-size: 1.5rem;
			}

			> a {
				text-decoration: none;
			}
		}

		.image {
			display: grid;
			place-items: center;
			img {
				width: 90%;
				filter: blur(1.8px);
			}
		}

		@media screen and (max-width: 800px) {
			grid-template-columns: 1fr;
			gap: 3rem;
			.content {
				width: 100%;
			}
			.image {
				img {
					filter: blur (0.5px);
				}
			}
		}
	}
}
</style>
