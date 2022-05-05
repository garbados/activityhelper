const { context } = require('../base')

module.exports = function (API) {
  class Followup extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Followup] })
}