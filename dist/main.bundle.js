(() => {
  'use strict';
  const e = class {
      static callAddBook() {
        const e = document.createElement('div');
        return (
          (e.className = 'add-book'),
          (e.innerHTML =
            '\n        <h1 id="add-header">Add New Books</h1>\n        <form class="form">\n          <input type="text" name="title" placeholder="Title" class="book-input title" required />\n          <input type="text" name="author" placeholder="Author" class="book-input author" required />\n          <select name="genre" class = "book-input genre">\n                <option value = "Non Selected" selected>Select Genre</option>\n                <option value = "Fiction">Fiction</option>\n                <option value = "Non-Fiction">Non-Fiction</option>\n          </select>\n          <select name="category" class = "book-input category">\n            <option value = "Non Selected" selected>Select Category</option>                            \n          </select>\n          <button type="submit" class="form-button">Add</button>\n        </form>\n        '),
          e
        );
      }
    },
    t = class {
      static callBookList() {
        const e = document.createElement('table');
        return (
          (e.className = 'table'),
          (e.innerHTML =
            '\n        <thead>\n            <tr id="table-header">\n              <th>Author</th>\n              <th>Title</th>\n              <th>Genre</th>\n              <th>Category</th>\n              <th></th>\n              <th></th>\n            </tr>\n        </thead>\n        <tbody class="book-container"></tbody>\n        '),
          e
        );
      }
    },
    n = class {
      static callContactUs() {
        const e = document.createElement('div');
        return (
          (e.className = 'contact-us'),
          (e.innerHTML =
            '\n        <h1 id="contact-header">Contact Information</h1>\n        <p>Do have any questions or you just want to say "Hello"?<br>\n        You can reach out to us!\n        </p>\n        <ul class="contact-info">\n          <l1>Our e-mail: mail@mail.com</l1>\n          <l1>Our phone number: 07030004321</l1>\n          <l1>Our address: Everywhere and Nowhere</l1>\n        </ul>\n        '),
          e
        );
      }
    },
    o = () => {
      const e = document.querySelector('.genre'),
        t = document.querySelector('.category');
      'Fiction' === e.value
        ? (t.innerHTML =
            '\n    <option value = "Non Selected" selected>Select Category</option>\n    <option value = "Action & Adventure">Action & Adventure</option>\n    <option value = "Comic">Comic</option>\n    <option value = "Classic">Classic</option>\n    <option value = "Detective & Mystery">Detective & Mystery</option>\n    <option value = "Historical Fiction">Historical Fiction</option>\n    <option value = "Horror">Horror</option>\n    <option value = "Literal Fiction">Literal Fiction</option>\n    <option value = "Romance">Romance</option>\n    <option value = "Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>\n')
        : 'Non-Fiction' === e.value
        ? (t.innerHTML =
            '\n    <option value = "Non Selected" selected>Select Category</option>              \n    <option value = "Biographies">Biographies</option>\n    <option value = "Business">Business</option>\n    <option value = "Computer & Tech">Computer & Tech</option>\n    <option value = "Cooking">Cooking</option>\n    <option value = "Finance">Finance</option>\n    <option value = "Health & Fitness">Health & Fitness</option>\n    <option value = "History">History</option>\n    <option value = "Self-Help">Self-Help</option>\n    <option value = "Science & Math">Science & Math</option>\n')
        : 'Non Selected' === e.value &&
          (t.innerHTML =
            '\n    <option value = "Non Selected" selected>Select Category</option>\n');
    },
    a = () => {
      const e = document.querySelector('#main');
      document.querySelector('.success-container').classList.remove('pop-active'),
        e.removeChild(e.childNodes[1]);
    },
    c = class {
      constructor(e, t, n) {
        (this.title = e), (this.author = t), (this.id = n);
      }
      static container() {
        return document.querySelector('.book-container');
      }
      static updateNewBook(e) {
        const { id: t, title: n, author: o } = e,
          { genre: a, category: c } = e,
          i = document.createElement('tr'),
          l = document.createElement('td'),
          s = document.createElement('td'),
          r = document.createElement('td'),
          d = document.createElement('td'),
          u = document.createElement('td'),
          p = document.createElement('td'),
          m = document.createElement('button'),
          h = document.createElement('button');
        (i.className = 'book'),
          (m.id = t),
          (h.className = `edit-button ${t}`),
          (m.className = 'remove-button'),
          (m.innerText = 'Remove'),
          (h.innerText = 'Edit'),
          (l.innerText = o),
          (s.innerText = n),
          (r.innerText = a),
          (d.innerText = c),
          u.append(m),
          p.append(h),
          i.append(l, s, r, d, u, p),
          this.container().append(i);
      }
      static deleteBook(e) {
        const t = document.querySelector(`#${e}`).parentElement.parentElement;
        this.container().removeChild(t);
      }
    },
    i = () => {
      const e = localStorage.getItem('storeLocal');
      let t = [];
      return e && (t = JSON.parse(e)), t;
    };
  let l,
    s = [];
  const r = e => {
      localStorage.setItem('storeLocal', JSON.stringify(e));
    },
    d = e => {
      if ((e.preventDefault(), e.target.classList.contains('remove-button'))) {
        const { id: t } = e.target;
        c.deleteBook(t), (s = s.filter(e => e.id !== t)), r(s);
      } else e.target.classList.contains('edit-button') && console.log(e.target.classList);
    },
    u = e => {
      e.forEach(e => {
        c.updateNewBook(e);
      });
    },
    p = e => {
      if (e.target.classList.contains('button')) {
        const e = t.callBookList();
        a();
        const n = document.querySelector('#main');
        n.removeChild(n.childNodes[0]),
          n.appendChild(e),
          u(s),
          document.querySelector('.book-container').addEventListener('click', d);
      }
    },
    m = e => {
      e.preventDefault();
      const t = e.target.querySelectorAll('.book-input');
      (l = (e => {
        const t = {
          id: `_${Math.random()
            .toString(36)
            .substring(2, 9)}`,
        };
        return (
          e.forEach(e => {
            t[e.name] = e.value;
          }),
          t
        );
      })(t)),
        s.push(l),
        r(s),
        (() => {
          document.querySelector('#main').appendChild(
            class {
              static callNewBookAddedSuccess(e) {
                const { title: t, author: n, genre: o } = e,
                  a = document.createElement('div');
                return (
                  (a.className = 'success-container'),
                  (a.innerHTML = `\n      <div class = "success-background"\n      <div class = "success">\n      <h3 id="success-header">New Book Added Successfully</h3>\n      <p class = "success-author" >${n}</p>\n      <p>${t} has been added to the ${o} successfully</p>\n      <button class="list-button button" data-target="bookList">Return to Book List</button>\n      </div>\n      </div>\n      `),
                  a
                );
              }
            }.callNewBookAddedSuccess(l),
          );
          const e = document.querySelector('.success-container'),
            t = document.querySelector('.success-background'),
            n = document.querySelector('.list-button');
          e.classList.add('pop-active'),
            t.addEventListener('click', e => e.stopPropagation()),
            n.addEventListener('click', p),
            e.addEventListener('click', a);
        })(),
        t.forEach(e => {
          'genre' === e.name || 'category' === e.name ? (e.value = 'Non Selected') : (e.value = '');
        });
    },
    h = document.createDocumentFragment(),
    v = document.createElement('main');
  var b;
  (v.className = 'main'),
    (v.id = 'main'),
    (b = t.callBookList()),
    v.appendChild(b),
    h.appendChild(
      class {
        static callHeader() {
          const e = document.createElement('header');
          return (
            (e.className = 'header'),
            (e.innerHTML =
              '\n        <nav>\n          <a id="logo"\n                href="#home"\n                aria-label="Return Home button"\n                class="nav-button"\n                data-target="bookList"\n              >\n              Awesome Books\n          </a>\n          <ul class="nav-container">\n            <li>\n              <a\n                href="#book-list"\n                aria-label="Book List button"\n                class="nav-button"\n                data-target="bookList"\n              >\n                Book List\n              </a>\n            </li>\n            <li>\n              <a\n                href="#add-book"\n                aria-label="Add Book button"\n                class="nav-button"\n                data-target="addBook"\n              >\n                Add Book\n              </a>\n            </li>\n            <li>\n              <a\n                href="#contact-us"\n                aria-label="Contact Us button"\n                class="nav-button"\n                data-target="contactUs"\n              >\n                Contact Us\n              </a>\n            </li>\n          </ul>\n        </nav>\n        '),
            e
          );
        }
      }.callHeader(),
    ),
    h.appendChild(v),
    h.appendChild(
      class {
        static callFooter() {
          const e = document.createElement('footer');
          return (e.innerHTML = '\n        <h3>Copyright</h2>\n        '), e;
        }
      }.callFooter(),
    ),
    document.querySelector('.container').appendChild(h),
    document.querySelector('.nav-container').addEventListener('click', a => {
      if (
        ((s = i()),
        a.target.classList.contains('nav-button') || a.target.classList.contains('button'))
      ) {
        const c = {
            bookList: t.callBookList(),
            addBook: e.callAddBook(),
            contactUs: n.callContactUs(),
            editBook: t.callBookList(),
          },
          i = a.target.dataset.target;
        ((e, t) => {
          const n = document.querySelector('#main');
          if ((n.removeChild(n.childNodes[0]), n.appendChild(e), 'bookList' === t))
            document.querySelector('.book-container').addEventListener('click', d), u(s);
          else if ('addBook' === t) {
            const e = document.querySelector('.form');
            document.querySelector('.genre').addEventListener('change', o),
              e.addEventListener('submit', m);
          }
        })(c[i], i);
      }
    }),
    window.addEventListener('load', () => {
      const e = i(),
        t = document.querySelector('.book-container');
      e &&
        ((e => {
          u(e);
        })(e),
        t.addEventListener('click', d));
    });
})();
