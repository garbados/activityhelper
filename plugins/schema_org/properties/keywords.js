const { context } = require('../base')

module.exports = function (API) {
  class Keywords extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Keywords] })
}