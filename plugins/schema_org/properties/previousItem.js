const { context } = require('../base')

module.exports = function (API) {
  class PreviousItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PreviousItem] })
}