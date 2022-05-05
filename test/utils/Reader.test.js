const Reader = require("./../../lib/utils/Reader");

describe("Test de Reader:", () => {
    test("Leyendo el archivo", () => {
        const reader = Reader.readJsonFile("visualpartners.json");
        expect(reader.length).toBe(51);
    });
});