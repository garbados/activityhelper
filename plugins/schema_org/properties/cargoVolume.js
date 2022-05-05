const { context } = require('../base')

module.exports = function (API) {
  class CargoVolume extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CargoVolume] })
}