const { context } = require('../base')

module.exports = function (API) {
  class TrialDesign extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrialDesign] })
}