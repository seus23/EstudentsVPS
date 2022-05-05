const StudentService = require('./../../lib/services/StudentService');


describe("Test de StudentService:", () => {
    test("1) Listando los estudiantes", () => {
        const studentS = StudentService.getlistStudents();
        expect(studentS.length).toBe(51);
    });

    test("2) Emails de estudiantes con certificado", () => {
        const studentsWithCertification = StudentService.getEmailStudentsWCertification();
        expect(studentsWithCertification.length).toBe(29);
    });
});