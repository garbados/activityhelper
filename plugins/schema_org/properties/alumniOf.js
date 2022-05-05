const { context } = require('../base')

module.exports = function (API) {
  class AlumniOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlumniOf] })
}