const { context } = require('../base')

module.exports = function (API) {
  class SmokingAllowed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SmokingAllowed] })
}