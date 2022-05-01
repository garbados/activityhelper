module.exports = function (API) {
  API.plugin(require('./core'))
  API.plugin(require('./extended/activity'))
  API.plugin(require('./extended/actor'))
  API.plugin(require('./extended/object'))
}
