import { switchTab, onLoadUpdate, removeData } from './switchTab';
import returnLocalItem from './utils/returnLocalItem';
import BookList from './bookList';
import Footer from './footer';
import Header from './header';

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

const getLocal = () => {
  const returnItem = returnLocalItem();
  const bookContainer = document.querySelector('.book-container');
  if (returnItem) {
    onLoadUpdate(returnItem);
    bookContainer.addEventListener('click', removeData);
  }
};

linksUl.addEventListener('click', switchTab);

window.addEventListener('load', getLocal);
