import {
  RegistrationCommand,
} from '../commands/registration-command/registration-command';
import {
  GetInfoCommand,
} from '../commands/get-info-command/get-info-command';
import {
  ScheduleCommand,
} from '../commands/schedule-command/schedule-command';
import {
  UpdateLocationCommand,
} from '../commands/update-location-command/update-location-command';
import {
  GetLocationCommand,
} from '../commands/get-location-command/get-location-command';
import {
  SoftwareUpdateCommand,
} from '../commands/software-update-command/software-update-command';
import {
  CertificateCommand,
} from '../commands/certificate-command/certificate-command';
import {
  GetSensorCommand,
} from '../commands/get-sensor-command/get-sensor-command';
import {
  SetSensorCommand,
} from '../commands/set-sensor-command/set-sensor-command';
import { DebugCommand } from '../commands/debug-command/debug-command';
import { RebootCommand } from '../commands/reboot-command/reboot-command';
import { DevCommandKeys } from '../../../../../core/localization/ru/dev-commands-ru';

export const mqttCommandNames: DevCommandKeys[] = [
  "REGISTRATION",
  "GET_INFO",
  "SCHEDULE",
  "UPDATE_LOCATION",
  "GET_LOCATION",
  "GET_SENSOR",
  "SET_SENSOR",
  "DEBUG",
  "REBOOT",
  "CERTIFICATE",
  "SOFTWARE",
  "UNKNOWN",
];

export const mqttCommandComponents = [
  RegistrationCommand,
  GetInfoCommand,
  ScheduleCommand,
  UpdateLocationCommand,
  GetLocationCommand,
  GetSensorCommand,
  SetSensorCommand,
  DebugCommand,
  RebootCommand,
  CertificateCommand,
  SoftwareUpdateCommand,
];
