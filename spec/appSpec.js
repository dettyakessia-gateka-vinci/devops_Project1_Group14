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
   
   
});
