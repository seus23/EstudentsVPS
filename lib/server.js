const StudentController = require("./controller/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json("Bienvenido al API de Students Visual Partner-Ship");
});

app.listen(port, () => {
    console.log(`API de Students Visual Partner-Ship ejecutandose en localhost:${port}`);
});