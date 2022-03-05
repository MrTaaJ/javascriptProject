const title = document.querySelector('.title');
const author = document.querySelector('.author');
const newBooks = document.querySelector('.form');
const bookContainer = document.querySelector('.book-container');
const removeBook = document.querySelectorAll('.remove-button')

let booksInfo = [];

const addData = (title, author) =>{
  const bookInfo = {title: "", author: ""};
  bookInfo.title = title.value;
  bookInfo.author = author.value;
  booksInfo.push(bookInfo);
}

const removeData = () => {

}

const updateBook = (newBook) => {
  let displayData = '';
  newBook.forEach(element => {
      displayData += `<div class="book">
      <p>${element.title}</p>
      <p>${element.author}</p>
      <button class="remove-button">Remove</button>
      </div>`;
  });
  bookContainer.innerHTML = displayData;
}

const addBook = (e) => {
  e.preventDefault();
  addData(title, author);
  updateBook(booksInfo);
  console.log(booksInfo);
}

newBooks.addEventListener("submit", addBook);

let indexofDelete;

for (let i = 0; i < booksInfo.length; i += 1) {
  removeBook[i].addEventListener('click', () => {
    booksInfo = booksInfo.filter((book)=>{
      return book.author !== booksInfo[i].author;
    })
  });
}

