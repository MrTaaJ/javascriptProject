class AddNewBook {
  constructor(title, author, id, container) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.container = container;
  }

  clearData() {
    this.title.value = '';
    this.author.value = '';
  }

  addData() {
    const bookInfo = { id: this.id, title: '', author: '' };
    bookInfo.title = this.title;
    bookInfo.author = this.author;
    return bookInfo;
  }

  updateNewBook(newBook) {
    const { id, title, author } = newBook;
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 = document.createElement('td');
    const button = document.createElement('button');
    tableRow.className = 'book';
    button.id = id;
    button.className = 'remove-button';
    button.innerText = 'Remove';
    tableData1.innerText = author;
    tableData2.innerText = title;
    tableData3.append(button);
    tableRow.append(tableData1, tableData2, tableData3);
    this.container.append(tableRow);
  }

  deleteBook() {
    const bookId = document.querySelector(`#${this.id}`);
    const bookParent = bookId.parentElement.parentElement;
    this.container.removeChild(bookParent);
  }
}

export default AddNewBook;
