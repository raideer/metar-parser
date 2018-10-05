const Parser = require("../parser");

module.exports = class TimeParser extends Parser {
    static parse(metar) {
        const match = ` ${metar} `.match(/\s([0-9]{2})([0-9]{2})([0-9]{2})Z\s/);

        if (!match) {
            return {
                time: null
            };
        }

        const utcDate = new Date();

        utcDate.setUTCDate(match[1]);
        utcDate.setUTCHours(match[2]);
        utcDate.setUTCMinutes(match[3]);

        return {
            time: {
                day: parseInt(match[1], 10),
                hour: parseInt(match[2], 10),
                minute: parseInt(match[3], 10),
                utc: utcDate.toUTCString()
            }
        };
    }
};
