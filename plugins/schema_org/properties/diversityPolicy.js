const { context } = require('../base')

module.exports = function (API) {
  class DiversityPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DiversityPolicy] })
}