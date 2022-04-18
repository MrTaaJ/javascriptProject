const loadPage = (dex, tabObject) => {
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(tabObject);
};

export default loadPage;
