const Parser = require("../parser");

module.exports = class WindParser extends Parser {
    static parse(metar) {
        const match = ` ${metar} `.match(/\s([0-9]{3}|VRB)([0-9]{2})(?:(G[0-9]{2}))?(KT|MPS)\s/);

        if (!match) {
            return {
                wind: null
            };
        }

        const speed = parseInt(match[2], 10);
        let speedKt;
        let speedMps;

        if (match[4] === "KT") {
            speedKt = speed;
            speedMps = Math.round(speed / 1.94384 * 100) / 100;
        } else {
            speedMps = speed;
            speedKt = Math.round(speed * 1.94384 * 100) / 100;
        }

        return {
            wind: {
                direction: parseInt(match[1], 10),
                speedKt,
                speedMps,
                gust: match[3] || false,
                variableDirection: match[1] === "VRB"
            }
        };
    }
};
