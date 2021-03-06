# metar-parser [![npm version](https://badge.fury.io/js/metar-parser.svg)](https://badge.fury.io/js/metar-parser)
Parses METAR and SPECI weather reports.

*Remarks are still Work In Progress*

## Installation
```
npm i metar-parser
```
```
yarn add metar-parser
```

## Example
```javascript
const parse = require('metar-parser');

const parsed = parse('METAR CYWG 172000Z 30015G25KT 3/4SM R36/4000FT/D -SN BLSN BKN008 OVC040 M05/M08 A2992 REFZRA WS RWY36 RMK SF5NS3 SLP134');
console.log(parsed);
```

```json
{
   "type":"METAR",
   "auto":false,
   "station":"CYWG",
   "time":{
      "day":17,
      "hour":20,
      "minute":0,
      "date":"Wed, 17 Oct 2018 20:00:38 GMT"
   },
   "wind":{
      "direction":300,
      "speedKt":15,
      "speedMps":7.72,
      "gust":25,
      "variableDirection":false,
      "variation":null
   },
   "correction":false,
   "nosig":false,
   "visibility":{
      "meters":1207,
      "feet":3960,
      "miles":0.75,
      "kilometers":1.21
   },
   "temperature":{
      "celsius":-5,
      "fahrenheit":23
   },
   "dewpoint":{
      "celsius":-8,
      "fahrenheit":17.6
   },
   "altimeter":{
      "inches":29.92,
      "millibars":1013
   },
   "clouds":[
      {
         "code":"BKN",
         "meaning":"broken",
         "altitude":800,
         "type":null,
         "typeMeaning":null
      },
      {
         "code":"OVC",
         "meaning":"overcast",
         "altitude":4000,
         "type":null,
         "typeMeaning":null
      }
   ],
   "runwayVisualRange":[
      {
         "runway":"36",
         "min":4000,
         "minRange":"exact",
         "max":4000,
         "maxRange":"exact",
         "trend":"downward"
      }
   ],
   "weather":[
      {
         "codes":[
            "SN"
         ],
         "intensity":"light",
         "descriptor":null,
         "precipitation":"snow",
         "obscuration":null
      },
      {
         "codes":[
            "BL",
            "SN"
         ],
         "intensity":"moderate",
         "descriptor":"blowing",
         "precipitation":"snow",
         "obscuration":null
      }
   ],
   "cavok":false,
   "windshear":[
      "36"
   ],
   "verticalVisibility":null,
   "recentWeather":[
      {
         "code":"FZ",
         "meaning":"freezing"
      },
      {
         "code":"RA",
         "meaning":"rain"
      }
   ],
   "remarks": {} // Not fully implemented yet
}
```