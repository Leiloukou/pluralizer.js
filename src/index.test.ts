/** @format */

import { describe, expect, it } from "vitest";
import { pluralOld, _FP, pluralSwap, pluralable, plural } from "./index";

describe("#plural-old", () => {
    it('will NOT pluralize "cat" because the number before it is "1"', () => {
        expect(pluralOld`${["s"]}I only have ${1} cat${_FP}`).toBe(
            "I only have 1 cat",
        );
    });

    it('will NOT pluralize "dog" because the number before it is "-1"', () => {
        expect(pluralOld`${["s"]}I only have ${-1} dog${_FP}`).toBe(
            "I only have -1 dog",
        );
    });

    it('will pluralize "egg" because the number before it is "1.5"', () => {
        expect(pluralOld`${["s"]}I only have ${1.5} egg${_FP}`).toBe(
            "I only have 1.5 eggs",
        );
    });

    it('will pluralize "book" because the number before it is "0"', () => {
        expect(pluralOld`${["s"]}I bought ${0} book${_FP} yesterday`).toBe(
            "I bought 0 books yesterday",
        );
    });

    it('will NOT pluralize "ostrich" because there is no number before it', () => {
        expect(
            pluralOld`${["s"]}I only have ${"an"} ostrich${_FP}, sorry.`,
        ).toBe("I only have an ostrich, sorry.");
    });

    it('will NOT pluralize "sandwich" because there is no number before it', () => {
        expect(pluralOld`${[]}I only have ${"an"} sandwich${_FP}, sorry.`).toBe(
            "I only have an sandwich, sorry.",
        );
    });

    it('will pluralize "cactus" because the number before it is "1.5"', () => {
        expect(
            pluralOld`${[
                { letters: "i", erase: 2 },
            ]}I only have ${1.5} cactus${_FP}`,
        ).toBe("I only have 1.5 cacti");
    });

    it('will pluralize "dollar" the first and third time because the second one does not have "_FP" inserted to indicate pluralization.', () => {
        expect(
            pluralOld`${[
                "s",
                "s",
            ]}I only have ${200} dollar${_FP}, so I ${"can"} buy the ${50} dollar item. My friend has ${1} dollar${_FP}, so they can not.`,
        ).toBe(
            "I only have 200 dollars, so I can buy the 50 dollar item. My friend has 1 dollar, so they can not.",
        );
    });

    it("will throw because there is no available pluralization", () => {
        expect(
            () =>
                pluralOld`${[
                    "s",
                ]}You think I have ${4} error${_FP}? I only have ${1} error${_FP}`,
        ).toThrowError(/^No pluralization for pluralizable section$/);
    });

    // it("will pluralize \"cartwheel\" but NOT pluralize \"token\" because the second symbol is not the _FP formatting symbol.", () => {
    it("will throw because the symbol is not the `_FP` symbol, and I tried to convert the symbol to a string.", () => {
        expect(
            () =>
                pluralOld`${[
                    "s",
                    "s",
                ]}I did ${10} cartwheel${_FP} yesterday, which is more than ${6} prize token${Symbol()}, which can buy stuffed animals and other toys.`,
        )
            // .toBe(
            // 	'I did 10 cartwheels yesterday, which is more than 6 prize token, which can buy stuffed animals and other toys.'
            // );
            .toThrowError(/^Cannot convert a Symbol value to a string$/);
    });
});

describe("#plural-new", () => {
    it('will NOT pluralize "cat" because the number before it is "1"', () => {
        expect(plural(["s"])`I only have ${1} cat${_FP}`).toBe(
            "I only have 1 cat",
        );
    });

    it('will NOT pluralize "dog" because the number before it is "-1"', () => {
        expect(plural(["s"])`I only have ${-1} dog${_FP}`).toBe(
            "I only have -1 dog",
        );
    });

    it('will pluralize "egg" because the number before it is "1.5"', () => {
        expect(plural(["s"])`I only have ${1.5} egg${_FP}`).toBe(
            "I only have 1.5 eggs",
        );
    });

    it('will pluralize "book" because the number before it is "0"', () => {
        expect(plural(["s"])`I bought ${0} book${_FP} yesterday`).toBe(
            "I bought 0 books yesterday",
        );
    });

    it('will NOT pluralize "ostrich" because there is no number before it', () => {
        expect(plural(["s"])`I only have ${"an"} ostrich${_FP}, sorry.`).toBe(
            "I only have an ostrich, sorry.",
        );
    });

    it('will NOT pluralize "sandwich" because there is no number before it', () => {
        expect(plural([])`I only have ${"an"} sandwich${_FP}, sorry.`).toBe(
            "I only have an sandwich, sorry.",
        );
    });

    it('will pluralize "cactus" because the number before it is "1.5"', () => {
        expect(
            plural([
                { letters: "i", erase: 2 },
            ])`I only have ${1.5} cactus${_FP}`,
        ).toBe("I only have 1.5 cacti");
    });

    it('will pluralize "dollar" the first and third time because the second one does not have "_FP" inserted to indicate pluralization.', () => {
        expect(
            plural([
                "s",
                "s",
            ])`I only have ${200} dollar${_FP}, so I ${"can"} buy the ${50} dollar item. My friend has ${1} dollar${_FP}, so they can not.`,
        ).toBe(
            "I only have 200 dollars, so I can buy the 50 dollar item. My friend has 1 dollar, so they can not.",
        );
    });

    it("will throw because there is no available pluralization", () => {
        expect(
            () =>
                plural([
                    "s",
                ])`You think I have ${4} error${_FP}? I only have ${1} error${_FP}`,
        ).toThrowError(/^No pluralization for pluralizable section$/);
    });

    // it("will pluralize \"cartwheel\" but NOT pluralize \"token\" because the second symbol is not the _FP formatting symbol.", () => {
    it("will throw because the symbol is not the `_FP` symbol, and I tried to convert the symbol to a string.", () => {
        expect(
            () =>
                plural([
                    "s",
                    "s",
                ])`I did ${10} cartwheel${_FP} yesterday, which is more than ${6} prize token${Symbol()}, which can buy stuffed animals and other toys.`,
        )
            // .toBe(
            // 	'I did 10 cartwheels yesterday, which is more than 6 prize token, which can buy stuffed animals and other toys.'
            // );
            .toThrowError(/^Cannot convert a Symbol value to a string$/);
    });
});

describe("#plural-swap", () => {
    it('should pluralize "gram".', () => {
        const data = 3.2;

        expect(
            `I have ${data} ${pluralSwap(
                "gram",
                "grams",
                data,
            )} of sugar in this cup of coffee.`,
        );
    });

    it('should NOT pluralize "sandwich".', () => {
        const data = 1;

        expect(
            `I have ${data} ${pluralSwap(
                "sandwich",
                "sandwiches",
                data,
            )} left, would you like half?`,
        );
    });
});

describe("#pluralable", () => {
    it('should pluralize "school".', () => {
        const data = 14;

        expect(
            `There ${pluralable(
                { singular: "is", plural: "are" },
                data,
            )} only ${data} ${pluralable(
                { singular: "school", pluralizer: "s" },
                data,
            )} in this town.`,
        ).toBe("There are only 14 schools in this town.");
    });

    it('should pluralize "pen".', () => {
        const data = 192;

        expect(
            `We have ${data} ${pluralable(
                { singular: "pen", pluralizer: "s" },
                data,
            )}, so nobody will need to share!`,
        ).toBe("We have 192 pens, so nobody will need to share!");
    });

    it('should NOT pluralize "burger".', () => {
        const data = 1;

        expect(
            `I will have ${data} ${pluralable(
                { singular: "burger", pluralizer: "s" },
                data,
            )} tonight.`,
        ).toBe("I will have 1 burger tonight.");
    });

    it('should NOT pluralize "burger".', () => {
        const data = 1;

        expect(
            `I will have ${data} ${pluralable(
                { singular: "burger", pluralizer: "s" },
                data,
            )} tonight.`,
        ).toBe("I will have 1 burger tonight.");
    });

    it('should pluralize "activity".', () => {
        const data = 6;

        expect(
            `This class has ${pluralable(
                { singular: "an", plural: data.toString() },
                data,
            )} ${pluralable(
                {
                    singular: "activity",
                    pluralizer: { erase: 1, letters: "ies" },
                },
                data,
            )} tonight.`,
        ).toBe("This class has 6 activities tonight.");
    });

    it('should NOT pluralize "activity".', () => {
        const data = 1;

        expect(
            `This class has ${pluralable(
                { singular: "an", plural: data.toString() },
                data,
            )} ${pluralable(
                {
                    singular: "activity",
                    pluralizer: { erase: 1, letters: "ies" },
                },
                data,
            )} tonight.`,
        ).toBe("This class has an activity tonight.");
    });
});
