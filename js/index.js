const title = document.querySelector('.title');
const author = document.querySelector('.author');
const newBooks = document.querySelector('.form');
const bookContainer = document.querySelector('.book-container');

let booksInfo = [];

const setLocalStorage = booksInfo => {
  localStorage.setItem('storeLocal', JSON.stringify(booksInfo));
};

const getID = () => {
  const id = `_${Math.random()
    .toString(36)
    .substring(2, 9)}`;
  return id;
};

const updateBook = newBook => {
  let displayData = '';
  newBook.forEach((element, index) => {
    displayData += `<tr class="book">
      <td>${index + 1}</td>
      <td>${element.author}</td>
      <td>${element.title}</td>
      <td><button id="${element.id}" class="remove-button">Remove</button></td>
      </tr>`;
  });
  bookContainer.innerHTML = displayData;
};

class BooksInfoData {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  clearData() {
    this.title.value = '';
    this.author.value = '';
  }

  addData() {
    const bookInfo = { id: this.id, title: '', author: '' };
    bookInfo.title = this.title.value;
    bookInfo.author = this.author.value;
    return bookInfo;
  }

  deleteBook() {
    booksInfo = booksInfo.filter(book => book.id !== this.id);
    setLocalStorage(booksInfo);
    updateBook(booksInfo);
  }
}

const addBook = e => {
  e.preventDefault();
  const newClassBook = new BooksInfoData(title, author, getID());
  booksInfo.push(newClassBook.addData());
  setLocalStorage(booksInfo);
  updateBook(booksInfo);
  newClassBook.clearData();
};

const removeData = e => {
  e.preventDefault();
  let id;
  if (e.target.classList.contains('remove-button')) {
    id = e.target.id;
  }
  const newClassBook = new BooksInfoData(title, author, id);
  newClassBook.deleteBook();
};

const getLocal = () => {
  const returnItem = localStorage.getItem('storeLocal');
  if (returnItem) {
    booksInfo = JSON.parse(returnItem);
    updateBook(booksInfo);
  }
};

window.addEventListener('load', getLocal);

newBooks.addEventListener('submit', addBook);

bookContainer.addEventListener('click', removeData);
