/** @format */

import { Pluralable } from '../types';

const pluralable = (pluralable: Pluralable, data: number) =>
	Math.abs(data) === 1
		? pluralable.singular
		: 'plural' in pluralable
		? pluralable.plural
		: typeof pluralable.pluralizer === 'string'
		? pluralable.singular + pluralable.pluralizer
		: pluralable.singular.slice(0, -1 * pluralable.pluralizer.erase) +
		  pluralable.pluralizer.letters;

export default pluralable;
