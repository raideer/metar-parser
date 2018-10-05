const Parser = require("../parser");

module.exports = class TempDewParser extends Parser {
    static parse(metar) {
        const match = ` ${metar} `.match(/\s(M?[0-9]{2}\/M?[0-9]{2})\s/);

        if (!match) {
            return {
                temperature: null
            };
        }

        const tempdew = match[1].split("/").map(value => {
            if (value.slice(0, 1) === "M") {
                return value.slice(1, 3) * -1;
            }
            return 1 * value;
        });

        return {
            temperature: {
                temperatureC: tempdew[0],
                dewpointC: tempdew[1],
                temperatureFh: Math.round((tempdew[0] * 1.8 + 32) * 100) / 100,
                dewpointFh: Math.round((tempdew[1] * 1.8 + 32) * 100) / 100
            }
        };
    }
};
