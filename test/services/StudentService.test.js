const StudentService = require('./../../lib/services/StudentService');


describe("Test de StudentService:", () => {
    test("1) Listando los estudiantes", () => {
        const st = [{id:1,name:"lala",score:501,haveCertification:true},{id:2,name:"lele",score:499,haveCertification:true}];
        const studentS = StudentService.getlistStudents(st);
        expect(studentS.length).toBe(2);
    });

    test("2) Emails de estudiantes con certificado", () => {
        const st = [{id:1,name:"lala",score:501,haveCertification:true},{id:2,name:"lele",score:499,haveCertification:true}];
        const studentsWithCertification = StudentService.getEmailStudentsWCertification(st);
        expect(studentsWithCertification.length).toBe(2);
    });

    test("3) Estudiantes con credits>500", () => {
        const st = [{id:1,name:"lala",credits:501,haveCertification:true},{id:2,name:"lele",credits:499,haveCertification:true}];
        const students500 = StudentService.getStudents500(st);
        expect(students500.length).toBe(1);
    });
});