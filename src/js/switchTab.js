import AddBook from './addBook';
import BookList from './bookList';
import ContactUs from './contactUs';
import selectCategory from './utils/formCategorySelector';
import NewBookAddedSuccess from './newBookAdded';
import getFormValues from './utils/getFormValues';
import AddNewBook from './addNewBookApp';
import returnLocalItem from './utils/returnLocalItem';

let booksInfo = [];
let tempBook;

const setLocalStorage = booksInfo => {
  localStorage.setItem('storeLocal', JSON.stringify(booksInfo));
};

const removeData = e => {
  e.preventDefault();
  if (e.target.classList.contains('remove-button')) {
    const { id } = e.target;
    AddNewBook.deleteBook(id);
    booksInfo = booksInfo.filter(book => book.id !== id);
    setLocalStorage(booksInfo);
  }
};

const updateBook = newBook => {
  newBook.forEach(element => {
    AddNewBook.updateNewBook(element);
  });
};

const onLoadUpdate = booksInfo => {
  updateBook(booksInfo);
};

const switchData = e => {
  if (e.target.classList.contains('button')) {
    const tabObject = BookList.callBookList();
    const dex = document.querySelector('#main');
    dex.removeChild(dex.childNodes[0]);
    dex.appendChild(tabObject);
    updateBook(booksInfo);
    document.querySelector('.book-container').addEventListener('click', removeData);
  }
};

const switchedBookList = () => {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(NewBookAddedSuccess.callNewBookAddedSuccess(tempBook));
  const returnBookList = document.querySelector('.list-button');
  returnBookList.addEventListener('click', switchData);
};

const addBook = e => {
  e.preventDefault();
  const bookInputs = e.target.querySelectorAll('.book-input');
  tempBook = getFormValues(bookInputs);
  booksInfo.push(tempBook);
  setLocalStorage(booksInfo);
  switchedBookList();
};

const switched = (newChild, currentTarget) => {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(newChild);
  if (currentTarget === 'bookList') {
    const bookContainer = document.querySelector('.book-container');
    bookContainer.addEventListener('click', removeData);
    updateBook(booksInfo);
  } else if (currentTarget === 'addBook') {
    const newBooks = document.querySelector('.form');
    const genreChange = document.querySelector('.genre');
    genreChange.addEventListener('change', selectCategory);
    newBooks.addEventListener('submit', addBook);
  }
};

const switchTab = e => {
  booksInfo = returnLocalItem();
  if (e.target.classList.contains('nav-button') || e.target.classList.contains('button')) {
    const tabObject = {
      bookList: BookList.callBookList(),
      addBook: AddBook.callAddBook(),
      contactUs: ContactUs.callContactUs(),
      editBook: BookList.callBookList(),
    };
    const currentTarget = e.target.dataset.target;
    const newChild = tabObject[currentTarget];
    switched(newChild, currentTarget);
  }
};

export { switchTab, onLoadUpdate, removeData };
