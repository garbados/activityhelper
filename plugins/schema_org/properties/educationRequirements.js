const { context } = require('../base')

module.exports = function (API) {
  class EducationRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationRequirements] })
}