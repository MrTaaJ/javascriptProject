class AddBook {
  static callAddBook() {
    const formSection = document.createElement('div');
    formSection.className = 'add-book';
    formSection.innerHTML = `
        <h1 id="add-header">Add New Books</h1>
        <form class="form">
          <input type="text" name="title" placeholder="Title" class="book-input title" required />
          <input type="text" name="author" placeholder="Author" class="book-input author" required />
          <select name="genre" class = "book-input genre">
                <option value = "Non Selected" selected>Select Genre</option>
                <option value = "Fiction">Fiction</option>
                <option value = "Non-Fiction">Non-Fiction</option>
          </select>
          <select name="category" class = "book-input category">
            <option value = "Non Selected" selected>Select Category</option>                            
        </select>
          <button type="submit" class="form-button">Add</button>
        </form>
        `;

    return formSection;
  }
}

export default AddBook;
