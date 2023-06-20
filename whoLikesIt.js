const likes = function (names) {
  if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
};

module.exports = likes;
