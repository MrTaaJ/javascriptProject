const clearFormValues = inputs => {
  inputs.forEach(input => {
    if (input.name === 'genre' || input.name === 'category') {
      input.value = 'Non Selected';
    } else {
      input.value = '';
    }
  });
};

export default clearFormValues;
