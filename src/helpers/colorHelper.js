export const MAX_BRIGHTNESS = 254;
export const MAX_SATURATION = 254;
export const MAX_HUE = 65535;

export function lightStateToHue(lightState) {
    const hue = (lightState.hue / MAX_HUE) * 360;
    console.log(lightState);
    return {
        h: hue,
        l: 100,
        s: 100
    }
}


export function toAPIBrightness(brightness) {
    return brightness * 254;
}

export function toAPIHue(hue) {
    return (hue / 360) * MAX_HUE;
}