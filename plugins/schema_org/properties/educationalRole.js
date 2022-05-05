const { context } = require('../base')

module.exports = function (API) {
  class EducationalRole extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalRole] })
}