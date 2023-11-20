/**
 * const numberOfCats = 3
 * const myPluralizedString = pluralNew(['s'])`I have ${numberOfCats} cat${_FP}!`
 *
 * console.log(myPluralizedString) // "I have 3 cats!"
 * ```
 *
 * @format
 * @example ```typescript import { pluralNew, _FP } from 'pluralizer.js'
 */

import Pluralizer from '../types';
import pluralize from '../helpers/pluralize';

const plural =
	(pluralizations: (string | Pluralizer)[]) =>
	(strings: TemplateStringsArray, ...values: any[]) =>
		pluralize(strings, values, pluralizations);

export default plural;
