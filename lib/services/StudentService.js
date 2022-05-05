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
};

module.exports = StudentService