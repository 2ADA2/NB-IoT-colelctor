export const DEV_COMMANDS_RU = {
  HEADER: "Консоль управления",
  COMMANDS: "Команды устройству",
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
};

export type DevCommandKeys = keyof typeof DEV_COMMAND_NAMES_RU;
