const { context } = require('../base')

module.exports = function (API) {
  class Screenshot extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Screenshot] })
}