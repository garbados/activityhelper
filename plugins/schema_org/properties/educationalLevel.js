const { context } = require('../base')

module.exports = function (API) {
  class EducationalLevel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EducationalLevel] })
}