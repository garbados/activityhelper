const { context } = require('../base')

module.exports = function (API) {
  class Candidate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Candidate] })
}