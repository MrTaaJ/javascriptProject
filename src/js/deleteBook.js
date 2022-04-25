const deleteBook = id => {
  const container = document.querySelector('.book-container');
  const bookId = document.querySelector(`#${id}`);
  const bookParent = bookId.parentElement.parentElement;
  container.removeChild(bookParent);
};

export default deleteBook;
