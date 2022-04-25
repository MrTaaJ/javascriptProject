import selectCategory from './utils/formCategorySelector';

class EditBook {
  static callEditBook() {
    const formSection = document.createElement('div');
    formSection.className = 'edit-book success-container';
    formSection.innerHTML = `
          <div class = 'success-background'>
          <button class="cancel-button">Cancel</button>
          <h1 id="add-header">Edit Books</h1>
          <form class="form">
            <input type="text" name="title" placeholder="Title" class="book-input title" required />
            <input type="text" name="author" placeholder="Author" class="book-input author" required />
            <select name="genre" class = "book-input genre">
                  <option value = "nonSelected" selected>Select Genre</option>
                  <option value = "Fiction">Fiction</option>
                  <option value = "nonFiction">Non-Fiction</option>
            </select>
            <select name="category" class = "book-input category">
              <option value = "nonSelected" selected>Select Category</option>                            
            </select>
            <button type="submit" class="form-button">Update</button>
          </form>
          </div>
          `;
    return formSection;
  }

  static changeParameter(toBeEdited) {
    const { title, author } = toBeEdited;
    const { genre, category } = toBeEdited;
    const titleContainer = document.querySelector('.title');
    const authorContainer = document.querySelector('.author');
    const genreContainer = document.querySelector('.genre');
    const categoryContainer = document.querySelector('.category');
    titleContainer.value = title;
    authorContainer.value = author;
    genreContainer.value = genre;
    selectCategory();
    categoryContainer.value = category;
  }
}

export default EditBook;
