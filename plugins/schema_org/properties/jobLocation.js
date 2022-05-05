const { context } = require('../base')

module.exports = function (API) {
  class JobLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [JobLocation] })
}