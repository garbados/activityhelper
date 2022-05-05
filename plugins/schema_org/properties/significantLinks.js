const { context } = require('../base')

module.exports = function (API) {
  class SignificantLinks extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SignificantLinks] })
}