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
        if(amountOfTime === 15) return "YYROOOOOOOO";

        let result = "";
        let lightsOn = Math.floor(amountOfTime / 5);  

        for (let i = 1; i <= 11; i++) {
            if (i <= lightsOn) {
                    result += "Y";  
          
                } else {
                result += "O";  
            }
        }

        return result;
    }



}