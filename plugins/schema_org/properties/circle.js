const { context } = require('../base')

module.exports = function (API) {
  class Circle extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Circle] })
}