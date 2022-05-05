const { context } = require('../base')

module.exports = function (API) {
  class ApplicantLocationRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicantLocationRequirements] })
}