function filterByPropertie<T, K extends keyof T>(array: T[], key: K, filterValue: T[K]): T[] {
    return array.filter((object: T) => object[key] === filterValue);
}

class Book {
    name: string;
    author: string;
    date: Date;
    pages: number;
    isActive: boolean;

    constructor(name: string, author: string, date: Date, pages: number, isActive: boolean) {
        this.name = name;
        this.author = author;
        this.date = date;
        this.pages = pages;
        this.isActive = isActive;
    }
}
const date = new Date('01/01/2000');
const firstBook = new Book("El principito", "NOSE", new Date('06/06/1992'), 572, false);
const secondBook = new Book("Harry Potter", "otro nose", date, 200, true);
const thirdBook = new Book("El principito 3", "NOSE", new Date('06/06/1992'), 572, true);

const results = filterByPropertie([firstBook, secondBook, thirdBook], "isActive", false);
console.log(results);
