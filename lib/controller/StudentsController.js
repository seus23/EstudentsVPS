const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");

class StudentController{
    static getListaEstudiantes(){
        const lista = Reader.readJsonFile("visualpartners.json");
        return lista;
    }

    static getEmailStudentsWithCert(){
        const listaestudiantes = StudentController.getListaEstudiantes();
        const emailStudiantes = StudentService.getEmailStudentsWCertification(listaestudiantes);
        return emailStudiantes;
    }

    static getStudentsWCredits500(){
        const listaestudiantes = StudentController.getListaEstudiantes();
        const estudiantes500 = StudentService.getStudents500(listaestudiantes);
        return estudiantes500;

    }
}

module.exports = StudentController;