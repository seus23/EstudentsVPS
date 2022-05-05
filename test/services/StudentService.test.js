const StudentService = require('./../../lib/services/StudentService');


describe("Test de StudentService:", () => {
    test("Listando los estudiantes", () => {
        const studentS = StudentService.getlistStudents();
        expect(studentS.length).toBe(51);
    });
});