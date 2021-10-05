import { Switch } from '@mui/material';
import { toggleLight } from '../../helpers/hueApi';


export function OnOffToggle(props: any) {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                <h3 style={{ marginTop: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>{props.light.name}</h3>
                <Switch size="small" checked={props.light?.state.on} onChange={() => toggleLight(props.id, !props.light?.state.on)} />
            </div>
        </div>
    );
}

export default OnOffToggle;