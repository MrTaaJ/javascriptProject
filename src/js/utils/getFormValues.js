import getID from './getID';

const getFormValues = inputs => {
  const inputValues = { id: getID() };
  inputs.forEach(input => {
    inputValues[input.name] = input.value;
  });
  return inputValues;
};

export default getFormValues;
