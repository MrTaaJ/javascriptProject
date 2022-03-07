const title = document.querySelector('.title');
const author = document.querySelector('.author');
const newBooks = document.querySelector('.form');
const bookContainer = document.querySelector('.book-container');
// const bookContainer = document.querySelectorAll('.book-container');

let booksInfo = [];

const getID = () =>{
  return '_'+Math.random().toString(36).substring(2,9);
}

const clearData = (title, author) => {
  title.value = "";
  author.value = "";
}

const addData = (title, author) =>{
  const bookInfo = {id: getID(), title: "", author: ""};
  bookInfo.title = title.value;
  bookInfo.author = author.value;
  booksInfo.push(bookInfo);
}

const updateBook = (newBook) => {
  let displayData = '';
  newBook.forEach((element, index) => {
      displayData += `<div class="book">
      <p>${element.title}</p>
      <p>${element.author}</p>
      <button id="${element.id}" class="remove-button">Remove</button>
      </div>`;
  });
  bookContainer.innerHTML = displayData;
}

const addBook = (e) => {
  e.preventDefault();
  addData(title, author);
  updateBook(booksInfo);
  clearData(title, author);
  console.log(booksInfo);
}

const removeData = (e) => {
  e.preventDefault();
  let id;
  if(e.target.classList.contains("remove-button")){
    id = e.target.id;
  }
  booksInfo = booksInfo.filter((book)=>{
    return book.id !== id;
  })
  updateBook(booksInfo);
  
}

newBooks.addEventListener("submit", addBook);
bookContainer.addEventListener("click", removeData);
