module.exports = function (API) {
  API.plugin(require('./schema_org'))
  API.plugin(require('./activitystreams'))
  API.plugin(require('./activitypub'))
  API.plugin(require('./security_vocab'))
}
