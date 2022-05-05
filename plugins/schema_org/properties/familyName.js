const { context } = require('../base')

module.exports = function (API) {
  class FamilyName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FamilyName] })
}