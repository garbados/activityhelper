const { context } = require('../base')

module.exports = function (API) {
  class BirthPlace extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BirthPlace] })
}