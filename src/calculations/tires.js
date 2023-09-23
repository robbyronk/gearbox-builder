export function getTireHeight({width, aspectRatio, rimDiameter}) {
    const rimInMeters = rimDiameter / 39.37; // rims are specified in inches
    const widthInMeters = width / 1000; // tire width are specified in millimeters
    const ratio = aspectRatio / 100; // aspect ratio is specified as a whole number
    return rimInMeters + 2 * widthInMeters * ratio;
}