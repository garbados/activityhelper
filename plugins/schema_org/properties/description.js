const { context } = require('../base')

module.exports = function (API) {
  class Description extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Description] })
}