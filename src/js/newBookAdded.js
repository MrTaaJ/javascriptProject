class NewBookAddedSuccess {
    static callNewBookAddedSuccess(newBook) {
      const {title, author, id, genre } = newBook;
      const successSection = document.createElement('div');
      successSection.className = 'success';
      successSection.innerHTML = `
      <h3 id="success-header">New Book Added Successfully</h3>
      <p class = "success-author" >${author}</p>
      <p>${title} has been added to the ${genre} successfully</p>
      <div class = "button-compound">
        <button id = "${id}" class="edit-button button" data-target="editBook">Edit</button>
        <button class="addnew-button button" data-target="addBook">Add New</button>
        <button class="list-button button" data-target="bookList">Book List</button>
      </div>
      `;
  
      return successSection;
    }
  }
  
  export default NewBookAddedSuccess;