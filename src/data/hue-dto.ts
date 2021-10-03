export interface HueLight {
    state: HueLightState;
    type: string;
    name: string;
    
}

export interface HueLightState {
    on: boolean;
    bri: number;
    hue: number;
    sat: number;
    effect: string;

}