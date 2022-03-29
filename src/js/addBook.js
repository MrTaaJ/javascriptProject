class AddBook {
    static callAddBook() {
        const formSection = document.createElement('div');
        formSection.className = 'add-book';
        formSection.innerHTML = `
        <h1 id="add-header">Add New Books</h1>
        <form class="form">
          <input type="text" name="title" placeholder="Title" class="title" required />
          <input type="text" name="author" placeholder="Author" class="author" required />
          <button type="submit" class="form-button">Add</button>
        </form>
        `;

        return formSection;
    }
}

export default AddBook;