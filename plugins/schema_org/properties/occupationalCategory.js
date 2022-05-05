const { context } = require('../base')

module.exports = function (API) {
  class OccupationalCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OccupationalCategory] })
}