const getID = () => {
  const date = new Date();
  const [a, b, c, d, e] = date.toString().split(' ');
  const [e1, e2, e3] = e.toString().split(':');
  const dateID = a + b + c + d + e1 + e2 + e3;
  const id = `_${Math.random()
    .toString(36)
    .substring(2, 9)}${dateID}`;
  return id;
};

export default getID;
