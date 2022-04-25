<template>
	<div class="section badge">
		<router-link to="/" class="backButton"><span>&lt;</span>Go Back</router-link>

		<div class="main">
			<div class="title">
				<h1>Thank you for supporting the UNC! ☀️</h1>
				<sub>You are making the world a better place for the scripters who we love and appreciate.</sub>
			</div>
			<div class="embed">
				<h2>Feature the badge on your page!</h2>
				<div class="checkbox">
					<label for="showText">Show 'Supported' Text</label>
					<input type="checkbox" id="showText" name="showText" v-model="showText" />
				</div>
				<pre><code v-html="highlight(embedCode,'html')"></code><div @click="copy" class="copy"><font-awesome-icon :icon="copied ? 'check' : 'paste'" /></div></pre>
			</div>

			<div class="demo">
				<h2>Which looks like</h2>
				<span v-html="embedCode"></span>
				<p>
					This badge, when clicked, leads to this website which will educate your users that you, indeed, are pushing towards a united
					scripting API.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		highlight(code, language) {
			let hljs = require("highlight.js");
			let html = hljs.highlight(code, { language }).value;
			return html;
		},
		async copy() {
			var text = this.embedCode;

			await navigator.clipboard.writeText(text).catch((err) => {
				console.log(err);
			});

			this.copied = true;
			setTimeout(() => {
				this.copied = false;
			}, 2000);
		},
	},

	data() {
		return {
			showText: false,
			copied: false,
		};
	},
	computed: {
		embedCode() {
			return `<a href="https://scriptunc.org" style="height:max-content;" target="_blank">
    <img style="width: 120px;height:auto;" alt="UNC Supported Badge" src="${
		process.env.NODE_ENV === "development" ? "" : "https://scriptunc.org"
	}/badge${this.showText ? "-supported.png" : ".png"}"/>
</a>`;
		},
	},
};
</script>

<style lang="scss" scoped>
.section {
	position: relative;
	text-align: center;
	background: $background-secondary;
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5rem;
	}
	.title {
		h1 {
			text-align: center;
			width: 100%;
		}

		sub {
			font-size: 1.5rem;
			color: $text-secondary;
		}
	}

	.embed {
		h2 {
			font-size: 2.5rem;
			font-weight: 600;
		}

		.checkbox {
			margin-top: 4rem;
			background: $text-primary;
			width: max-content;
			margin-left: auto;
			margin-bottom: 0.5rem;
			border-radius: 5px;
			padding: 0.2rem;
			box-sizing: border-box;
			color: $background-secondary;
			input[type="checkbox"] {
				border: 1px solid $text-secondary;
				margin-left: 0.5rem;
			}
		}

		pre {
			position: relative;
			text-align: left;
			background: $text-primary;
			border-radius: 5px;
			padding: 10px 10px 40px 10px;
			box-sizing: border-box;
			code {
				width: fit-content;
				color: $background-secondary;
				overflow-y: hidden;
				word-wrap: break-word;
				white-space: pre-wrap;
				line-height: 1.5;
				font-weight: 500;
			}

			.copy {
				position: absolute;
				bottom: 10px;
				right: 10px;
				font-size: 1.5rem;
				color: $background-primary;

				cursor: pointer;

				&:hover {
					color: $background-secondary;
				}
			}
		}
	}

	.demo {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		h2 {
			font-size: 2.5rem;
			font-weight: 600;
		}

		p {
			font-size: 1.2rem;
			color: $text-secondary;
			max-width: 70ch;
			line-height: 1.5;
			margin-bottom: 5rem;
		}
	}

	.backButton {
		background: $primary;
		display: block;
		width: max-content;
		padding: 5px;
		border-radius: 5px;
		box-sizing: border-box;
		margin-right: auto;

		color: white;
		text-decoration: none;
		span {
			margin-right: 0.5rem;
		}
	}
}
</style>
