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
};

export const DEV_STATUS_RU_ERRORS = {
  "404": "Устройство не найдено",

  "0": "ERR_UNKNOWN_SYS_FLAG - неизвестно",
  "1": "ERR_XTAL_LF_INIT_FLAG - ошибка кварца LFCLK",
  "2": "ERR_XTAL_HFCLK_UP_FLAG - ошибка кварца HFCLK",
  "3": "ERR_FDS_INIT_FLAG - ошибка инициализации модуля хранения настроек",
  "4": "ERR_NFC_INIT_FLAG - ошибка инициализации модуля NFC",
  "5": "ERR_ADS_INIT_FLAG - ошибка иниц-ции модуля преобразования сигнала сенсора",
  "6": "ERR_PWR_CTRL_INIT_FLAG - ошибка иниц-ции модуля подсчета потребления(заряда батареи)",
  "7": "ERR_SENS_PWR_ON_FLAG - ошибка включения питания сенсора",
  "8": "ERR_MODEM_INIT_FLAG - ошибка иниц-ции модуля модема устройства",
  "9": "ERR_MODEM_LINK_FLAG - ошибка линии связи с модемом устройства",
  "10": "ERR_MODEM_SIM_ERR_FLAG - ошибка доступа SIM-карты ",
  "11": "ERR_MODEM_REG_CELL_FLAG - ошибка регистрации в сети оператора",
  "12": "ERR_MODEM_CERT_FLAG - ошибка наличия/доступа к файлу сертификату",
  "13": "SERVER_HOST_ACCESS_FLAG - устройство подключено  к удаленному серверу(MQTT)",
  "14": "SERVER_FTP_ACCESS_FLAG - подключено к удаленному серверу (FTP)",
  "15": "SERVER_REGISTERED_FLAG - устройство зарегистрировано на сервере с присвоением REG_UID",

  "measState1": "измерение принято",
  "measState2": "измерение в процессе",
  "measState3": "время задано неверно",
};

export const STATES = {
  "0": " - DEFAULT_STATE",
  "1": " - подано питание на датчик и схему измерения",
  "2": " - готовность произвести измерение",
  "3": " - получение данных",
  "4": " - данные успешно получены",
  "5": " - таймаут получения данных",
  "6": " - получение данных в режиме имитатора",
  "7": " - ошибка подключения",
};

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

