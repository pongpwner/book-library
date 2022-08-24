let myLibrary = [];
function Book(author, title, pages, completed){
  this.author=author;
  this.title= title;
  this.pages=pages;
  this.completed=completed;

}

let book1= new Book('tolken','lotr',444, true);
let book2= new Book('markus', 'meditations',1000, false)


function addBookToLibrary(book){
    myLibrary.push(book)
}


let domLibrary=document.querySelector('.library');
let addBookButton=document.querySelector('.add-book-button');
let bookForm=document.querySelector('.book-form')
addBookButton.addEventListener('click',addBookToDom)

function addBookToDom(){
getBookData()
//reset dom library
removeAllBooks(domLibrary)
//add updated library to dom
populateLibrary(myLibrary)

//rest form data
bookForm.reset()

}

function getBookData(){
let bookTitle=document.querySelector('#title').value;
let bookAuthor=document.querySelector('#author').value;
let bookPages=document.querySelector('#pages').value;
let bookCompletedOptions=document.querySelectorAll("input[name='completed']");
let completed;

bookCompletedOptions.forEach(book=>{
    if(book.checked===true) completed=book.value
})
myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,completed))

return;

}
function removeAllBooks(library){
while(library.firstChild){
    library.removeChild(library.firstChild)
}
}

//fills library with books on the dom
function populateLibrary(library){
    library.forEach(book=>{
        let bookDom= document.createElement('li')
        bookDom.classList.add('book')
        let bookInfo= document.createElement('div')
        bookInfo.textContent=`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, completed:${book.completed}`
        bookDom.appendChild(bookInfo);
        domLibrary.appendChild(bookDom)
        
    })

}

addBookToLibrary(book1)
addBookToLibrary(book2)
populateLibrary(myLibrary)


