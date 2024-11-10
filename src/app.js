export class Main {
    buildLightMessageForSimpleMinutes(totalAmountOfLights,amountOfTime, lightColor)
    {
        let message="";
        for(let i=0;i<amountOfTime;i++){
            message+=lightColor;
        }
        for(let i=0;i<(totalAmountOfLights-amountOfTime);i++){
            message+="O";
        }
        return message;
    }

}