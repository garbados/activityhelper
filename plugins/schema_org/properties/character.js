const { context } = require('../base')

module.exports = function (API) {
  class Character extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Character] })
}