const { context } = require('../base')

module.exports = function (API) {
  class PetsAllowed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PetsAllowed] })
}