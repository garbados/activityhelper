const { context } = require('../base')

module.exports = function (API) {
  class SpokenByCharacter extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SpokenByCharacter] })
}