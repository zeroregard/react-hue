import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { HexColorPicker } from "react-colorful";
import { Switch } from '@mui/material';
import { stateToColorHex } from '../helpers/colorHelper';
import { toggleLight } from '../helpers/hueApi';



export function Light(props: any) {
    return (
        <Card sx={{ width: 232, margin: 1 }}>
            <CardContent>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                    <h3 style={{ marginTop: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>{ props.light.name }</h3>
                    <Switch size="small" color="info" checked={props.light?.state.on} onChange={() => toggleLight(props.id, !props.light?.state.on)}/>
                </div>
                <HexColorPicker color={stateToColorHex(props.light?.state)} onChange={() => {}} />
            </CardContent>
        </Card>
    );
}

export default Light;