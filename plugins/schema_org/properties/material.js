const { context } = require('../base')

module.exports = function (API) {
  class Material extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Material] })
}