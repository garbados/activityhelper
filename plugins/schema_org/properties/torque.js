const { context } = require('../base')

module.exports = function (API) {
  class Torque extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Torque] })
}