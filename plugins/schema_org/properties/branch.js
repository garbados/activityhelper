const { context } = require('../base')

module.exports = function (API) {
  class Branch extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Branch] })
}