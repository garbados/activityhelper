const { context } = require('../base')

module.exports = function (API) {
  class Illustrator extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Illustrator] })
}