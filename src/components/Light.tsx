import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Switch } from '@mui/material';
import { toggleLight } from '../helpers/hueApi';
import BrightnessController from './controls/BrightnessController';
import HueController from './controls/HueController';
import TemperatureController from './controls/TemperatureController';



export function Light(props: any) {
    return (
        <Card sx={{ minWidth: 348, margin: 1 }}>
            <CardContent>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                    <h3 style={{ marginTop: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>{props.light.name}</h3>
                    <Switch size="small" checked={props.light?.state.on} onChange={() => toggleLight(props.id, !props.light?.state.on)} />
                </div>
                <HueController id={props.id} light={props.light}/>
                <BrightnessController id={props.id} light={props.light}/>
                <TemperatureController id={props.id} light={props.light}/>
            </CardContent>
        </Card>
    );
}

export default Light;