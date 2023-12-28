/** @format */

interface PluralizerObject {
    letters: string;
    erase: number;
}
type Pluralizer = PluralizerObject | string;

type Pluralable =
    | { pluralizer: Pluralizer; singular: string }
    | { singular: string; plural: string };

export default Pluralizer;
export { Pluralizer, Pluralable, PluralizerObject };
