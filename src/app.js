export class Main {
    buildLightMessage(totalAmountOfLights, amountOfTime, lightColor) {
        let message = "";
        for (let i = 0; i < amountOfTime; i++) {
            message += lightColor;
        }
        for (let i = 0; i < (totalAmountOfLights - amountOfTime); i++) {
            message += "O";
        }
        return message;
    }
    buildLightMessageForSimpleMinutes(amountOfTime) {
        return this.buildLightMessage(4, amountOfTime % 5, "Y");
    }

    buildLightMessageForFiveMinutes(amountOfTime) {
        let result = "";
        let lightsOn = Math.floor(amountOfTime / 5);

        for (let i = 1; i <= 11; i++) {
            result = manageLightColorChanges(i, lightsOn, result);
        }
        return result;
    }
    buildLightMessageForSimpleHours(amountOfTime) {
        return this.buildLightMessage(4, amountOfTime % 5, "R");
    }
    buildLightMessageForFiveHours(amountOfTime) {
        return this.buildLightMessage(4, Math.floor(amountOfTime / 5), "R");
    }
    buildLightMessageForSeconds(amountOfTime) {
        if (amountOfTime % 2 === 0) return "R";

        return "O";
    }
    berlinClock(timestamp) {
        const date = new Date(timestamp);

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return this.buildLightMessageForSeconds(seconds) + " " +
            this.buildLightMessageForFiveHours(hours) + " " +
            this.buildLightMessageForSimpleHours(hours) + " " +
            this.buildLightMessageForFiveMinutes(minutes) + " " +
            this.buildLightMessageForSimpleMinutes(minutes);

    }

}

function manageLightColorChanges(i, lightsOn, result) {
    if (i <= lightsOn) {
        if (i % 3 === 0) {
            result += "R";
        } else {
            result += "Y";
        }
    } else {
        result += "O";
    }
    return result;
}
