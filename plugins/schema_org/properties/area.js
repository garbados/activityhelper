const { context } = require('../base')

module.exports = function (API) {
  class Area extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Area] })
}