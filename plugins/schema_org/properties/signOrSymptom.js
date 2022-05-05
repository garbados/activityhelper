const { context } = require('../base')

module.exports = function (API) {
  class SignOrSymptom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SignOrSymptom] })
}