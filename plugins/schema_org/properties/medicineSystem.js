const { context } = require('../base')

module.exports = function (API) {
  class MedicineSystem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MedicineSystem] })
}