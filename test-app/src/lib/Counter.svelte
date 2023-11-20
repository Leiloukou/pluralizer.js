<!-- @format -->
<script lang="ts">
	export let count: string | number = 0;

	// const onInputKeypress = (e) => {
	// 			if (!/[0-9-]/.test(e.key) && toNum(count) < 0 && (e.target as any).selectionStart === 0) e.preventDefault();
	// 		}

	const toStr = (v: string | number) => '' + v;
	const toNum = (v: string | number) => parseFloat(toStr(v));

	$: count = toNum(
		((toNum(count) < 0 ? '-' : '') + toStr(count)).replace('-', '')
	);
	const increment = () => (count = toNum(count) + 1);
	const decrement = () => (count = toNum(count) - 1);
</script>

<div class="counter">
	<button on:click={decrement}> decrement </button>
	<button on:click={increment}> increment </button>
	<div class="button no-hocus">
		<label for="counter-input">Count:</label>
		<input id="counter-input" type="number" bind:value={count} />
		<!-- type="text" -->
		<!-- on:keypress={onInputKeypress} -->
		<!-- maxLength={5} -->
	</div>
</div>

<style>
	.counter {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(2, 1fr);
	}

	.counter > :last-child {
		grid-column: 1 / -1;
	}

	.button:has(input) {
		padding: 0;
		display: flex;
		gap: 1ch;
	}

	.button label {
		padding: 0.6em 0 0.6em 1.2em;
		color: #9b9ba2;
	}

	.button input {
		border-radius: 0;
		flex-grow: 1;
		background: transparent;
		outline: 0;
		font: inherit;
		padding-left: 0;
		color: #b0b4f9;
	}

	@media (prefers-color-scheme: light) {
		.button:has(input) {
			background-color: #4a4ace;
		}

		.button label {
			color: #d7d7fd;
		}

		.button input {
			color: #e4e8ff;
		}
	}
</style>
