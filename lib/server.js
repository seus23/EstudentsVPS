const StudentController = require("./controller/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json("Bienvenido al API de Students Visual Partner-Ship");
});

app.get("/v1/students", (request, response) => {
    const listaEstudiantes = StudentController.getListaEstudiantes();
    response.json(listaEstudiantes);
});

app.get("/v1/students/emails", (request, response) => {
    const emailsEstudiantesCertificados = StudentController.getEmailStudentsWithCert();
    response.json(emailsEstudiantesCertificados);
});

app.listen(port, () => {
    console.log(`API de Students Visual Partner-Ship ejecutandose en localhost:${port}`);
});