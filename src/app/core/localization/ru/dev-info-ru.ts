export const DEV_INFO_RU = {
  HEADER: "Консоль управления",
  INFO: "Информация",
  STATUS: "Статус",
  STATE: "Состояние",
};

export const DEV_INFO_BLOCK_RU = {
  ID: "Идентификационный номер",
  MODEL: "Модель",
  SW_VERSION: "Версия программного обеспечения",
  PL_VERSION: "Версия платы",
  PR_VERSION: "Версия протокола",
  MODE: "Режим работы сети",
  INTERVAL: "Интервал ТУ пакетов, сек",
  NETWORK_STATE: "Состояние в сети",
  SAVE_IN_DB: "Записано в БД",
  DB_NUM: "Номер для отображения в БД",
  SAVE: "Сохранить",
  DELETE: "Удалить",
};

export const DEV_STATUS_RU_ERRORS = [
  "ERR_UNKNOWN_SYS_FLAG - неизвестно",
  "ERR_XTAL_LF_INIT_FLAG - ошибка кварца LFCLK",
  "ERR_XTAL_HFCLK_UP_FLAG - ошибка кварца HFCLK",
  "ERR_FDS_INIT_FLAG - ошибка инициализации модуля хранения настроек",
  "ERR_NFC_INIT_FLAG - ошибка инициализации модуля NFC",
  "ERR_ADS_INIT_FLAG - ошибка иниц-ции модуля преобразования сигнала сенсора",
  "ERR_PWR_CTRL_INIT_FLAG - ошибка иниц-ции модуля подсчета потребления(заряда батареи)",
  "ERR_SENS_PWR_ON_FLAG - ошибка включения питания сенсора",
  "ERR_MODEM_INIT_FLAG - ошибка иниц-ции модуля модема устройства",
  "ERR_MODEM_LINK_FLAG - ошибка линии связи с модемом устройства",
  "ERR_MODEM_SIM_ERR_FLAG - ошибка доступа SIM-карты",
  "ERR_MODEM_REG_CELL_FLAG - ошибка регистрации в сети оператора",
  "ERR_MODEM_CERT_FLAG - ошибка наличия/доступа к файлу сертификату",
  "SERVER_HOST_ACCESS_FLAG - устройство подключено к удаленному серверу(MQTT)",
  "SERVER_FTP_ACCESS_FLAG - подключено к удаленному серверу (FTP)",
  "SERVER_REGISTERED_FLAG - устройство зарегистрировано на сервере с присвоением REG_UID",
];

export const DEV_RU_MEAS_STATES = {
  "measState1": "измерение принято",
  "measState2": "измерение в процессе",
  "measState3": "время задано неверно",
};

export const DEV_RU_STATES = [
  " - DEFAULT_STATE",
  " - подано питание на датчик и схему измерения",
  " - готовность произвести измерение",
  " - получение данных",
  " - данные успешно получены",
  " - таймаут получения данных",
  " - получение данных в режиме имитатора",
  " - ошибка подключения",
];

export const CONFIG_RU_STATE = {
  CONFIG_STATE: "Состояние конфигурирования",
  NOT_CONFIGURED: "Не сконфигурировано",
  CONFIGURED: "Сконфигурировано",
  REGISTRATION_STATE: "Состояние регистрации",
  REGISTERED: "Зарегистрировано",
  NOT_REGISTERED: "Не зарегистрировано",
  DEVICE_TIME: "Время на устройстве",
  BATTERY_LEVEL: "Заряд батареи",
  CELL_RECEPTION_LEVEL: "Уровень приема соты (RSII)",
  TEMPERATURE: "Температура",
};

