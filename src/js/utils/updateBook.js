import AddNewBook from '../addNewBookApp';

const updateBook = newBook => {
  newBook.forEach(element => {
    AddNewBook.updateNewBook(element);
  });
};

export default updateBook;
