class Library {
    #books;

    constructor(initBooks = []) {
        this.#books = [];
        const uniqueBooks = new Set(initBooks);
        if (uniqueBooks.size !== initBooks.length) {
            throw new Error("The list shouldn't contain duplicates");
        }
        this.#books.push(...initBooks);
    }

    get allBooks() {
        const books = this.#books;
        console.log(`These books are in the library: ${books}`);
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("The book is in the library. You can't add it again");
        }
        this.#books.push(title);
    };

    removeBook(title) {
        const id = this.#books.indexOf(title);
        if (id === -1) {
            throw new Error(" The book is not in the library");
        }
        this.#books.splice(id, 1);
    };

    checkBook(title) {
        if (this.#books.includes(title)) {
            console.log("The book is in the library.");
        } else {
            throw new Error(" The book is not in the library");
        }
    };

}

const myLibrary = new Library();

myLibrary.addBook('1984');
myLibrary.addBook("Harry Potter and the Sorcerer's Stone");
myLibrary.addBook('The Little Prince');
myLibrary.allBooks;

myLibrary.removeBook('1984');
myLibrary.allBooks;

myLibrary.addBook('1984');
myLibrary.checkBook('1984');
