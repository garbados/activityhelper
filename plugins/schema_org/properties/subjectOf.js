const { context } = require('../base')

module.exports = function (API) {
  class SubjectOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubjectOf] })
}