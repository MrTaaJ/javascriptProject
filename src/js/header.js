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
              >
              Awesome Books
          </a>
          <ul>
            <li>
              <a
                href="#book-list"
                aria-label="Book List button"
                class="nav-button"
              >
                Book List
              </a>
            </li>
            <li>
              <a
                href="#add-book"
                aria-label="Add Book button"
                class="nav-button"
              >
                Add Book
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                aria-label="Contact Us button"
                class="nav-button"
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