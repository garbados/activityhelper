const { context } = require('../base')

module.exports = function (API) {
  class Pathophysiology extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Pathophysiology] })
}