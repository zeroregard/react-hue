import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OnOffToggle from './controls/OnOffToggle';
import BrightnessController from './controls/BrightnessController';
import TemperatureController from './controls/TemperatureController';



export function CTLight(props: any) {
    return (
        <Card sx={{ minWidth: 348, margin: 1 }}>
            <CardContent>
                <OnOffToggle id={props.id} light={props.light}/>
                <BrightnessController id={props.id} light={props.light}/>
                <TemperatureController id={props.id} light={props.light}/>
            </CardContent>
        </Card>
    );
}

export default CTLight;