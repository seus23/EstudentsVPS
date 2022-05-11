# API EstudentsVPS 

## **Dependencias:**

### * Jest
    Para realizar las pruebas de unidad a cada uno de los componentes

### * ESLint
    Para corregir y tener una mejor calidad en el código.

### * Express
    Para ejecutar el API.


## **Diseño de componentes:**
*Los componentes están divididos en 3 partes*
1. ***Reader:***
> *Es el encargado de leer el archivo visualpartners.json que funge como base de datos y transformarlo en una lista.*

1. ***StudentService:***
> *Contiene dos métodos estáticos, ambos reciben como parámetro una lista.*
> *El primer método selecciona de la lista a los estudiantes que cuentan con una certificación y regresa un arreglo nuevo que contiene solo los correos de dichos estudiantes.*
> *El segundo método selecciona de la lista los estudiantes que cuentan con un crédito mayor a 500 puntos y regresa una nueva lista con todos los datos de estos estudiantes.*

1. ***StudentController:***
> *Se encarga de mezclar los métodos anteriores, y enviando a StudentService la lista procesada por Reader*


## **Se trato de apegar el proyecto lo más posible a está imagen*
<img width="1247" alt="image" src="https://user-images.githubusercontent.com/17634377/165870375-fe5a730a-eada-4abe-ac9c-42334e003b18.png">

***Creditos de la imagen*** @carlogilmar https://github.com/carlogilmar


## API

Así funciona el API

| Endpoint | Response |
| ------------- |:-------------:|
|`http://localhost/3000/v1/students`|Lista de estudiantes|
|`http://localhost/3000/v1/students/emails`|Lista de correos de los estudiantes Certificados|
|`http://localhost/3000/v1/students/credits`|Lista de estudiantes con créditos mayor a 500 puntos|

