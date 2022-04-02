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
                <option value = "choose" selected>Select Genre</option>
                <option value = "Fiction">Fiction</option>
                <option value = "Non-Fiction">Non-Fiction</option>
                <option value = "other-genre">Other Category</option>
          </select>
          <input type="text" name="category" placeholder="Enter Category" class="book-input other-category" required />
          <button type="submit" class="form-button">Add</button>
        </form>
        `;

    return formSection;
  }
}

export default AddBook;
