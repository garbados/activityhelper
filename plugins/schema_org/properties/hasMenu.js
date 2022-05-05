const { context } = require('../base')

module.exports = function (API) {
  class HasMenu extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasMenu] })
}