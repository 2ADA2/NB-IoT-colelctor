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
