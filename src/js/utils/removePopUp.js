const removePopUp = () => {
  const dex = document.querySelector('#main');
  const popActive = document.querySelector('.success-container');
  popActive.classList.remove('pop-active');
  dex.removeChild(dex.childNodes[1]);
};

export default removePopUp;
