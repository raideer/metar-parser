const Parser = require("../parser");
const { UNITS } = require("../texts");

module.exports = class VisibilityParser extends Parser {
    static parse(metar) {
        const match = ` ${metar} `.match(/\s([0-9]{4})|((?:[0-9]\/)?[0-9]{1,2})(SM|KM)\s/);

        if (!match) {
            return {
                visibility: null
            };
        }

        const units = UNITS[match[3]] || "meters";
        const distance = parseInt(match[1] || match[2], 10);

        let distanceMeters;
        let distanceFeet;

        if (units === "meters") {
            distanceMeters = distance;
            distanceFeet = Math.round(distance * 3.2808);
        } else {
            distanceFeet = distance;
            distanceMeters = Math.round(distance / 3.2808);
        }

        return {
            visibility: {
                meters: distanceMeters,
                feet: distanceFeet
            }
        };
    }
};
