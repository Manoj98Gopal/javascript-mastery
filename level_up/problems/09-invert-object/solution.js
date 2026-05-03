function invertObject(obj) {
  const result = {};

  Object.entries(obj).forEach(([key, values], a) => {
    result[values] = key;
  });

  return result;
}

module.exports = invertObject;
