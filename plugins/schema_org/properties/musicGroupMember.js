const { context } = require('../base')

module.exports = function (API) {
  class MusicGroupMember extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MusicGroupMember] })
}