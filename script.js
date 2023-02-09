const Library = [];

const Book = {
    tittle: "Null",
    author: "Null",
    isbn: Int,

    addBook: function(title, author, isbn){
        this.tittle = title;
        this.author = author;
        this.isbn = isbn;
        Library.push(Book);
    },
};

