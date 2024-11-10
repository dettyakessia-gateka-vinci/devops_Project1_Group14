import { Main } from "../src/app.js";

describe("the function should return the answer when given a time", function() {
  
    it("buildLightMessageForSimpleMinutes should return OOOO when given 0 minute", function() {
        let main = new Main();

        let result = main.buildLightMessageForSimpleMinutes(4, 0, "Y");

        expect(result).toBe("OOOO");
    });
});
