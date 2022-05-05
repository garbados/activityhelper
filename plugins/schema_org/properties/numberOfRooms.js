const { context } = require('../base')

module.exports = function (API) {
  class NumberOfRooms extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfRooms] })
}