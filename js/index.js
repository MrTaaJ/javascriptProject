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

class BooksInfoData {
  constructor(title, author, id, container) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.container = container;
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

  updateNewBook(newBook) {
    const { id, title, author } = newBook;
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 = document.createElement('td');
    const button = document.createElement('button');
    tableRow.className = 'book';
    button.id = id;
    button.className = 'remove-button';
    button.innerText = 'Remove';
    tableData1.innerText = author;
    tableData2.innerText = title;
    tableData3.append(button);
    tableRow.append(tableData1, tableData2, tableData3);
    this.container.append(tableRow);
  }

  deleteBook() {
    booksInfo = booksInfo.filter(book => book.id !== this.id);
    const bookId = document.querySelector(`#${this.id}`);
    const bookParent = bookId.parentElement.parentElement;
    this.container.removeChild(bookParent);
    setLocalStorage(booksInfo);
  }
}

const addBook = e => {
  e.preventDefault();
  const newClassBook = new BooksInfoData(title, author, getID(), bookContainer);
  booksInfo.push(newClassBook.addData());
  setLocalStorage(booksInfo);
  newClassBook.updateNewBook(newClassBook.addData());
  newClassBook.clearData();
};

const removeData = e => {
  e.preventDefault();
  let id;
  if (e.target.classList.contains('remove-button')) {
    id = e.target.id;
  }
  const newClassBook = new BooksInfoData(title, author, id, bookContainer);
  newClassBook.deleteBook();
};

const updateBook = newBook => {
  const newClassBook = new BooksInfoData(title, author, getID(), bookContainer);
  newBook.forEach(element => {
    newClassBook.updateNewBook(element);
  });
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
