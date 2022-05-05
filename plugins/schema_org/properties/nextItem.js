const { context } = require('../base')

module.exports = function (API) {
  class NextItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NextItem] })
}