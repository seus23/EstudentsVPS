const StudentService = require('./../../lib/services/StudentService');


describe("Test de StudentService:", () => {
    
    test("1) Emails de estudiantes con certificado", () => {
        const st = [{id:1,name:"lala",score:501,haveCertification:true,email:"lala@com"},{id:2,name:"lele",score:499,haveCertification:true,email:"lele@com"}];
        const studentsWithCertification = StudentService.getEmailStudentsWCertification(st);
        expect(studentsWithCertification.length).toBe(2);
    });

    test("2) Estudiantes con credits>500", () => {
        const st = [{credits:501,haveCertification:true,email:"lala@com"},{credits:499,haveCertification:true,email:"lele@com"}];
        const students500 = StudentService.getStudents500(st);
        expect(students500.length).toBe(1);
    });
});