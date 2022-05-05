const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const fileread = fs.readFileSync(path);
        return JSON.parse(fileread);
    }
}

module.exports = Reader;