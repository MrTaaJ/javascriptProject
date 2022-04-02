import AddBook from './addBook';
import BookList from './bookList';
import ContactUs from './contactUs';
import {addBook, removeData} from './index';
import { fictionCategory, nonFictionCategory, otherCategory } from '../js/utils/formCategorySelector';

const selectCategory = () => {
    const genreChange = document.querySelector('.genre');
    const newBooks = document.querySelector('.form');
    if (genreChange.value === 'Fiction') {
        newBooks.replaceChild(fictionCategory, newBooks.childNodes[3]);
    } else if (genreChange.value === 'Non-Fiction') {
        newBooks.replaceChild(nonFictionCategory, newBooks.childNodes[3]);
    } else if (genreChange.value === 'other-genre') {
        newBooks.replaceChild(otherCategory, newBooks.childNodes[3]);
    }
}

const switched = (newChild, currentTarget) => {
    const dex = document.querySelector('#main');
    dex.removeChild(dex.childNodes[0]);
    dex.appendChild(newChild);
    if (currentTarget === 'bookList') {
    //   const { bookContainer } = queryActivator();
      document.querySelector('.book-container').addEventListener('click', removeData);
      updateBook(booksInfo);
    } else if (currentTarget === 'addBook') {
      const newBooks = document.querySelector('.form');
      const genreChange = document.querySelector('.genre');
      genreChange.addEventListener('change', selectCategory);
      newBooks.addEventListener('submit', addBook); 
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

export { switched, switchTab };