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
        return "OOOOOOOOOOO";
    }
    


}