// if

function validate() {
    let numbers = [1,2,3,4,5];

    if (numbers.includes(10)) {
        console.log("El producto se encuentra activo");
    } else {
        throw Error("El producto está inactivo");
    }
}
validate();

enum HttpStatusError {
    badRequest = 400,
    notFound = 404,
    internalServerError = 500,
    cors = 0
}

const errorStatus = HttpStatusError.badRequest;

function validateHttpStatus(error: HttpStatusError) {
    switch (error) {
        case HttpStatusError.badRequest:
            console.log("te hace falta la propiedad XXXXX");
            break;
        case HttpStatusError.internalServerError:
            console.log("Se genero una excepcion")
            break;
        default: 
            console.log("error desconocido http stastus:" + error);
    }
}