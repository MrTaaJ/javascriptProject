(() => {
  'use strict';
  const t = class {
      static callAddBook() {
        const t = document.createElement('div');
        return (
          (t.className = 'add-book'),
          (t.innerHTML =
            '\n        <h1 id="add-header">Add New Books</h1>\n        <form class="form">\n          <input type="text" name="title" placeholder="Title" class="title" required />\n          <input type="text" name="author" placeholder="Author" class="author" required />\n          <button type="submit" class="form-button">Add</button>\n        </form>\n        '),
          t
        );
      }
    },
    e = class {
      static callBookList() {
        const t = document.createElement('table');
        return (
          (t.className = 'table'),
          (t.innerHTML =
            '\n        <thead>\n            <tr id="table-header">\n              <th>Author</th>\n              <th>Title</th>\n              <th></th>\n            </tr>\n        </thead>\n        <tbody class="book-container"></tbody>\n        '),
          t
        );
      }
    },
    n = class {
      static callContactUs() {
        const t = document.createElement('div');
        return (
          (t.className = 'contact-us'),
          (t.innerHTML =
            '\n        <h1 id="contact-header">Contact Information</h1>\n        <p>Do have any questions or you just want to say "Hello"?<br>\n        You can reach out to us!\n        </p>\n        <ul class="contact-info">\n          <l1>Our e-mail: mail@mail.com</l1>\n          <l1>Our phone number: 07030004321</l1>\n          <l1>Our address: Everywhere and Nowhere</l1>\n        </ul>\n        '),
          t
        );
      }
    },
    a = class {
      constructor(t, e, n, a) {
        (this.title = t), (this.author = e), (this.id = n), (this.container = a);
      }
      clearData() {
        (this.title.value = ''), (this.author.value = '');
      }
      addData() {
        const t = { id: this.id, title: '', author: '' };
        return (t.title = this.title), (t.author = this.author), t;
      }
      updateNewBook(t) {
        const { id: e, title: n, author: a } = t,
          o = document.createElement('tr'),
          r = document.createElement('td'),
          l = document.createElement('td'),
          c = document.createElement('td'),
          i = document.createElement('button');
        (o.className = 'book'),
          (i.id = e),
          (i.className = 'remove-button'),
          (i.innerText = 'Remove'),
          (r.innerText = a),
          (l.innerText = n),
          c.append(i),
          o.append(r, l, c),
          this.container.append(o);
      }
      deleteBook() {
        const t = document.querySelector(`#${this.id}`).parentElement.parentElement;
        this.container.removeChild(t);
      }
    },
    o = document.createDocumentFragment(),
    r = document.createElement('main');
  var l;
  (r.className = 'main'),
    (r.id = 'main'),
    (l = e.callBookList()),
    r.appendChild(l),
    o.appendChild(
      class {
        static callHeader() {
          const t = document.createElement('header');
          return (
            (t.className = 'header'),
            (t.innerHTML =
              '\n        <nav>\n          <a id="logo"\n                href="#home"\n                aria-label="Return Home button"\n                class="nav-button"\n                data-target="bookList"\n              >\n              Awesome Books\n          </a>\n          <ul class="nav-container">\n            <li>\n              <a\n                href="#book-list"\n                aria-label="Book List button"\n                class="nav-button"\n                data-target="bookList"\n              >\n                Book List\n              </a>\n            </li>\n            <li>\n              <a\n                href="#add-book"\n                aria-label="Add Book button"\n                class="nav-button"\n                data-target="addBook"\n              >\n                Add Book\n              </a>\n            </li>\n            <li>\n              <a\n                href="#contact-us"\n                aria-label="Contact Us button"\n                class="nav-button"\n                data-target="contactUs"\n              >\n                Contact Us\n              </a>\n            </li>\n          </ul>\n        </nav>\n        '),
            t
          );
        }
      }.callHeader(),
    ),
    o.appendChild(r),
    o.appendChild(
      class {
        static callFooter() {
          const t = document.createElement('footer');
          return (t.innerHTML = '\n        <h3>Copyright</h2>\n        '), t;
        }
      }.callFooter(),
    ),
    document.querySelector('.container').appendChild(o);
  const c = document.querySelector('.nav-container'),
    i = () => ({
      title: document.querySelector('.title'),
      author: document.querySelector('.author'),
      bookContainer: document.querySelector('.book-container'),
    });
  let s = [];
  const d = t => {
      localStorage.setItem('storeLocal', JSON.stringify(t));
    },
    u = () =>
      `_${Math.random()
        .toString(36)
        .substring(2, 9)}`,
    m = t => {
      if ((t.preventDefault(), t.target.classList.contains('remove-button'))) {
        const { id: e } = t.target,
          { title: n, author: o, bookContainer: r } = i();
        new a(n, o, e, r).deleteBook(), (s = s.filter(t => t.id !== e)), d(s);
      }
    },
    h = t => {
      const { title: e, author: n, bookContainer: o } = i(),
        r = new a(e, n, u(), o);
      t.forEach(t => {
        r.updateNewBook(t);
      });
    },
    b = t => {
      t.preventDefault();
      const { title: n, author: o, bookContainer: r } = i(),
        l = new a(n.value, o.value, u(), r);
      s.push(l.addData()),
        d(s),
        (() => {
          const t = document.querySelector('#main');
          t.removeChild(t.childNodes[0]), t.appendChild(e.callBookList());
          const { bookContainer: n } = i();
          n.addEventListener('click', m), h(s);
        })(),
        l.updateNewBook(l.addData());
    };
  c.addEventListener('click', a => {
    if (a.target.classList.contains('nav-button')) {
      const o = {
          bookList: e.callBookList(),
          addBook: t.callAddBook(),
          contactUs: n.callContactUs(),
        },
        r = a.target.dataset.target;
      ((t, e) => {
        const n = document.querySelector('#main');
        if ((n.removeChild(n.childNodes[0]), n.appendChild(t), 'bookList' === e)) {
          const { bookContainer: t } = i();
          t.addEventListener('click', m), h(s);
        } else 'addBook' === e && document.querySelector('.form').addEventListener('submit', b);
      })(o[r], r);
    }
  }),
    window.addEventListener('load', () => {
      const t = localStorage.getItem('storeLocal'),
        { bookContainer: e } = i();
      t && ((s = JSON.parse(t)), h(s), e.addEventListener('click', m));
    });
})();
