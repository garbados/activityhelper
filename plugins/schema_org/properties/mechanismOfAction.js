const { context } = require('../base')

module.exports = function (API) {
  class MechanismOfAction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MechanismOfAction] })
}