// Given that a minimum and maximum parameter is set, the function should give 

const randomGeneratorForFood = required("../app.js")

describe("Random Food Generator function", () => {
    test("Given a minimum number is entered and a maximum number is entered, a random whole number is returned.", () => {
        const min = 0;
        const max = 400;
        expect(typeof randomGeneratorForFood(min, max)).toBe('number')
    });
    test("Given a minimum number is entered and a maximum number is entered, the number is higher than the minimum.", () => {
        const min = 0;
        const max = 400;
        expect(randomGeneratorForFood(min, max)).toBeGreaterThan(min);
    });
    test("Given a minimum number is entered and a maximum number is entered, the number is lower than the maximum.", () => {
        const min = 0;
        const max = 400;
        expect(randomGeneratorForFood(min, max)).toBeLessThan(max);
    });
});