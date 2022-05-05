const { context } = require('../base')

module.exports = function (API) {
  class DosageForm extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DosageForm] })
}