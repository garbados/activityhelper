const { context } = require('../base')

module.exports = function (API) {
  class CorrectionsPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CorrectionsPolicy] })
}