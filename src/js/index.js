import AddBook from './addBook';
import BookList from './bookList';
import ContactUs from './contactUs';
import Footer from './footer';
import Header from './header';
import AddNewBook from './addNewBookApp';

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
  const author = document.querySelector('.author');
  const bookContainer = document.querySelector('.book-container');

  return { title, author, bookContainer };
};

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

const removeData = e => {
  e.preventDefault();
  if (e.target.classList.contains('remove-button')) {
    const { id } = e.target;
    const { title, author, bookContainer } = queryActivator();
    const newClassBook = new AddNewBook(title, author, id, bookContainer);
    newClassBook.deleteBook();
    booksInfo = booksInfo.filter(book => book.id !== id);
    setLocalStorage(booksInfo);
  }
};

const updateBook = newBook => {
  const { title, author, bookContainer } = queryActivator();
  const newClassBook = new AddNewBook(title, author, getID(), bookContainer);
  newBook.forEach(element => {
    newClassBook.updateNewBook(element);
  });
};

const switchedBookList = () => {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(BookList.callBookList());
  const { bookContainer } = queryActivator();
  bookContainer.addEventListener('click', removeData);
  updateBook(booksInfo);
};

const addBook = e => {
  e.preventDefault();
  const { title, author, bookContainer } = queryActivator();
  const newClassBook = new AddNewBook(title.value, author.value, getID(), bookContainer);
  booksInfo.push(newClassBook.addData());
  setLocalStorage(booksInfo);
  switchedBookList();
  newClassBook.updateNewBook(newClassBook.addData());
};

const switched = (newChild, currentTarget) => {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(newChild);
  if (currentTarget === 'bookList') {
    const { bookContainer } = queryActivator();
    bookContainer.addEventListener('click', removeData);
    updateBook(booksInfo);
  } else if (currentTarget === 'addBook') {
    const newBooks = document.querySelector('.form');
    newBooks.addEventListener('submit', addBook);
  }
};

const switchTab = e => {
  if (e.target.classList.contains('nav-button')) {
    const tabObject = {
      bookList: BookList.callBookList(),
      addBook: AddBook.callAddBook(),
      contactUs: ContactUs.callContactUs(),
    };
    const currentTarget = e.target.dataset.target;
    const newChild = tabObject[currentTarget];
    switched(newChild, currentTarget);
  }
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
