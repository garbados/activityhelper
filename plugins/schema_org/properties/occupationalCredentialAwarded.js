const { context } = require('../base')

module.exports = function (API) {
  class OccupationalCredentialAwarded extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OccupationalCredentialAwarded] })
}