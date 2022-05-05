const { context } = require('../base')

module.exports = function (API) {
  class CvdNumC19HospPats extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumC19HospPats] })
}