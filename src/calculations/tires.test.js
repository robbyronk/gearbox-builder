import {getTireHeight} from "./tires";

it('should calculate tire height for 265/70R17', () => {
    const actual = getTireHeight({width: 265, aspectRatio: 70, rimDiameter: 17})
    expect(actual).toBeCloseTo(0.803, 3)
});

it('should calculate tire height for 265/40R23', () => {
    const actual = getTireHeight({width: 265, aspectRatio: 40, rimDiameter: 23})
    expect(actual).toBeCloseTo(0.796, 3)
});

it('should calculate tire height for 225/35R15', () => {
    const actual = getTireHeight({width: 225, aspectRatio: 35, rimDiameter: 15})
    expect(actual).toBeCloseTo(0.539, 3)
});