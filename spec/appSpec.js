import { Main } from "../src/app.js";

describe("the function should return the answer when given a time", function() {
    const main = new Main();

    it("buildLightMessageForSimpleMinutes should return OOOO when given 0 minute", function() {
        const result = main.buildLightMessageForSimpleMinutes(0);

        expect(result).toBe("OOOO");
    });

    it("buildLightMessageForSimpleMinutes should return YOOO when given 1 minute", function() {
        const result = main.buildLightMessageForSimpleMinutes(1);

        expect(result).toBe("YOOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYOO when given 2 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(2);

        expect(result).toBe("YYOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYYO when given 3 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(3);

        expect(result).toBe("YYYO");
    });
    it("buildLightMessageForSimpleMinutes should return YYYY when given 4 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(4);

        expect(result).toBe("YYYY");
    });
    it("buildLightMessageForSimpleMinutes should return OOOO when given 5 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(5);

        expect(result).toBe("OOOO");
    });
    it("buildLightMessageForSimpleMinutes should return YOOO when given 6 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(6);

        expect(result).toBe("YOOO");
    });
    it("buildLightMessageForFiveMinutes should return OOOOOOOOOOO when given 0 minute", function() {
        const result = main.buildLightMessageForFiveMinutes(0);

        expect(result).toBe("OOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return OOOOOOOOOOO when given 1 minute", function() {
        const result = main.buildLightMessageForFiveMinutes(1);

        expect(result).toBe("OOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YOOOOOOOOOO when given 5 minutes", function() {
        const result = main.buildLightMessageForFiveMinutes(5);

        expect(result).toBe("YOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YOOOOOOOOOO when given 6 minutes", function() {
        const result = main.buildLightMessageForFiveMinutes(6);

        expect(result).toBe("YOOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYOOOOOOOOO when given 10 minutes", function() {
        const result = main.buildLightMessageForFiveMinutes(10);

        expect(result).toBe("YYOOOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYROOOOOOOO when given 15 minutes", function() {
        const result = main.buildLightMessageForFiveMinutes(15);

        expect(result).toBe("YYROOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYRYOOOOOOO when given 20 minutes", function() {
        const result = main.buildLightMessageForFiveMinutes(20);

        expect(result).toBe("YYRYOOOOOOO");
    });
    it("buildLightMessageForFiveMinutes should return YYRYYRYYRYY when given 56 minutes", function() {
        const result = main.buildLightMessageForFiveMinutes(56);

        expect(result).toBe("YYRYYRYYRYY");
    });
    it("buildLightMessageForSimpleHours should return OOOO when given 0 hour", function() {
        const result = main.buildLightMessageForSimpleHours( 0);

        expect(result).toBe("OOOO");
    }); 
    it("buildLightMessageForSimpleHours should return ROOO when given 1 hour", function() {
        const result = main.buildLightMessageForSimpleHours(1);

        expect(result).toBe("ROOO");
    });
    it("buildLightMessageForSimpleHours should return RROO when given 2 hours", function() {
        const result = main.buildLightMessageForSimpleHours( 2);

        expect(result).toBe("RROO");
    });
});
