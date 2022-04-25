<template>
	<div class="section why">
		<sub>What exactly is wrong with how things work now?</sub>
		<h2>The reason for the Unified Naming Convention.</h2>
		<div class="split">
			<p>
				Since script execution has become prevalent software with hundreds of thousands of users, the development of scripts has become more
				complex. This is because of so many unique naming conventions that various script executors use.
			</p>
			<p>
				This results in a difficult environment for a script developer. If you wish to develop a script that works across multiple products,
				you are <strong>required</strong> to understand how they name their functions, how their functions work, etc. This is exactly what UNC
				counters.
			</p>
		</div>
		<div class="example">
			<h3>Let’s demonstrate an example of this.</h3>

			<pre><code v-html="highlight(`local is_executor_closure = is_syn_closure or is_fluxus_closure or is_sentinel_closure or is_krnl_closure or is_proto_closure or is_calamari_closure or is_electron_closure or is_elysian_closure`,'lua')"></code></pre>
			<sub
				>This example is also available on the
				<a href="https://github.com/unified-naming-convention/NamingStandard/blob/main/README.md" target="_blank">GitHub page</a>.</sub
			>
			<p>
				This is a scenario, as a script developer, for if you’d like to know whether a function is by the script executor or not. If you’d
				like to add cross compatibility so that it works across multiple brands - you <strong>must</strong> have something like that (and
				remember, that isn’t even every product, it’s just every <em>major</em> product!).
			</p>
			<p>
				Scripters, in our opinion, should not be subject to this laborous work just to attain cross compatibility. And that is where the UNC
				comes into fruition! With one universally accepted (or supported) API comes ease of compatibility and therefore ease of scripting for
				a developer.
			</p>
			<p>
				Script executors are made <strong>for</strong> scripters to work with, so why are we corrupting this by stamping brand names on our
				functions?
			</p>
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
	},
};
</script>

<style lang="scss" scoped>
.section {
	background: $background-secondary;

	border-bottom: 1px solid lighten($text-primary, 50%);

	h2 {
		font-size: 2.5rem;
		margin-top: 5px;
		font-weight: 600;
	}

	.split {
		margin: 2rem 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		p {
			font-size: 1.3rem;
			line-height: 1.5;
			color: $text-secondary;
			font-weight: 400;
		}
	}

	.example {
		h3 {
			font-size: 2.2rem;
			font-weight: 600;
		}

		pre {
			margin: 1rem 0;
			background: $text-primary;
			border-radius: 5px;
			padding: 10px;
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
		}

		> img {
			width: 100%;
			margin: 2rem 0 1rem 0;
		}

		sub {
			color: $text-tertiary;
			font-weight: 300;

			a {
				color: lighten($secondary, 10%);
				text-decoration: none;
			}
		}

		p {
			margin: 2rem 0;
			font-size: 1.3rem;
			color: $text-secondary;
			line-height: 1.5;
		}

		em {
			font-style: italic;
		}
	}

	@media screen and (max-width: 800px) {
		h2 {
			margin: 1rem 0;
		}

		.split {
			grid-template-columns: 1fr;
		}
	}
}
</style>
