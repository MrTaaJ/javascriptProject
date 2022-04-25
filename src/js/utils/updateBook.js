const updateBook = newBook => {
  const updateNewBook = newBook => {
    const { id, title, author } = newBook;
    const { genre, category } = newBook;
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 = document.createElement('td');
    const tableData4 = document.createElement('td');
    const tableData5 = document.createElement('td');
    const tableData6 = document.createElement('td');
    const button = document.createElement('button');
    const button2 = document.createElement('button');
    tableRow.className = 'book';
    button.id = id;
    button2.className = `edit-button ${id}`;
    button.className = 'remove-button';
    button.innerText = 'Remove';
    button2.innerText = 'Edit';
    tableData1.innerText = author;
    tableData2.innerText = title;
    tableData3.innerText = genre;
    tableData4.innerText = category;
    tableData5.append(button);
    tableData6.append(button2);
    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6);
    return tableRow;
  };

  const bookConatainer = document.querySelector('.book-container');
  const frag = document.createDocumentFragment();
  newBook.forEach(element => {
    frag.prepend(updateNewBook(element));
  });
  bookConatainer.appendChild(frag);
};

export default updateBook;
