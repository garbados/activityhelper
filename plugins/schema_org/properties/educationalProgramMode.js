const { context } = require('../base')

module.exports = function (API) {
  class EducationalProgramMode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalProgramMode] })
}