const { context } = require('../base')

module.exports = function (API) {
  class NumberOfForwardGears extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfForwardGears] })
}