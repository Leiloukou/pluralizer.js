/** @format */

/**
 * @example ```typescript import { pluralSwap, _FP } from 'pluralizer.js'
 * 
 * const numberOfCats = 3
 * const myPluralizedString = `I have ${numberOfCats} ${pluralSwap('cat', 'cats', numberOfCats)}!`
 *
 * console.log(myPluralizedString) // "I have 3 cats!"
 * ```
 */
const pluralSwap = (singular: string, plural: string, data: number) =>
	Math.abs(data) !== 1 ? plural : singular;

export default pluralSwap