const { context } = require('../base')

module.exports = function (API) {
  class Events extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Events] })
}