const { context } = require('../base')

module.exports = function (API) {
  class EmissionsCO2 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EmissionsCO2] })
}