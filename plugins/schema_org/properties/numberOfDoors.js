const { context } = require('../base')

module.exports = function (API) {
  class NumberOfDoors extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfDoors] })
}