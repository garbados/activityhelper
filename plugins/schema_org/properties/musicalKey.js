const { context } = require('../base')

module.exports = function (API) {
  class MusicalKey extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MusicalKey] })
}