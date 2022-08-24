let myLibrary = [];
function Book(author, title, pages, completed){
  this.author=author;
  this.title= title;
  this.pages=pages;
  this.completed=completed;

}

let book1= new Book('tolken','lotr',444, true);
let book2= new Book('markus', 'meditations',1000, false)






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
    // library.forEach(book=>{
    //     let bookDom= document.createElement('li')
    //     bookDom.classList.add('book')
    //     let bookInfo= document.createElement('div')
    //     bookInfo.textContent=`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, completed:${book.completed}`
    //     bookDom.appendChild(bookInfo);
    //     domLibrary.appendChild(bookDom)
        
    // })
    for(let i=0; i<library.length; i++){
        // add container
        let bookDom= document.createElement('li')
        bookDom.dataset.bookId=i;
        bookDom.classList.add('book')

        //add book info
        let bookInfo= document.createElement('div')
        bookInfo.textContent=`title: ${library[i].title}, author: ${library[i].author}, pages: ${library[i].pages}, completed:${library[i].completed}`
        bookDom.appendChild(bookInfo);

        //add remove button
        let removeButton= document.createElement('button')
        removeButton.type="button"
        removeButton.textContent='Remove Book'
        removeButton.addEventListener('click',()=>removeBook(i,myLibrary,domLibrary))
        bookDom.appendChild(removeButton)

        //add toggle completed
        let toggleButton= document.createElement('button')
        toggleButton.type="button"
        toggleButton.textContent='toggle complete'
        toggleButton.addEventListener('click',()=>toggleRead(i,myLibrary,domLibrary))
        bookDom.appendChild(toggleButton)

        domLibrary.appendChild(bookDom)
    }


}
//
function toggleRead(id,library, domLibrary){


    for(let i=0; i<myLibrary.length;i++){
        if(i===id){
           
            if(myLibrary[i].completed==='yes'){
                myLibrary[i].completed='no'
              
            }
            else if(myLibrary[i].completed==='no'){
                myLibrary[i].completed='yes'
            
            }
    }
    console.log(myLibrary)

  //updates dom and array
  removeAllBooks(domLibrary)
  populateLibrary(library)

}
}
//removes a single book
function removeBook(bookId, library,domLibrary){
    library.splice(bookId,1)
    //updates dom and array
    removeAllBooks(domLibrary)
    populateLibrary(library)
    

}

populateLibrary(myLibrary)


