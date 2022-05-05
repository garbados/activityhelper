const { context } = require('../base')

module.exports = function (API) {
  class EducationalAlignment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalAlignment] })
}