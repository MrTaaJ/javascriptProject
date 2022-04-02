const getFormValues = (inputs) => {
  const getID = () => {
    const id = `_${Math.random()
      .toString(36)
      .substring(2, 9)}`;
    return id;
  };

  const inputValues = { id: getID() };
  inputs.forEach(input => {
    inputValues[input.name] = input.value;
  });
  return inputValues;
};

export default getFormValues;