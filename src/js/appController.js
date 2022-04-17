import AddBook from './addBook';
import editData from './editData';
import BookList from './bookList';
import ContactUs from './contactUs';
import addBookController from './utils/addBookController';
import NewBookAddedSuccess from './newBookAdded';
import getFormValues from './utils/getFormValues';
import clearFormValues from './utils/clearFormValues';
import removePopUp from './utils/removePopUp';
import addPopUp from './utils/addPopUp';
import AddNewBook from './addNewBookApp';
import returnLocalItem from './utils/returnLocalItem';
import setLocalStorage from './utils/setLocalItem';

const appControl = () => {
  let booksInfo = [];
  let tempBook;

  const saveOnload = () => {
    booksInfo = returnLocalItem();
  };

  const manipulateData = e => {
    e.preventDefault();
    if (e.target.classList.contains('remove-button')) {
      const { id } = e.target;
      AddNewBook.deleteBook(id);
      booksInfo = booksInfo.filter(book => book.id !== id);
      setLocalStorage(booksInfo);
    } else if (e.target.classList.contains('edit-button')) {
      const id = e.target.classList[1];
      const newBooksInfo = newArray => {
        booksInfo = newArray;
        setLocalStorage(booksInfo);
      };
      editData(id, booksInfo, newBooksInfo);
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
      removePopUp();
      const dex = document.querySelector('#main');
      dex.removeChild(dex.childNodes[0]);
      dex.appendChild(tabObject);
      updateBook(booksInfo);
      document.querySelector('.book-container').addEventListener('click', manipulateData);
    }
  };

  const switchedBookList = () => {
    const dex = document.querySelector('#main');
    addPopUp(dex, NewBookAddedSuccess.callNewBookAddedSuccess, tempBook);
    const popActive = document.querySelector('.success-container');
    const addNewBook = document.querySelector('.addNewBook-button');
    const returnBookList = document.querySelector('.list-button');
    returnBookList.addEventListener('click', switchData);
    popActive.addEventListener('click', removePopUp);
    addNewBook.addEventListener('click', removePopUp);
  };

  const addBook = e => {
    e.preventDefault();
    const bookInputs = e.target.querySelectorAll('.book-input');
    tempBook = getFormValues(bookInputs);
    booksInfo.push(tempBook);
    setLocalStorage(booksInfo);
    switchedBookList();
    clearFormValues(bookInputs);
  };

  const switched = (newChild, currentTarget) => {
    const dex = document.querySelector('#main');
    dex.removeChild(dex.childNodes[0]);
    dex.appendChild(newChild);
    if (currentTarget === 'bookList') {
      const bookContainer = document.querySelector('.book-container');
      bookContainer.addEventListener('click', manipulateData);
      updateBook(booksInfo);
    } else if (currentTarget === 'addBook') {
      addBookController(addBook);
    }
  };

  const switchTab = e => {
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
  return {
    switchTab,
    onLoadUpdate,
    manipulateData,
    saveOnload,
  };
};

export default appControl;
