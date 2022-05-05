const { context } = require('../base')

module.exports = function (API) {
  class PossibleTreatment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PossibleTreatment] })
}