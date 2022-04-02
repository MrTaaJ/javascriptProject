import { switched, switchTab } from './switchTab';
import AddBook from './addBook';
import BookList from './bookList';
import Footer from './footer';
import Header from './header';
import AddNewBook from './addNewBookApp';
import NewBookAddedSuccess from './newBookAdded';
import getFormValues from './utils/getFormValues';

const frag = document.createDocumentFragment();

const mainSection = document.createElement('main');
mainSection.className = 'main';
mainSection.id = 'main';
const main = section => mainSection.appendChild(section);
main(BookList.callBookList());
frag.appendChild(Header.callHeader());
frag.appendChild(mainSection);
frag.appendChild(Footer.callFooter());

const content = document.querySelector('.container');

content.appendChild(frag);

const linksUl = document.querySelector('.nav-container');

const queryActivator = () => {
  const title = document.querySelector('.title');
  const buttonCompound = document.querySelector('.button-compound');
  const bookContainer = document.querySelector('.book-container');

  return { title, buttonCompound, bookContainer };
};

let booksInfo = [];
let tempBook;

const setLocalStorage = booksInfo => {
  localStorage.setItem('storeLocal', JSON.stringify(booksInfo));
};

// const getID = () => {
//   const id = `_${Math.random()
//     .toString(36)
//     .substring(2, 9)}`;
//   return id;
// };

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
  //const { title, author, bookContainer } = queryActivator();
  //const newClassBook = new AddNewBook(title, author, getID(), bookContainer);
  newBook.forEach(element => {
    AddNewBook.updateNewBook(element);
  });
};

const switchData = (e) => {
  console.log(e.target.classList)
  if (e.target.classList.contains('button')) {
    const tabObject = {
      editBook: BookList.callBookList(),
      addBook: AddBook.callAddBook(),
      bookList: BookList.callBookList(),
    };
    const currentTarget = e.target.dataset.target;
    const newChild = tabObject[currentTarget];
    console.log(currentTarget);
    switched(newChild, currentTarget);
  }
}

const switchedBookList = () => {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(NewBookAddedSuccess.callNewBookAddedSuccess(tempBook));
  const { buttonCompound } = queryActivator();
  // bookContainer.addEventListener('click', removeData);
  console.log(buttonCompound);
  buttonCompound.addEventListener('click', switchData);
  // updateBook(booksInfo);
};

const addBook = e => {
  e.preventDefault();
  const bookInputs = e.target.querySelectorAll('.book-input');
  tempBook = getFormValues(bookInputs);
  console.log(tempBook)
  booksInfo.push(tempBook);
  setLocalStorage(booksInfo);
  switchedBookList();
  // newClassBook.updateNewBook(newClassBook.addData());
};

const getLocal = () => {
  const returnItem = localStorage.getItem('storeLocal');
  const { bookContainer } = queryActivator();
  if (returnItem) {
    booksInfo = JSON.parse(returnItem);
    updateBook(booksInfo);
    bookContainer.addEventListener('click', removeData);
  }
};

linksUl.addEventListener('click', switchTab);

window.addEventListener('load', getLocal);

export { addBook, removeData };
