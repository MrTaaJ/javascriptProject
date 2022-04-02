class BookList {
  static callBookList() {
    const listSection = document.createElement('table');
    listSection.className = 'table';
    listSection.innerHTML = `
        <thead>
            <tr id="table-header">
              <th>Author</th>
              <th>Title</th>
              <th>Genre</th>
              <th></th>
            </tr>
        </thead>
        <tbody class="book-container"></tbody>
        `;

    return listSection;
  }
}

export default BookList;
