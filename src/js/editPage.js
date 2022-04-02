class EditBook {
    static callEditBook() {
      const formSection = document.createElement('div');
      formSection.className = 'edit-book';
      formSection.innerHTML = `
          <h1 id="add-header">Edit Books</h1>
          <form class="form">
            <input type="text" name="title" placeholder="Title" class="book-input title" required />
            <input type="text" name="author" placeholder="Author" class="book-input author" required />
            <select name="genre" class = "book-input genre">
                  <option value = "choose" selected>Select Genre</option>
                  <option value = "Fiction">Fiction</option>
                  <option value = "Non-Fiction">Non-Fiction</option>
                  <option value = "other-genre">Third Semester </option>
            </select>
            <input type="text" name="category" placeholder="Category" class="book-input" required />
            <button type="submit" class="form-button">Add</button>
          </form>
          `;
  
      return formSection;
    }
  }
  
  export default EditBook;
  