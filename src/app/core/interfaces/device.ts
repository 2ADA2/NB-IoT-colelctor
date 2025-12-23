import { Moment } from 'moment';

export interface DevFormInterface {
  time: Moment
  date: Moment
  interval: number
  intervalTime: number
  mode: string
  filter: number
}

export interface DevCredentialsInterface {
  author: string
  title: string
  comment: string
}

export interface ImitDataInterface {
  ampA: number
  ampB: number
  ampC: number
  freqA: number
  freqB: number
  freqC: number
  phaseA: number
  phaseB: number
  phaseC: number
  noise: number
}

export interface MeasInfoInterface {
  "MeasComment": {
    "Artist": string
    "Comment": string
    "Titel": string
  },
  "MeasSchedule": {
    "FIRmode": number
    "MeasType": string
    "Nois"?: number
    "Sig1"?: number[]
    "Sig2"?: number[]
    "Sig3"?: number[]
    "Tmeas": number
    "Trepeat": number
    "Tstart": string
  }
}

export interface MeasTargetInterface {
  MeasInf: MeasInfoInterface[]
  MeasList: string[]
  MeasState: string[]
}

export interface MeasFulfilledInterface {
  MeasInf: MeasInfoInterface[],
  MeasError: string[]
  MeasList: string[]
  MeasState: string[]
  SchedulState: string[]
}

export interface MeasResponseInterface {
  "meas add status": number
}
