// decorador de propiedades
function NotNull(message: string): PropertyDecorator {
    return function(target: object, key: string | symbol) {
        const getter = function () {
            return target;
        }

        const setter = function (data: any) {
            if (data === null || data === undefined) {
                throw new Error(message); 
            }

            target = data;
        }

        Object.defineProperty(target, key, 
        {
            get: getter,
            set: setter,
            enumerable: true, 
            configurable: true,
        });
    }
}

function NotEmpty(message: string): PropertyDecorator {
    return function(target: object, key: string | symbol) {
        const getter = function () {
            return target;
        }

        const setter = function (data: any) {
            if (typeof(data) == 'string' && data == "") {
                throw new Error(message); 
            }

            target = data;
        }

        Object.defineProperty(target, key, 
        {
            get: getter,
            set: setter,
            enumerable: true, 
            configurable: true,
        });
    }
}

class Post {
    //@NotNull("No puede contener un titulo nulo o undefined")
    @NotEmpty("No puede contener titulos vacíos")
    title: string | null;
    pages: number;
    cp: string;
    constructor(title: string | null, pages: number, cp: string) {
        this.title = title;
        this.pages = pages;
        this.cp = cp;
    }
}

const post = new Post("hola", 100, "91000");
console.log(post);