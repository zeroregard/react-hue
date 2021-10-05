import React from 'react';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import { useObservableState } from 'observable-hooks';
import { shareReplay, startWith, switchMap } from 'rxjs';
import './App.css';
import CTLight from './components/CTLight';
import RGBLight from './components/RGBLight';
import { getLights, refresh$ } from './helpers/hueApi';

const lights$ = refresh$.pipe(
    startWith(undefined),
    switchMap(() => getLights()),
    shareReplay(1)
);

function getLightType(id: string, light: any) {
    if(light.capabilities.control.colorgamut) {
        return <RGBLight key={id} light={light} id={id}/>;
    } else {
        return <CTLight key={id} light={light} id={id}/>;
    }
}

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const lights = useObservableState(lights$, []);
    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container spacing={2} style={{margin: 4}}>
                {[...lights].map(keyValue => getLightType(keyValue[0], keyValue[1]))}
            </Grid>
        </ThemeProvider>
    );
}

export default App;
