import selectCategory from './formCategorySelector';

const addBookController = func => {
  const newBooks = document.querySelector('.form');
  const genreChange = document.querySelector('.genre');
  genreChange.addEventListener('change', selectCategory);
  newBooks.addEventListener('submit', func);
};

export default addBookController;
