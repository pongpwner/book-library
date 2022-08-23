let myLibrary = [];
function Book(author, title, pages, read){
  this.author=author;
  this.title= title;
  this.pages=pages;
  this.read=read;

}
let book1= new Book('tolken','lotr',444, true);
let book2= new Book('markus', 'meditations',1000, false)


function addBookToLibrary(book){
    myLibrary.push(book)
}
let domLibrary=document.querySelector('.library')
function populateLibrary(library){
    library.forEach(book=>{
        let bookDom= document.createElement('li')
        bookDom.classList.add('book')
        let bookInfo= document.createElement('div')
        bookInfo.textContent=`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, read:${book.read}`
        bookDom.appendChild(bookInfo);
        domLibrary.appendChild(bookDom)
        
    })

}

addBookToLibrary(book1)
addBookToLibrary(book2)
populateLibrary(myLibrary)


