export class Main {
    buildLightMessageForSimpleMinutes(totalAmountOfLights,amountOfTime, lightColor)
    {
        if (amountOfTime === 1) return lightColor + "OOO";
        if (amountOfTime === 2) return lightColor + lightColor + "OO";
        if (amountOfTime === 3) return lightColor + lightColor + lightColor + "O";

        return "OOOO";
    }

}