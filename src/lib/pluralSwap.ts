/** @format */

const pluralSwap = (singular: string, plural: string, data: number) =>
	Math.abs(data) !== 1 ? plural : singular;

export default pluralSwap