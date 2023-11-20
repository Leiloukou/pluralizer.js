/** @format */

import { Pluralable } from '../types';

/**
 * @example ```typescript import { pluralable, _FP } from 'pluralizer.js'
 *
 * const numberOfCats = 3;
 * const myPluralizedStringAboutCats = `I have ${numberOfCats} ${pluralable(
 * 	{ singular: 'cat', pluralizer: 's' },
 * 	numberOfCats
 * )}!`;
 * 
 * console.log(myPluralizedStringAboutCats); // "I have 3 cats!"
 * 
 * const numberOfCacti = 12;
 * const myPluralizedStringAboutCacti = `I have ${numberOfCacti} ${pluralable(
 * 	{ singular: 'cactus', pluralizer: { erase: 2, letters: 'i' } },
 * 	numberOfCats
 * )}!`;
 * 
 * console.log(myPluralizedStringAboutCacti); // "I have 12 cacti!"
 * ```
 *
 */
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