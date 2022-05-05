const Reader = require('./../utils/Reader');
const StudentService = require('./../services/StudentService');

class StudentController{
    static getListaEstudiantes(){
        const estudiantes = Reader.readJsonFile("visualpartners.json");
        const lista = StudentService.getlistStudents(estudiantes);
        return lista;
    };

    static getEmailStudentsWithCert(){
        

    };

    static getStudentsWCredits500(){

    };
};

module.exports = StudentController