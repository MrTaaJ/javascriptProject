const addPopUp = (dex, func, tempBook) => {
  dex.appendChild(func(tempBook));
  const popActive = document.querySelector('.success-container');
  const stopPropagation = document.querySelector('.success-background');
  popActive.classList.add('pop-active');
  stopPropagation.addEventListener('click', e => e.stopPropagation());
};

export default addPopUp;
