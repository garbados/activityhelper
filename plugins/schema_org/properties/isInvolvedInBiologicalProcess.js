const { context } = require('../base')

module.exports = function (API) {
  class IsInvolvedInBiologicalProcess extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsInvolvedInBiologicalProcess] })
}