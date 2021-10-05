import { HuePicker } from "react-color";
import { lightStateToHue, toAPIHue } from "../../helpers/colorHelper";
import { setHue } from "../../helpers/hueApi";

export function HueController(props: any) {
    return (
        <div>
            {props.light?.state.hue !== undefined &&
                <div style={{ marginBottom: 16}}>
                    <HuePicker
                        color={lightStateToHue(props.light.state)}
                        onChangeComplete={(color, _e) => setHue(props.id, toAPIHue(color.hsl.h))}
                    />
                </div>}
        </div>
    );
}

export default HueController;