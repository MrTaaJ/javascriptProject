const fictionCategory = `
    <option value = "nonSelected" selected>Select Category</option>
    <option value = "Action & Adventure">Action & Adventure</option>
    <option value = "Comic">Comic</option>
    <option value = "Classic">Classic</option>
    <option value = "Detective & Mystery">Detective & Mystery</option>
    <option value = "Historical Fiction">Historical Fiction</option>
    <option value = "Horror">Horror</option>
    <option value = "Literal Fiction">Literal Fiction</option>
    <option value = "Romance">Romance</option>
    <option value = "Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>
`;

const nonFictionCategory = `
    <option value = "nonSelected" selected>Select Category</option>              
    <option value = "Biographies">Biographies</option>
    <option value = "Business">Business</option>
    <option value = "Computer & Tech">Computer & Tech</option>
    <option value = "Cooking">Cooking</option>
    <option value = "Finance">Finance</option>
    <option value = "Health & Fitness">Health & Fitness</option>
    <option value = "History">History</option>
    <option value = "Self-Help">Self-Help</option>
    <option value = "Science & Math">Science & Math</option>
`;

const emptyCategory = `
    <option value = "nonSelected" selected>Select Category</option>
`;

const selectCategory = () => {
  const genreChange = document.querySelector('.genre');
  const category = document.querySelector('.category');
  const genreValue = {
    Fiction: fictionCategory,
    nonFiction: nonFictionCategory,
    nonSelected: emptyCategory,
  };
  const newChild = genreValue[genreChange.value];
  category.innerHTML = newChild;
};

export default selectCategory;
