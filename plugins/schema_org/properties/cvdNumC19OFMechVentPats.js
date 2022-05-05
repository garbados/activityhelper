const { context } = require('../base')

module.exports = function (API) {
  class CvdNumC19OFMechVentPats extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumC19OFMechVentPats] })
}