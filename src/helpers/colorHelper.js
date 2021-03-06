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

/**
 * A linear interpolator for hexadecimal colors
 * @param {String} a
 * @param {String} b
 * @param {Number} amount
 * @example
 * // returns #7F7F7F
 * lerpColor('#000000', '#ffffff', 0.5)
 * @returns {String}
 * https://gist.github.com/rosszurowski/67f04465c424a9bc0dae
 */
 export function lerpColor(a, b, amount) { 

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}