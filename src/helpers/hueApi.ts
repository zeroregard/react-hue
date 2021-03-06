import axios from 'axios';
import { from, Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

const endpoint = 'http://192.168.178.59';
const userToken = 'JfHHNBrGTV5HFn5XAzkYN9B2fshpScYObmigC6jQ';

export const refresh$ = new Subject<any>();

export function getLights(): Observable<any[]> {
    const url = `${endpoint}/api/${userToken}/lights`;
    return from(axios.get(url)).pipe(
        map(response => response.data),
        map(data => Object.entries(data)),
    );
}

export function getLight(id: string): Observable<any> {
    const url = `${endpoint}/api/${userToken}/lights/${id}`;
    return from(axios.get<any>(url)).pipe(
        map(response => response.data),
    );
}

export function toggleLight(id: string, on: boolean) {
    const url = `${endpoint}/api/${userToken}/lights/${id}/state`;
    from(axios.put(url, { on })).subscribe(() => {
        refresh$.next(undefined);
    });
}

export function setBrightness(id: string, bri: number) {
    const url = `${endpoint}/api/${userToken}/lights/${id}/state`;
    from(axios.put(url, { bri: Math.round(bri) })).subscribe(() => {
        refresh$.next(undefined);
    });
}

export function setHue(id: string, hue: number) {
    const url = `${endpoint}/api/${userToken}/lights/${id}/state`;
    from(axios.put(url, { hue: Math.round(hue) }));
}

export function setTemperature(id: string, temperature: number) {
    const url = `${endpoint}/api/${userToken}/lights/${id}/state`;
    from(axios.put(url, { ct: Math.round(temperature) })).subscribe(() => {
        refresh$.next(undefined);
    });
}