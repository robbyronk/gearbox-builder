/**
 * @param {number} a
 * @param {number} b somewhere between a and c
 * @param {number} c
 * @param {number} a_value value at a
 * @param {number} c_value value at c
 * @return {number} linear interpolated value at b
 */
export const interpolateValue = (a, b, c, a_value, c_value) => {
    const ratio = (b - a) / (c - a);
    return a_value + ratio * (c_value - a_value);
}