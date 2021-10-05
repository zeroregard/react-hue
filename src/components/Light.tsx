import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { HuePicker  } from 'react-color';
import { Slider, Switch } from '@mui/material';
import { setBrightness, setHue, toggleLight } from '../helpers/hueApi';
import { lightStateToHue, toAPIHue } from '../helpers/colorHelper';


export function Light(props: any) {
    
    return (
        <Card sx={{ minWidth: 348, margin: 1 }}>
            <CardContent>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                    <h3 style={{ marginTop: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>{props.light.name}</h3>
                    <Switch size="small" checked={props.light?.state.on} onChange={() => toggleLight(props.id, !props.light?.state.on)} />
                </div>
                {props.light?.state.hue !== undefined && <HuePicker 
                    color={lightStateToHue(props.light.state)}
                    onChangeComplete={ (color, _e) => setHue(props.id, toAPIHue(color.hsl.h))  } 
                />}
                {props.light?.state.bri !== undefined  && <Slider
                    min={0}
                    max={254}
                    step={1}
                    value={props.light.state.bri}
                    onChangeCommitted={(_e, v) => setBrightness(props.id, v as number)}
                />}
            </CardContent>
        </Card>
    );
}

export default Light;