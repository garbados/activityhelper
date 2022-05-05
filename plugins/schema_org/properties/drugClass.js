const { context } = require('../base')

module.exports = function (API) {
  class DrugClass extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DrugClass] })
}