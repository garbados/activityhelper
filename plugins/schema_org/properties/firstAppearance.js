const { context } = require('../base')

module.exports = function (API) {
  class FirstAppearance extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FirstAppearance] })
}