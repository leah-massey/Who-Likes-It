const likes = function (names) {
  if (names.length === 1) {
    return `${names} likes this`;
  } else {
    return `${names[0]} and ${names[1]} like this`;
  }
};

module.exports = likes;
