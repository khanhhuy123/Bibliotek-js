let library = [];

const book1 = {
    title: "John sword",
    author: "JK1",
    isbn: 123123,
    isLoan: false,
};
const book2 = {
    title: "John's adventure",
    author: "JK2",
    isbn: 123124,
    isLoan: false
};
const book3 = {
    title: "John in jungle",
    author: "JK3",
    isbn: 123125,
    isLoan: false
};
const book4 = {
    title: "John John",
    author: "JK4",
    isbn: 123126,
    isLoan: false
};

library.push(book1)
library.push(book2)
library.push(book3)
library.push(book4)

function loanBook(bookIsbn){
    for (let i = 0; i < library.length; i++){
        if(bookIsbn == library[i].isbn){
            library[i].isLoan = true
        }
    }
};



