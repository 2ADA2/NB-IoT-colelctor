import { environment } from '../../../environments/environment';


export const SH: string = environment.API_URL + "/sh219%20info";
export const MQTT: string = environment.API_URL + "/mqtt";
export const SUB: string = environment.API_URL + "/sub";

// sh
export const TYPE: string = SH + "/protocol%20type";
export const OS: string = SH + "/operating%20system";
export const CMD:string = SH + "/cmd_get";


export const AUTH: string = MQTT + "/Authorization";

// mqtt
export const MQTT_SETTINGS: string = MQTT + "/settings";


// sub
export const SUB_SETTINGS: string = SUB + "/settings";
