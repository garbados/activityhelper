const { context } = require('../base')

module.exports = function (API) {
  class Model extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Model] })
}