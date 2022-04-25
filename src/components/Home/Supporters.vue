<template>
	<div class="section">
		<div class="split">
			<div class="content">
				<sub>Early supported products</sub>
				<h2>Why not join in with the current supporters?<sup>*</sup></h2>
				<p>
					A constantly growing group of UNC adopters means a cleaner and easier scripting experience for everyone! Plus, you get a
					<router-link to="/badge">badge</router-link> to show for it, too.
				</p>
			</div>
			<div class="badge">
				<img src="@/assets/UNC-Supported-Full.png" alt="UNC Supported Badge" />
			</div>
		</div>
		<carousel class="supporters" :items-to-show="isMobile ? 1 : 6" :wrapAround="true" snapAlign="start">
			<slide v-for="(supporter, index) in supporters" :key="index">
				<a :href="supporter.url" target="_blank">
					<img :src="supporter.img" :alt="supporter.name" />
				</a>
			</slide>
			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>

		<p class="sub">...And many more products of which are joining in every week!</p>
	</div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	computed: {
		isMobile() {
			return window.innerWidth < 800;
		},
	},
	data() {
		return {
			supporters: [
				{
					name: "Script-Ware",
					url: "https://script-ware.com",
					image: "Script-Ware.png",
				},
				{
					name: "Fluxus",
					url: "https://fluxteam.xyz",
					image: "Fluxus.png",
				},
				{
					name: "KRNL",
					url: "https://krnl.ca",
					image: "krnl.png",
				},
				{
					name: "We Are Devs",

					url: "https://wearedevs.net/d/Exploit%20API",
					image: "WRD.png",
				},
				{
					name: "Oxygen U",
					url: "https://oxygenu.xyz/",
					image: "oxygenu.png",
				},
			],
		};
	},
	mounted() {
		this.supporters.map((supporter) => {
			supporter.img = require("@/assets/Brands/" + supporter.image);
		});
	},
};
</script>

<style lang="scss" scoped>
.section {
	border-bottom: 1px solid lighten($text-primary, 50%);
	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;

		.content {
			sub {
				color: $secondary;
				font-weight: 500;
				margin: 0;
			}
			h2 {
				font-size: 2.5rem;
				font-weight: 600;
				margin-bottom: 2rem;

				sup {
					vertical-align: super;
					font-size: smaller;
				}
			}

			p {
				color: $text-secondary;
				line-height: 1.5;
				font-size: 1.2rem;
			}

			a {
				color: lighten($secondary, 10%);
				text-decoration: none;
			}
		}

		.badge {
			padding-left: 4rem;
			display: flex;
			flex-direction: column;
			justify-content: center;

			img {
				width: 150px;
			}
		}
	}
	.supporters {
		box-sizing: border-box;
		margin: 2rem auto;

		a {
			width: 100%;
			img {
				width: 100%;
			}
		}

		:deep(.carousel__track) {
			overflow-x: hidden;
			width: 90%;
			margin: 0 auto;
		}

		:deep(.carousel__slide) {
			padding: 30px;
			box-sizing: border-box;
		}

		:deep(.carousel__prev),
		:deep(.carousel__next) {
			box-sizing: border-box;
			background: $secondary;
			border-radius: 5px;
		}

		:deep(.carousel__pagination) {
			.carousel__pagination-item {
				.carousel__pagination-button {
					border-radius: 5px;
					background: $text-primary;
					&.carousel__pagination-button--active {
						background: $primary;
					}
				}
			}
		}
	}

	p.sub {
		font-size: 2rem;
		font-weight: 600;
		color: $text-secondary;
	}

	@media screen and (max-width: 800px) {
		.split {
			grid-template-columns: 1fr;
			.content {
				h2 {
					margin: 1rem 0;
				}
			}
			.badge {
				display: none;
			}
		}

		.supporters {
			width: 95%;
			margin: 0 auto;
			:deep(.carousel__pagination) {
				.carousel__pagination-item {
					display: none;
				}
			}
		}
	}
}
</style>
