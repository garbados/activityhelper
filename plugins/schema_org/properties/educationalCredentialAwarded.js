const { context } = require('../base')

module.exports = function (API) {
  class EducationalCredentialAwarded extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalCredentialAwarded] })
}