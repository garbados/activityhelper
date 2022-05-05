const { context } = require('../base')

module.exports = function (API) {
  class IdentifyingExam extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IdentifyingExam] })
}