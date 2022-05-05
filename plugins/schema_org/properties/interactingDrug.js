const { context } = require('../base')

module.exports = function (API) {
  class InteractingDrug extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InteractingDrug] })
}