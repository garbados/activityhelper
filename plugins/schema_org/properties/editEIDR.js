const { context } = require('../base')

module.exports = function (API) {
  class EditEIDR extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EditEIDR] })
}