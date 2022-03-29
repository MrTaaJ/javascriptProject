class Header {
    static callHeader() {
        const headerSection = document.createElement('header');
        headerSection.className = 'header';
        headerSection.innerHTML = `
        <nav>
          <a id="logo"
                href="#home"
                aria-label="Return Home button"
                class="nav-button"
                data-target="bookList"
              >
              Awesome Books
          </a>
          <ul class="nav-container">
            <li>
              <a
                href="#book-list"
                aria-label="Book List button"
                class="nav-button"
                data-target="bookList"
              >
                Book List
              </a>
            </li>
            <li>
              <a
                href="#add-book"
                aria-label="Add Book button"
                class="nav-button"
                data-target="addBook"
              >
                Add Book
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                aria-label="Contact Us button"
                class="nav-button"
                data-target="contactUs"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        `;

        return headerSection;
    }
}

export default Header;