import {interpolateValue} from "./interpolate";

it('should interpolate halfway between a and c', () => {
    const actual = interpolateValue(1, 3, 5, 2, 4);
    expect(actual).toEqual(3);
});
it('should interpolate close to a', () => {
    const actual = interpolateValue(1, 2, 10, 2, 4);
    expect(actual).toBeCloseTo(2.222, 2);
});
it('should interpolate close to c', () => {
    const actual = interpolateValue(1, 9, 10, 2, 4);
    expect(actual).toBeCloseTo(3.777, 2);
});