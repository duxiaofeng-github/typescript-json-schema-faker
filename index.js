const jsf = require("json-schema-faker");

function fake(schema, refs) {
  return jsf(schema, refs);
}

module.exports = {
  default: fake,
  fake: fake
};
