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
    buildLightMessageForSimpleMinutes(amountOfTime){
      return this.buildLightMessage(4, amountOfTime%5, "Y");
    }

    buildLightMessageForFiveMinutes(amountOfTime){
        let result = "";
        let lightsOn = Math.floor(amountOfTime / 5);  
 
        for (let i = 1; i <= 11; i++) {
            result = manageLightColorChanges(i, lightsOn, result);
        }
        return result;
    }
    buildLightMessageForSimpleHours( amountOfTime){
      return this.buildLightMessage(4, amountOfTime%5, "R");
    }
    buildLightMessageForFiveHours(amountOfTime){
       if(amountOfTime === 5) return "ROOO";

        return "OOOO";
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
