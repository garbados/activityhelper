const { context } = require('../base')

module.exports = function (API) {
  class CompetencyRequired extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CompetencyRequired] })
}