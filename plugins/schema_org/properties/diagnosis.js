const { context } = require('../base')

module.exports = function (API) {
  class Diagnosis extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Diagnosis] })
}