class NewBookAddedSuccess {
  static callNewBookAddedSuccess(newBook) {
    const { title, author, genre } = newBook;
    const successSection = document.createElement('div');
    successSection.className = 'success-container';
    successSection.innerHTML = `
      <div class = "success-background"
      <div class = "success">
      <h3 id="success-header">New Book Added Successfully</h3>
      <p class = "success-author" >${author}</p>
      <p>${title} has been added to the ${genre} successfully</p>
      <button class="list-button button" data-target="bookList">Return to Book List</button>
      <button class="addNewBook-button button">Add More Book</button>
      </div>
      </div>
      `;

    return successSection;
  }
}

export default NewBookAddedSuccess;
