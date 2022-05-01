module.exports = function (API) {
  class Article extends API.models.Object { /* TODO */ }
  class Audio extends API.models.Object { /* TODO */ }
  class Document extends API.models.Object { /* TODO */ }
  class Event extends API.models.Object { /* TODO */ }
  class Image extends API.models.Object { /* TODO */ }
  class Note extends API.models.Object { /* TODO */ }
  class Page extends API.models.Object { /* TODO */ }
  class Place extends API.models.Object { /* TODO */ }
  class Profile extends API.models.Object { /* TODO */ }
  class Relationship extends API.models.Object { /* TODO */ }
  class Tombstone extends API.models.Object { /* TODO */ }
  class Video extends API.models.Object { /* TODO */ }
  class Mention extends API.models.Link { /* TODO */ }

  for (const Model of [
    Article,
    Audio,
    Document,
    Event,
    Image,
    Note,
    Page,
    Place,
    Profile,
    Relationship,
    Tombstone,
    Video,
    Mention
  ]) {
    API.addModel(Model)
  }
}
