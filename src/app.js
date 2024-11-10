export class Main {
    buildLightMessageForSimpleMinutes(totalAmountOfLights,amountOfTime, lightColor)
    {
        if (amountOfTime === 1) return lightColor + "OOO";
        if (amountOfTime === 2) return lightColor + lightColor + "OO";

        return "OOOO";
    }

}