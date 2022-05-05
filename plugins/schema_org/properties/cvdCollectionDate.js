const { context } = require('../base')

module.exports = function (API) {
  class CvdCollectionDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdCollectionDate] })
}