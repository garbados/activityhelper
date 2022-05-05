const { context } = require('../base')

module.exports = function (API) {
  class Editor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Editor] })
}