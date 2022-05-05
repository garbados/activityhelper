const { context } = require('../base')

module.exports = function (API) {
  class CharacterAttribute extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CharacterAttribute] })
}