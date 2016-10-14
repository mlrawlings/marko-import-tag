function create(__helpers) {
  var marko = require("marko"),
      $ = require("jquery"),
      fn = $.fn,
      utils = require("./utils"),
      x = utils.x,
      y = utils.y,
      z = utils.z,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  require("foo");

  return function render(data, out) {
      };
}

(module.exports = require("marko").c(__filename)).c(create);
