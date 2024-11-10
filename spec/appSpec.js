import { Main } from "../src/app.js";

describe("the function should return the answer when given a time", function() {
    const main = new Main();

    it("buildLightMessageForSimpleMinutes should return OOOO when given 0 minute", function() {
        const result = main.buildLightMessageForSimpleMinutes(4, 0, "Y");

        expect(result).toBe("OOOO");
    });

    it("buildLightMessageForSimpleMinutes should return YOOO when given 1 minute", function() {
        const result = main.buildLightMessageForSimpleMinutes(4, 1, "Y");

        expect(result).toBe("YOOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYOO when given 2 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(4, 2, "Y");

        expect(result).toBe("YYOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYYO when given 3 minutes", function() {
        const result = main.buildLightMessageForSimpleMinutes(4, 3, "Y");

        expect(result).toBe("YYYO");
    });
});
