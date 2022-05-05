const { context } = require('../base')

module.exports = function (API) {
  class EducationalFramework extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalFramework] })
}