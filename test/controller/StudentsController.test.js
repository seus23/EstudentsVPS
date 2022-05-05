const StudentController = require("./../../lib/controller/StudentsController");


describe("Test de StudentController:", () => {
    test("1) Listando los estudiantes", () => {
        const lista = StudentController.getListaEstudiantes();
        expect(lista.length).toBe(51);
    });

    test("2) Emails de estudiantes con certificado", () => {
        const emails = StudentController.getEmailStudentsWithCert();
        expect(emails.length).toBe(29);
    });

    test("3) Estudiantes con credits>500", () => {
        const credits = StudentController.getStudentsWCredits500();
        expect(credits.length).toBe(27);
    });
});