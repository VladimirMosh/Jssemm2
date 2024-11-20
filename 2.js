
class Library {
    #books = [];
    constructor(arrBooks = []) {
        if (arrBooks.length !== new Set(arrBooks).size) {
            throw new Error("Уже есть такая книга");
        }
        this.#books = arrBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error("Эта книга уже добавлена");
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error("Такой книги нет");
        } else {
            this.#books.splice(this.#books.indexOf(title), 1);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

let library = new Library([
    "Минник, Холланд – JavaScript для чайников",
    "Э. Браун – Изучаем JavaScript",
    "Д. Крокфорд – Как устроен JavaScript",
    "Д. Дакетт – Javascript и jQuery.",
    "С. Стефанов – JavaScript.",
]);

console.log(library.allBooks);
console.log([...library.allBooks].join(", "));

library.addBook("Резиг, Бибо, Марас – Секреты JavaScript ниндзя");
console.log(
    "///Добавил книгу///   Список книг в библиотеке: ",
    [...library.allBooks].join(",   ")
);

library.removeBook("Э. Браун – Изучаем JavaScript");
console.log(
    "///Удалил книгу/// В библиотеке остались книги: ",
    [...library.allBooks].join(",   ")
);
