import { Forecast } from '../core/interfaces/forecast';

export const FORECASTS: Array<Forecast> = [
   {
       cityId: 0,
       conditions: 'cloudy',
       wind: {
           speed: 6,
           direction: 'north-west'
       },
       temperature: {
           day: {
               min: 14,
               max: 18
           },
           night: {
               min: 5,
               max: 8
           }
       }
   },
   {
       cityId: 1,
       conditions: 'rain',
       wind: {
           speed: 3,
           direction: 'east'
       },
       temperature: {
           day: {
               min: 11,
               max: 14
           },
           night: {
               min: 3,
               max: 7
           }
       }
   },
   {
       cityId: 2,
       conditions: 'sunny',
       wind: {
           speed: 2,
           direction: 'south'
       },
       temperature: {
           day: {
               min: 22,
               max: 28
           },
           night: {
               min: 16,
               max: 19
           }
       }
   }
];