const { context } = require('../base')

module.exports = function (API) {
  class CvdNumC19MechVentPats extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumC19MechVentPats] })
}