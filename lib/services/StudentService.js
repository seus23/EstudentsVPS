const Reader = require('./../utils/Reader');

class StudentService{
    static getlistStudents(students){
        return students;
    };

    static getEmailStudentsWCertification(students){
        const listStudents = StudentService.getlistStudents(students);
        const studentsWC = listStudents.filter((student)=> student.haveCertification == true);
        return studentsWC;
    };

    static getStudents500(students){
        const listStudents = StudentService.getlistStudents(students);
        const students500 = listStudents.filter((student) => student.credits >500);
        return students500
    };
};

module.exports = StudentService