import Pluralizer from "../types";
import pluralize from "../helpers/pluralize";

/**
 * @example ```typescript import { plural, _FP } from 'pluralizer.js'
 *
 * const numberOfCats = 3
 * const myPluralizedString = plural(['s'])`I have ${numberOfCats} cat${_FP}!`
 *
 * console.log(myPluralizedString) // "I have 3 cats!"
 * ```
 *
 */
const plural =
    (pluralizations: (string | Pluralizer)[]) =>
    (strings: TemplateStringsArray, ...values: any[]) =>
        pluralize(strings, values, pluralizations);

export default plural;
