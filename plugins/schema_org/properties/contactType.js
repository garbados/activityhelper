const { context } = require('../base')

module.exports = function (API) {
  class ContactType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContactType] })
}