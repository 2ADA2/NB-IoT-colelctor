import { MQTT } from './common';

export const MQTT_SETTINGS: string = MQTT + "/settings";
export const MQTT_SET_SETTINGS: string = MQTT + "/set settings";

export const ADVANCED: string = MQTT + "/Advanced%20settings";
export const BACKEND_UPDATE: string = MQTT + "/backend%20update";
export const FRONTEND_UPDATE: string = MQTT + "/frontend%update";

export const SOURCES_GET: string = MQTT + "/devInfoList";
export const STATUS_GET: string = MQTT + "/state";
export const STATUS_SET: string = MQTT + "/set%20state";

export const DB_GET: string = MQTT + "/DBState/";
export const DB_SET: string = MQTT + "/DB/";

export const MEASURE_POST: string = MQTT + "/measure/";

