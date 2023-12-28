import Pluralizer from "../types";
import _FP from "../utils/fp-symbol";

const pluralize = (
    strings: TemplateStringsArray,
    values: any[],
    pluralizations: Pluralizer[],
) => {
    // FormatPluralIndex
    let fpi = 0;
    let previousNumberValue: number | null = null;

    return values.reduce((previousString: string, value, i) => {
        if (typeof value === "number") previousNumberValue = value;

        if (value !== _FP) return `${previousString}${value}${strings[i + 1]}`;

        if (previousNumberValue === null)
            return `${previousString}${strings[i + 1]}`;

        const pluralizationFromArray = pluralizations[fpi];

        if (!pluralizationFromArray)
            throw new Error("No pluralization for pluralizable section");

        const pluralize =
            previousNumberValue !== 1 && previousNumberValue !== -1;
        const pluralizationIsObject =
            pluralizationFromArray !== undefined &&
            pluralizationFromArray !== null &&
            typeof pluralizationFromArray === "object";
        const pluralization = pluralize
            ? pluralizationIsObject
                ? pluralizationFromArray.letters
                : pluralizationFromArray
            : "";

        fpi++;

        return `${
            pluralizationIsObject
                ? previousString.slice(
                      0,
                      previousString.length - pluralizationFromArray.erase,
                  )
                : previousString
        }${pluralization}${strings[i + 1]}`;
    }, strings[0]);
};

export default pluralize;
