const { context } = require('../base')

module.exports = function (API) {
  class HospitalAffiliation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HospitalAffiliation] })
}