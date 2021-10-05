import { Stack } from "@mui/material";
import { HuePicker } from "react-color";
import { IoIosColorPalette } from "react-icons/io";
import { lightStateToHue, toAPIHue } from "../../helpers/colorHelper";
import { setHue } from "../../helpers/hueApi";

export function HueController(props: any) {
    return (
        <div>
            {props.light?.state.hue !== undefined &&
                <div style={{ marginBottom: 16 }}>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <IoIosColorPalette />
                        <HuePicker
                            color={lightStateToHue(props.light.state)}
                            onChangeComplete={(color, _e) => setHue(props.id, toAPIHue(color.hsl.h))}
                        />
                    </Stack>
                </div>}
        </div>
    );
}

export default HueController;