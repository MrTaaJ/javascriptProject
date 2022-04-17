import EditBook from './editPage';
import removePopUp from './utils/removePopUp';
import addPopUp from './utils/addPopUp';
import getFormValues from './utils/getFormValues';
import addBookController from './utils/addBookController';
import EditBookSuccess from './editBookSuccess';

const editData = (ids, booksInfo, callback) => {
  const bookArray = booksInfo.find(book => book.id === ids);
  const dex = document.querySelector('#main');
  let tempBook;
  const newBooksInfo = booksInfo;

  const switchedBookList = () => {
    removePopUp();
    addPopUp(dex, EditBookSuccess.callEditBookSuccess, tempBook);
    const returnBookList = document.querySelector('.list-button');
    returnBookList.addEventListener('click', removePopUp);
  };

  const collectNewData = e => {
    e.preventDefault();
    const bookInputs = e.target.querySelectorAll('.book-input');
    tempBook = getFormValues(bookInputs);
    newBooksInfo.splice(booksInfo.indexOf(bookArray), 1, tempBook);
    callback(newBooksInfo);
    const { title, author } = tempBook;
    const { genre, category } = tempBook;
    const ittArray = [author, title, genre, category];
    const idElement = document.querySelector(`.${ids}`);
    const bookElement = idElement.parentElement.parentElement;
    for (let i = 0; i < 4; i += 1) {
      bookElement.children[i].textContent = ittArray[i];
    }
    switchedBookList();
  };

  addPopUp(dex, EditBook.callEditBook);
  EditBook.changeParameter(bookArray);
  const cancelEdit = document.querySelector('.cancel-button');
  cancelEdit.addEventListener('click', removePopUp);
  addBookController(collectNewData);
};

export default editData;
