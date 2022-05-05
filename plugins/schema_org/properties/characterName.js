const { context } = require('../base')

module.exports = function (API) {
  class CharacterName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CharacterName] })
}