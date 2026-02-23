import {
  RegistrationCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/registration-command/registration-command';
import {
  GetInfoCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/get-info-command/get-info-command';
import {
  ScheduleCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/schedule-command/schedule-command';
import {
  UpdateLocationCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/update-location-command/update-location-command';
import {
  GetLocationCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/get-location-command/get-location-command';
import {
  SoftwareUpdateCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/software-update-command/software-update-command';
import {
  CertificateCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/certificate-command/certificate-command';
import {
  GetSensorCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/get-sensor-command/get-sensor-command';
import {
  SetSensorCommand,
} from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/set-sensor-command/set-sensor-command';
import { DebugCommand } from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/debug-command/debug-command';
import { RebootCommand } from '../../pages/mqtt/source-pages/mqtt-dev-commands/commands/reboot-command/reboot-command';
import { DevCommandKeys } from '../localization/ru/dev-commands-ru';

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
