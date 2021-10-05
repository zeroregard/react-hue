import { Slider, Stack } from '@mui/material';
import { setBrightness } from '../../helpers/hueApi';
import { FaLightbulb } from 'react-icons/fa';

export function BrightnessController(props: any) {
    return (
        <div>
            {props.light?.state.bri !== undefined &&
                <Stack style={{ marginTop: 8 }} spacing={2} direction="row" alignItems="center">
                    <FaLightbulb />
                    <Slider
                        min={0}
                        max={254}
                        step={1}
                        value={props.light.state.bri}
                        onChangeCommitted={(_e, v) => setBrightness(props.id, v as number)}
                    />
                </Stack>}
        </div>
    );
}

export default BrightnessController;