const { context } = require('../base')

module.exports = function (API) {
  class NumberOfCredits extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfCredits] })
}