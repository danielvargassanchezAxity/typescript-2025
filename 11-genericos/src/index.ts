function concat(array1: number[], array2: number[]): number[] {
    array2.forEach(x => {
        array1.push(x);
    });

    return array1;
}

const newArray = concat([1,2,3,4,5], [6,7,8,9,10]);

function concatAny(array1: any[], array2: any[]): any[] {
    array2.forEach(x => {
        array1.push(x);
    });

    return array1;
}
const newArrayString = concatAny([1,2,3], ["2", 1]);
const total = newArrayString.reduce((previues, current) => previues += current, 0);
// console.log(total);


function genericConcat<T>(array1: T[], array2: T[]): T[] {
    array2.forEach(x => {
        array1.push(x);
    });

    return array1;
}

class User {
    id = 0;
    name = "";
    constructor(id: number) {
        this.id = id;
    }
}
const genericResultNumbers = genericConcat<number>([1], [2,3,4,5,6]);
const result = genericResultNumbers.reduce((total, value)=> total += value, 0)
const genericResultString = genericConcat<User>([new User(1), new User(2)], [new User(3)]);

// console.log(genericResultNumbers)
// console.log(genericResultString[0].id)


function genericWithMultipleTypes<T,U>(value: T, message: U): T {
    console.log(message)
    return value;
}
// const result2 = genericWithMultipleTypes<number, string>(0, "Hola yo soy un string");
// console.log(result2)

interface IAuth {
    test(): void;
}
class AuthService implements IAuth {
    test(): void {
        throw new Error("Method not implemented.");
    }
}
function blockElementsGeneric<T extends IAuth>(value: T): void {
    value.test();
}
blockElementsGeneric<AuthService>(new AuthService());





class ArrayList<T> {
    private list: T[] = [];

    addElement(element: T): void {
        this.list.push(element);
    }

    getByIndex(index: number): T | undefined {
        return this.list[index]
    }

    getLength(): number {
        return this.list.length;
    }

    getCompleteList(): T[] {
        return this.list;
    }
}

let genericListnumber = new ArrayList<string>();
genericListnumber.addElement("1");
genericListnumber.addElement("100");



