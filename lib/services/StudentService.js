const Reader = require('./../utils/Reader');

class StudentService{
    static getlistStudents(){
        return Reader.readJsonFile("visualpartners.json");
    };

    static getEmailStudentsWCertification(){
        const listStudents = StudentService.getlistStudents();
        const studentsWC = listStudents.filter((student)=> student.haveCertification == true);
        return studentsWC;
    };

    static getStudents500(){
        const listStudents = StudentService.getlistStudents();
        const students500 = listStudents.filter((student) => student.credits >500);
        return students500;
    };
};

module.exports = StudentService