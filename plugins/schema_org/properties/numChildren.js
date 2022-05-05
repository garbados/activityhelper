const { context } = require('../base')

module.exports = function (API) {
  class NumChildren extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumChildren] })
}