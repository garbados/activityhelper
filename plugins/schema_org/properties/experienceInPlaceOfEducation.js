const { context } = require('../base')

module.exports = function (API) {
  class ExperienceInPlaceOfEducation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExperienceInPlaceOfEducation] })
}