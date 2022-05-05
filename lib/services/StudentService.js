const Reader = require('./../utils/Reader');

class StudentService{
    static getlistStudents(){
        return Reader.readJsonFile("visualpartners.json");
    }

}

module.exports = StudentService