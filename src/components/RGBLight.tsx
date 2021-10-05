import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BrightnessController from './controls/BrightnessController';
import HueController from './controls/HueController';
import OnOffToggle from './controls/OnOffToggle';



export function RGBLight(props: any) {
    return (
        <Card sx={{ minWidth: 348, margin: 1 }}>
            <CardContent>
                <OnOffToggle id={props.id} light={props.light}/>
                <HueController id={props.id} light={props.light}/>
                <BrightnessController id={props.id} light={props.light}/>
            </CardContent>
        </Card>
    );
}

export default RGBLight;