const { context } = require('../base')

module.exports = function (API) {
  class RelevantSpecialty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelevantSpecialty] })
}