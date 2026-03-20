export const DEV_COMMANDS_RU = {
  HEADER: "Консоль управления",
  COMMANDS: "Команды устройству",
  SEND: "Отправить",
  CANCEL: "Отменить",
};

export const DEV_COMMAND_NAMES_RU = {
  REGISTRATION: "Зарегистрировать устройство",
  GET_INFO: "Запросить состояние устройства",
  SCHEDULE: "Установить период TU пакетов",
  UPDATE_LOCATION: "Обновить координаты устройства",
  GET_LOCATION: "Запросить местоположение",
  GET_SENSOR: "Запросить параметры датчика",
  SET_SENSOR: "Установить параметры датчика",
  DEBUG: "Включить отладочные данные",
  REBOOT: "Перезагрузить устройство",
  CERTIFICATE: "Обновить сертификат",
  SOFTWARE: "Обновить встроенное ПО",
  UNKNOWN: "no command",
};

export type DevCommandName =
  | typeof DEV_COMMAND_NAMES_RU.REGISTRATION
  | typeof DEV_COMMAND_NAMES_RU.GET_INFO
  | typeof DEV_COMMAND_NAMES_RU.SCHEDULE
  | typeof DEV_COMMAND_NAMES_RU.UPDATE_LOCATION
  | typeof DEV_COMMAND_NAMES_RU.GET_LOCATION
  | typeof DEV_COMMAND_NAMES_RU.GET_SENSOR
  | typeof DEV_COMMAND_NAMES_RU.SET_SENSOR
  | typeof DEV_COMMAND_NAMES_RU.DEBUG
  | typeof DEV_COMMAND_NAMES_RU.REBOOT
  | typeof DEV_COMMAND_NAMES_RU.CERTIFICATE
  | typeof DEV_COMMAND_NAMES_RU.SOFTWARE
  | typeof DEV_COMMAND_NAMES_RU.UNKNOWN;

export const DEV_COMMANDS_STATUS_RU = {
  PENDING: 'Отправка',
  "accepted for execution": "Принято на исполнение",
  "execution": "Выполнение",
  "OK": "OK",
  "err": "Ошибка исполнения",
  "dropped": "Отменено",
};

export type DevCommandKeys = keyof typeof DEV_COMMAND_NAMES_RU;
