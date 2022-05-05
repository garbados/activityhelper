const { context } = require('../base')

module.exports = function (API) {
  class AssociatedDisease extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssociatedDisease] })
}