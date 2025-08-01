"use strict";
function filterByPropertie(array, key, filterValue) {
    return array.filter((object) => object[key] === filterValue);
}
class Book {
    constructor(name, author, date, pages, isActive) {
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
