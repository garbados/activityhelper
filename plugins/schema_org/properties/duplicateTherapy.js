const { context } = require('../base')

module.exports = function (API) {
  class DuplicateTherapy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DuplicateTherapy] })
}