const { context } = require('../base')

module.exports = function (API) {
  class Organizer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Organizer] })
}