const { context } = require('../base')

module.exports = function (API) {
  class CvdFacilityId extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdFacilityId] })
}