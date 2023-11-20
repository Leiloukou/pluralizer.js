<!-- @format -->
<script lang="ts">
	import Counter from './lib/Counter.svelte';
	import { plural, _FP } from 'pluralizer.js/dist/index';

	let count: number | null = 1;
</script>

<main>
	<h1>pluralizer.js <br class="sm" />test app</h1>

	<div class="card">
		<Counter bind:count />
		<div>
			<strong>The pluralized string:</strong>
			<div class="pluralized">
				{plural(['s'])`I have ${
					Number.isNaN(count) ? 'some' : count ?? 'an'
				} item${Number.isNaN(count) ? 's' : _FP} in my cart.`}
			</div>
		</div>
	</div>
</main>

<style>
	.card:has(.counter) {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	:has(.pluralized) strong {
		color: #8489e7;
	}

	.pluralized {
		font-weight: 700;
		font-size: 1.5em;
	}

	.sm {
		display: none;
	}

	@media (max-width: 600px) {
		.sm {
			display: block;
		}
	}

	@media (prefers-color-scheme: light) {
		:has(.pluralized) strong {
			color: #4a4ace;
		}
	}
</style>
