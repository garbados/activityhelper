const { context } = require('../base')

module.exports = function (API) {
  class EducationalUse extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalUse] })
}