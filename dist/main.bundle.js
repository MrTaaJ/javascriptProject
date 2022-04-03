(() => {
  'use strict';
  const t = class {
      static callAddBook() {
        const t = document.createElement('div');
        return (
          (t.className = 'add-book'),
          (t.innerHTML =
            '\n        <h1 id="add-header">Add New Books</h1>\n        <form class="form">\n          <input type="text" name="title" placeholder="Title" class="book-input title" required />\n          <input type="text" name="author" placeholder="Author" class="book-input author" required />\n          <select name="genre" class = "book-input genre">\n                <option value = "choose" selected>Select Genre</option>\n                <option value = "Fiction">Fiction</option>\n                <option value = "Non-Fiction">Non-Fiction</option>\n          </select>\n          <select name="category" class = "book-input category">\n            <option value = "choose" selected>Select Category</option>\n            <option value = "Action & Adventure">Action & Adventure</option>\n            <option value = "Comic">Comic</option>\n            <option value = "Classic">Classic</option>\n            <option value = "Detective & Mystery">Detective & Mystery</option>\n            <option value = "Historical Fiction">Historical Fiction</option>\n            <option value = "Horror">Horror</option>\n            <option value = "Literal Fiction">Literal Fiction</option>\n            <option value = "Romance">Romance</option>\n            <option value = "Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>                            \n        </select>\n          <button type="submit" class="form-button">Add</button>\n        </form>\n        '),
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
            '\n        <thead>\n            <tr id="table-header">\n              <th>Author</th>\n              <th>Title</th>\n              <th>Genre</th>\n              <th>Category</th>\n              <th></th>\n              <th></th>\n            </tr>\n        </thead>\n        <tbody class="book-container"></tbody>\n        '),
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
    o = () => {
      const t = document.querySelector('.genre'),
        e = document.querySelector('.category');
      'Fiction' === t.value
        ? (e.innerHTML =
            '\n    <option value = "choose" selected>Select Category</option>\n    <option value = "Action & Adventure">Action & Adventure</option>\n    <option value = "Comic">Comic</option>\n    <option value = "Classic">Classic</option>\n    <option value = "Detective & Mystery">Detective & Mystery</option>\n    <option value = "Historical Fiction">Historical Fiction</option>\n    <option value = "Horror">Horror</option>\n    <option value = "Literal Fiction">Literal Fiction</option>\n    <option value = "Romance">Romance</option>\n    <option value = "Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>\n')
        : 'Non-Fiction' === t.value &&
          (e.innerHTML =
            '\n    <option value = "choose" selected>Select Category</option>              \n    <option value = "Biographies">Biographies</option>\n    <option value = "Business">Business</option>\n    <option value = "Computer & Tech">Computer & Tech</option>\n    <option value = "Cooking">Cooking</option>\n    <option value = "Finance">Finance</option>\n    <option value = "Health & Fitness">Health & Fitness</option>\n    <option value = "History">History</option>\n    <option value = "Self-Help">Self-Help</option>\n    <option value = "Science & Math">Science & Math</option>\n');
    },
    a = class {
      constructor(t, e, n) {
        (this.title = t), (this.author = e), (this.id = n);
      }
      static container() {
        return document.querySelector('.book-container');
      }
      clearData() {
        (this.title.value = ''), (this.author.value = '');
      }
      addData() {
        const t = { id: this.id, title: '', author: '' };
        return (t.title = this.title), (t.author = this.author), t;
      }
      static updateNewBook(t) {
        const { id: e, title: n, author: o, genre: a, category: i } = t,
          c = document.createElement('tr'),
          l = document.createElement('td'),
          r = document.createElement('td'),
          s = document.createElement('td'),
          u = document.createElement('td'),
          d = document.createElement('td'),
          p = document.createElement('td'),
          m = document.createElement('button'),
          h = document.createElement('button');
        (c.className = 'book'),
          (m.id = e),
          (h.className = `edit-button ${e}`),
          (m.className = 'remove-button'),
          (m.innerText = 'Remove'),
          (h.innerText = 'Edit'),
          (l.innerText = o),
          (r.innerText = n),
          (s.innerText = a),
          (u.innerText = i),
          d.append(m),
          p.append(h),
          c.append(l, r, s, u, d, p),
          this.container().append(c);
      }
      static deleteBook(t) {
        const e = document.querySelector(`#${t}`).parentElement.parentElement;
        this.container().removeChild(e);
      }
    },
    i = () => {
      const t = localStorage.getItem('storeLocal');
      let e = [];
      return t && (e = JSON.parse(t)), e;
    };
  let c,
    l = [];
  const r = t => {
      localStorage.setItem('storeLocal', JSON.stringify(t));
    },
    s = t => {
      if ((t.preventDefault(), t.target.classList.contains('remove-button'))) {
        const { id: e } = t.target;
        a.deleteBook(e), (l = l.filter(t => t.id !== e)), r(l);
      }
    },
    u = t => {
      t.forEach(t => {
        a.updateNewBook(t);
      });
    },
    d = t => {
      if (t.target.classList.contains('button')) {
        const t = e.callBookList(),
          n = document.querySelector('#main');
        n.removeChild(n.childNodes[0]),
          n.appendChild(t),
          u(l),
          document.querySelector('.book-container').addEventListener('click', s);
      }
    },
    p = t => {
      t.preventDefault();
      const e = t.target.querySelectorAll('.book-input');
      (c = (t => {
        const e = {
          id: `_${Math.random()
            .toString(36)
            .substring(2, 9)}`,
        };
        return (
          t.forEach(t => {
            e[t.name] = t.value;
          }),
          e
        );
      })(e)),
        console.log(c),
        l.push(c),
        r(l),
        (() => {
          const t = document.querySelector('#main');
          t.removeChild(t.childNodes[0]),
            t.appendChild(
              class {
                static callNewBookAddedSuccess(t) {
                  const { title: e, author: n, id: o, genre: a } = t,
                    i = document.createElement('div');
                  return (
                    (i.className = 'success'),
                    (i.innerHTML = `\n      <h3 id="success-header">New Book Added Successfully</h3>\n      <p class = "success-author" >${n}</p>\n      <p>${e} has been added to the ${a} successfully</p>\n      <button class="list-button button" data-target="bookList">Return to Book List</button>\n      `),
                    i
                  );
                }
              }.callNewBookAddedSuccess(c),
            ),
            document.querySelector('.list-button').addEventListener('click', d);
        })();
    },
    m = document.createDocumentFragment(),
    h = document.createElement('main');
  var v;
  (h.className = 'main'),
    (h.id = 'main'),
    (v = e.callBookList()),
    h.appendChild(v),
    m.appendChild(
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
    m.appendChild(h),
    m.appendChild(
      class {
        static callFooter() {
          const t = document.createElement('footer');
          return (t.innerHTML = '\n        <h3>Copyright</h2>\n        '), t;
        }
      }.callFooter(),
    ),
    document.querySelector('.container').appendChild(m),
    document.querySelector('.nav-container').addEventListener('click', a => {
      if (
        ((l = i()),
        a.target.classList.contains('nav-button') || a.target.classList.contains('button'))
      ) {
        const i = {
            bookList: e.callBookList(),
            addBook: t.callAddBook(),
            contactUs: n.callContactUs(),
            editBook: e.callBookList(),
          },
          c = a.target.dataset.target;
        ((t, e) => {
          const n = document.querySelector('#main');
          if ((n.removeChild(n.childNodes[0]), n.appendChild(t), 'bookList' === e))
            document.querySelector('.book-container').addEventListener('click', s), u(l);
          else if ('addBook' === e) {
            const t = document.querySelector('.form');
            document.querySelector('.genre').addEventListener('change', o),
              t.addEventListener('submit', p);
          }
        })(i[c], c);
      }
    }),
    window.addEventListener('load', () => {
      const t = i(),
        e = document.querySelector('.book-container');
      t &&
        ((t => {
          u(t);
        })(t),
        e.addEventListener('click', s));
    });
})();
