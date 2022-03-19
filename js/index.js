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
  newBook.forEach((element, index) => {
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td")
    const tableData2 = document.createElement("td")
    const tableData3 = document.createElement("td")
    const tableData4 = document.createElement("td")
    const button = document.createElement("button");
    tableRow.className = "book";
    button.id = element.id;
    button.className = 'remove-button';
    button.innerText = 'Remove';
    tableData1.innerText = index + 1;
    tableData2.innerText = element.author;
    tableData3.innerText = element.title;
    tableData4.append(button);
    tableRow.append(tableData1, tableData2, tableData3, tableData4);
    bookContainer.append(tableRow);
  });
}

class BooksInfoData {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.bookContainer = document.querySelector('.book-container');
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

  updateNumber() {
    const updateList = Array.from(this.bookContainer.children);
    let index = 0;
    updateList.forEach((element) => {
      element.firstChild.innerText = index + 1;
      index += 1;
    });
  }

  updateNewBook() {
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td")
    const tableData2 = document.createElement("td")
    const tableData3 = document.createElement("td")
    const tableData4 = document.createElement("td")
    const button = document.createElement("button");
    tableRow.className = "book";
    button.id = this.id;
    button.className = 'remove-button';
    button.innerText = 'Remove';
    tableData1.innerText = 1;
    tableData2.innerText = this.author.value;
    tableData3.innerText = this.title.value;
    tableData4.append(button);
    tableRow.append(tableData1, tableData2, tableData3, tableData4);
    this.bookContainer.append(tableRow);
    this.updateNumber();
  }

  deleteBook() {
    booksInfo = booksInfo.filter(book => book.id !== this.id);
    const bookId = document.querySelector(`#${this.id}`);
    const bookParent = bookId.parentElement.parentElement;
    this.bookContainer.removeChild(bookParent);
    this.updateNumber();
    setLocalStorage(booksInfo);
  }
}

const addBook = e => {
  e.preventDefault();
  const newClassBook = new BooksInfoData(title, author, getID());
  booksInfo.push(newClassBook.addData());
  setLocalStorage(booksInfo);
  newClassBook.updateNewBook();
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
