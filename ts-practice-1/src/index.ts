import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library";

// Задание 2.1
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

// Задание 2.2
let city = "Москва";       // string
let population = 12_000_000; // number
let isCapital = true;     // boolean

// Задание 2.3
// Ошибка 1: присвоение числа строковой переменной
let title: string = "Книга";
// title = 123; // error TS2322: Type 'number' is not assignable to type 'string'.
title = "Война и мир";

// Ошибка 2: присвоение строки числовой переменной
let pages: number = 300;
// pages = "много"; // error TS2322: Type 'string' is not assignable to type 'number'.
pages = 350;

// Ошибка 3: присвоение числа булевой переменной
let isRead: boolean = false;
// isRead = 1; // error TS2322: Type 'number' is not assignable to type 'boolean'.
isRead = true;

// Задание 2.4
// let userName: string = null; // error TS2322: Type 'null' is not assignable to type 'string'.
// При strict: true включается strictNullChecks, который запрещает присваивать null и undefined переменным других типов.
let userName: string | null = null;

// Задание 4.2
const books = [
    createBook("1984", "Джордж Оруэлл", 1949),
    createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
    createBook("Преступление и наказание", "Фёдор Достоевский", 1866),
];

//проверка на существование наших книг в массиве
if (books[0] && books[2]) {
    books[0] = markAsRead(books[0]);
    books[2] = markAsRead(books[2]);
}

books.forEach(book => console.log(getBookInfo(book)));
console.log(`Прочитано книг: ${countReadBooks(books)}`);
