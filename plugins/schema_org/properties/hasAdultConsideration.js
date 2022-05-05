const { context } = require('../base')

module.exports = function (API) {
  class HasAdultConsideration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasAdultConsideration] })
}