const { context } = require('../base')

module.exports = function (API) {
  class Replacer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Replacer] })
}