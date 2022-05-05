class StudentService{
    static getEmailStudentsWCertification(students){
        const studentsWC = students.filter((student)=> student.haveCertification == true);
        const emailsSWC = studentsWC.map((student)=> student.email);
        return emailsSWC;
    }

    static getStudents500(students){
        const students500 = students.filter((student) => student.credits >500);
        return students500;
    }
}

module.exports = StudentService;