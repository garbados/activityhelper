const { context } = require('../base')

module.exports = function (API) {
  class SupersededBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SupersededBy] })
}