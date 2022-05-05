const { context } = require('../base')

module.exports = function (API) {
  class SpecialCommitments extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SpecialCommitments] })
}