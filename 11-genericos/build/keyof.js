"use strict";
function filterByPropertie(array, key, filterValue) {
    return array.filter((object) => object[key] === filterValue);
}
class Book {
    constructor(name, author, date, pages) {
        this.name = name;
        this.author = author;
        this.date = date;
        this.pages = pages;
    }
}
const date = new Date('01/01/2000');
const firstBook = new Book("El principito", "NOSE", new Date('06/06/1992'), 572);
const secondBook = new Book("Harry Potter", "otro nose", date, 200);
const thirdBook = new Book("El principito 3", "NOSE", new Date('06/06/1992'), 572);
const results = filterByPropertie([firstBook, secondBook, thirdBook], "date", date);
console.log(results);
