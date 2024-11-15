import { Main } from "../src/app.js";

describe("the function should return the answer when given a time, with the outputs being “O” for off, “Y” for yellow, and “R” for red", function () {
    const main = new Main();

    it("buildLightMessageForSimpleMinutes should return OOOO when given 0 minute", function () {
        const result = main.buildLightMessageForSimpleMinutes(0);

        expect(result).toBe("OOOO");
    });

    it("buildLightMessageForSimpleMinutes should return YOOO when given 1 minute", function () {
        const result = main.buildLightMessageForSimpleMinutes(1);

        expect(result).toBe("YOOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYOO when given 2 minutes", function () {
        const result = main.buildLightMessageForSimpleMinutes(2);

        expect(result).toBe("YYOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYYO when given 3 minutes", function () {
        const result = main.buildLightMessageForSimpleMinutes(3);

        expect(result).toBe("YYYO");
    });
    it("buildLightMessageForSimpleMinutes should return YYYY when given 4 minutes", function () {
        const result = main.buildLightMessageForSimpleMinutes(4);

        expect(result).toBe("YYYY");
    });
    it("buildLightMessageForSimpleMinutes should return OOOO when given 5 minutes", function () {
        const result = main.buildLightMessageForSimpleMinutes(5);

        expect(result).toBe("OOOO");
    });
    it("buildLightMessageForSimpleMinutes should return YOOO when given 6 minutes", function () {
        const result = main.buildLightMessageForSimpleMinutes(6);

        expect(result).toBe("YOOO");
    });
    it("buildLightMessageForFiveMinutes should return OOOOOOOOOOO when given 0 minute", function () {
        const result = main.buildLightMessageForFiveMinutes(0);

        expect(result).toBe("OOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return OOOOOOOOOOO when given 1 minute", function () {
        const result = main.buildLightMessageForFiveMinutes(1);

        expect(result).toBe("OOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YOOOOOOOOOO when given 5 minutes", function () {
        const result = main.buildLightMessageForFiveMinutes(5);

        expect(result).toBe("YOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YOOOOOOOOOO when given 6 minutes", function () {
        const result = main.buildLightMessageForFiveMinutes(6);

        expect(result).toBe("YOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYOOOOOOOOO when given 10 minutes", function () {
        const result = main.buildLightMessageForFiveMinutes(10);

        expect(result).toBe("YYOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYROOOOOOOO when given 15 minutes", function () {
        const result = main.buildLightMessageForFiveMinutes(15);

        expect(result).toBe("YYROOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYRYOOOOOOO when given 20 minutes", function () {
        const result = main.buildLightMessageForFiveMinutes(20);

        expect(result).toBe("YYRYOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYRYYRYYRYY when given 56 minutes", function () {
        const result = main.buildLightMessageForFiveMinutes(56);

        expect(result).toBe("YYRYYRYYRYY");
    });
    it("buildLightMessageForSimpleHours should return OOOO when given 0 hour", function () {
        const result = main.buildLightMessageForSimpleHours(0);

        expect(result).toBe("OOOO");
    });
    it("buildLightMessageForSimpleHours should return ROOO when given 1 hour", function () {
        const result = main.buildLightMessageForSimpleHours(1);

        expect(result).toBe("ROOO");
    });
    it("buildLightMessageForSimpleHours should return RROO when given 2 hours", function () {
        const result = main.buildLightMessageForSimpleHours(2);

        expect(result).toBe("RROO");
    });
    it("buildLightMessageForSimpleHours should return OOOO when given 5 hours", function () {
        const result = main.buildLightMessageForSimpleHours(5);

        expect(result).toBe("OOOO");
    });
    it("buildLightMessageForSimpleHours should return ROOO when given 6 hours", function () {
        const result = main.buildLightMessageForSimpleHours(6);

        expect(result).toBe("ROOO");
    });
    it("buildLigthMessageForFiveHours should return OOOO when given 0 hour", function () {
        const result = main.buildLightMessageForFiveHours(0);

        expect(result).toBe("OOOO");
    });
    it("buildLigthMessageForFiveHours should return OOOO when given 1 hour", function () {
        const result = main.buildLightMessageForFiveHours(1);

        expect(result).toBe("OOOO");
    });
    it("buildLigthMessageForFiveHours should return ROOO when given 5 hours", function () {
        const result = main.buildLightMessageForFiveHours(5);

        expect(result).toBe("ROOO");
    });
    it("buildLigthMessageForFiveHours should return RROO when given 10 hours", function () {
        const result = main.buildLightMessageForFiveHours(10);

        expect(result).toBe("RROO");
    });
    it("buildLigthMessageForFiveHours should return RROO when given 13 hours", function () {
        const result = main.buildLightMessageForFiveHours(13);

        expect(result).toBe("RROO");
    });
    it("buildLightMessageForSeconds should return R when given 0 second", function () {
        const result = main.buildLightMessageForSeconds(0);

        expect(result).toBe("R");
    });
    it("buildLightMessageForSeconds should return O when given 1 second", function () {
        const result = main.buildLightMessageForSeconds(1);

        expect(result).toBe("O");
    });
    it("buildLightMessageForSeconds should return R when given 2 seconds", function () {
        const result = main.buildLightMessageForSeconds(2);

        expect(result).toBe("R");
    });
    it("buildLightMessageForSeconds should return O when given 3 seconds", function () {
        const result = main.buildLightMessageForSeconds(3);

        expect(result).toBe("O");
    });
    it("buildLightMessageForSeconds should return R when given 4 seconds", function () {
        const result = main.buildLightMessageForSeconds(4);

        expect(result).toBe("R");
    });
    it("buildLightMessageForSeconds should return O when given 5 seconds", function () {
        const result = main.buildLightMessageForSeconds(5);

        expect(result).toBe("O");
    });


    it("berlinClock should return O RRRO RROO YYROOOOOOOO YYOO when given 17:17:17", function () {
        const date = new Date(2023, 10, 8, 17, 17, 17);
        const timestamp = date.getTime();

        const result = main.berlinClock(timestamp);

        expect(result).toBe("O RRRO RROO YYROOOOOOOO YYOO");
    });


    it("berlinClock should return R RRRR RRRO YYRYYRYYRYO YYYO when given 23:53:10", function () {
        const date = new Date(2023, 10, 8, 23, 53, 10);
        const timestamp = date.getTime();

        const result = main.berlinClock(timestamp);

        expect(result).toBe("R RRRR RRRO YYRYYRYYRYO YYYO");
    });

    it("berlinClock should return R RROO RRRR YYRYYRYYROO OOOO when given 14:45:10", function () {
        const date = new Date(2023, 10, 8, 14, 45, 10);
        const timestamp = date.getTime();

        const result = main.berlinClock(timestamp);

        expect(result).toBe("R RROO RRRR YYRYYRYYROO OOOO");
    });




});
