const Parser = require("../parser");
const { RWR_TREND } = require("../texts");

module.exports = class RVRParser extends Parser {
    static parse(metar) {
        let part;
        const match = [];
        const regex = /R([0-9]{2}[LRC]?)\/([MP])?([0-9]{4})(?:V([MP])?([0-9]{4}))?(FT)?\/?([UND]?)/g;

        while (part = regex.exec(metar)) {
            match.push(part);
        }

        return {
            runway_visual_range: match.map(group => {
                const min = (RWR_TREND[group[2]] || '') + parseInt(group[3]);
                return {
                    runway: group[1],
                    min: (RWR_TREND[group[2]] || '') + parseInt(group[3]),
                    max: group[5] ? (RWR_TREND[group[4]] || '') + parseInt(group[5]) : min,
                    trend: RWR_TREND[group[7]] || 'not possible to determine'
                };
            })
        };
    }
};
