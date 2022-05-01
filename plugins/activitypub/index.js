module.exports = function (API) {
  const { BaseProperty } = API

  class Inbox extends BaseProperty { /* TODO */ }
  class Outbox extends BaseProperty { /* TODO */ }
  class Following extends BaseProperty { /* TODO */ }
  class Followers extends BaseProperty { /* TODO */ }
  class Liked extends BaseProperty { /* TODO */ }
  class Streams extends BaseProperty { /* TODO */ }
  class PreferredUsername extends BaseProperty { /* TODO */ }
  class Endpoints extends BaseProperty { /* TODO */ }

  for (const Property of [
    Inbox,
    Outbox,
    Following,
    Followers,
    Liked,
    Streams,
    PreferredUsername,
    Endpoints
  ]) {
    API.addProperty(Property)
  }

  // activitypub adds new properties to all actor objects
  API.models.Actor.properties = API.models.Actor.properties.concat([
    Inbox,
    Outbox,
    Following,
    Followers,
    Liked,
    Streams,
    PreferredUsername,
    Endpoints
  ])
}
