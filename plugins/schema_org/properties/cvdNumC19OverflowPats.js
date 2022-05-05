const { context } = require('../base')

module.exports = function (API) {
  class CvdNumC19OverflowPats extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumC19OverflowPats] })
}