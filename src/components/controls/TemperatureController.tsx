import { Slider, Stack } from '@mui/material';
import { setTemperature } from '../../helpers/hueApi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { lerpColor } from '../../helpers/colorHelper';

function getColor(ct: number, min: number, max: number) {
    const minColor = "#c6f5ff"
    const maxColor = "#fdb34a"
    const amount = (ct-min)/(max-min);
    return lerpColor(minColor, maxColor, amount);
}

export function TemperatureController(props: any) {
    const ct = props.light?.state.ct;
    const min = props.light?.capabilities.control.ct.min;
    const max = props.light?.capabilities.control.ct.max;
    return (
        <div>
            {ct !== undefined &&
                <Stack spacing={2} direction="row" alignItems="center">
                    <FaTemperatureHigh style={{ paddingLeft: 3, marginRight: -3}} />
                    <Slider
                        sx={{
                            color: getColor(ct, min, max)
                        }}
                        min={min}
                        max={max}
                        step={1}
                        value={ct}
                        onChangeCommitted={(_e, v) => setTemperature(props.id, v as number)}
                    />
                </Stack>}
        </div>
    );
}

export default TemperatureController;