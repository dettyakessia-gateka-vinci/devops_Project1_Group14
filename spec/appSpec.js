import { Main } from "../src/app.js";

describe("the function should return the answer when given a time", function() {
    let main = new Main();

    it("buildLightMessageForSimpleMinutes should return OOOO when given 0 minute", function() {
        let result = main.buildLightMessageForSimpleMinutes(4, 0, "Y");

        expect(result).toBe("OOOO");
    });

    it("buildLightMessageForSimpleMinutes should return YOOO when given 1 minute", function() {
        let result = main.buildLightMessageForSimpleMinutes(4, 1, "Y");

        expect(result).toBe("YOOO");
    });
    it("buildLightMessageForSimpleMinutes should return YYOO when given 2 minutes", function() {
        let result = main.buildLightMessageForSimpleMinutes(4, 2, "Y");

        expect(result).toBe("YYOO");
    });
});
