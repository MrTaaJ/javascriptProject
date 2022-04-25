const returnLocalItem = () => {
  const returnItem = localStorage.getItem('storeLocal');
  let booksInfo = [];
  if (returnItem) {
    booksInfo = JSON.parse(returnItem);
  }
  return booksInfo;
};

export default returnLocalItem;
