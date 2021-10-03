import { createTheme, Grid, ThemeProvider } from '@mui/material';
import { useObservableState } from 'observable-hooks';
import React from 'react';
import { shareReplay, startWith, switchMap, withLatestFrom } from 'rxjs';
import './App.css';
import Light from './components/Light';
import { getLights, refresh$ } from './helpers/hueApi';

const lights$ = refresh$.pipe(
    startWith(undefined),
    switchMap(() => getLights()),
    shareReplay(1)
);

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
                {[...lights].map(keyValue =>
                <Light key={keyValue[0]} light={keyValue[1]} id={keyValue[0]}></Light>
                )}
            </Grid>
        </ThemeProvider>
    );
}

export default App;
