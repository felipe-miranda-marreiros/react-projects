function componentToHex(c) {
  var hex = c.toString(16);
  // eslint-disable-next-line eqeqeq
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
