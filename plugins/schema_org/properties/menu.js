const { context } = require('../base')

module.exports = function (API) {
  class Menu extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Menu] })
}