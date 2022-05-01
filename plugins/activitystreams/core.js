module.exports = function (API) {
  const { BaseProperty, BaseObject } = API

  /*
   **************
   * PROPERTIES *
   **************
   */

  class Actor extends BaseProperty {
    static validate (obj) {
      const validators = [API.models.Object.validate, API.models.Link.validate]
      return API.VALIDATORS.or(validators, obj)
    }
  }

  class Attachment extends BaseProperty {
    // TODO
  }

  class AttributedTo extends BaseProperty {
    // TODO
  }

  class Audience extends BaseProperty {
    // TODO
  }

  class Bcc extends BaseProperty {
    // TODO
  }

  class Bto extends BaseProperty {
    // TODO
  }

  class Cc extends BaseProperty {
    // TODO
  }

  class Context extends BaseProperty {
    // TODO
  }

  class Current extends BaseProperty {
    // TODO
  }

  class First extends BaseProperty {
    // TODO
  }

  class Generator extends BaseProperty {
    // TODO
  }

  class Icon extends BaseProperty {
    // TODO
  }

  class Id extends BaseProperty {
    // TODO
  }

  class Image extends BaseProperty {
    // TODO
  }

  class InReplyTo extends BaseProperty {
    // TODO
  }

  class Instrument extends BaseProperty {
    // TODO
  }

  class Last extends BaseProperty {
    // TODO
  }

  class Location extends BaseProperty {
    // TODO
  }

  class Items extends BaseProperty {
    // TODO
  }

  class OneOf extends BaseProperty {
    // TODO
  }

  class AnyOf extends BaseProperty {
    // TODO
  }

  class Closed extends BaseProperty {
    // TODO
  }

  class Origin extends BaseProperty {
    // TODO
  }

  class Next extends BaseProperty {
    // TODO
  }

  class ObjectProperty extends BaseProperty {
    // TODO
    static get propName () {
      return 'object'
    }
  }

  class Prev extends BaseProperty {
    // TODO
  }

  class Preview extends BaseProperty {
    // TODO
  }

  class Result extends BaseProperty {
    // TODO
  }

  class Replies extends BaseProperty {
    // TODO
  }

  class Tag extends BaseProperty {
    // TODO
  }

  class Target extends BaseProperty {
    // TODO
  }

  class To extends BaseProperty {
    // TODO
  }

  class Type extends BaseProperty {
    // TODO
  }

  class Url extends BaseProperty {
    // TODO
  }

  class Accuracy extends BaseProperty {
    // TODO
  }

  class Altitude extends BaseProperty {
    // TODO
  }

  class Content extends BaseProperty {
    // TODO
  }

  class Name extends BaseProperty {
    // TODO
  }

  class Duration extends BaseProperty {
    // TODO
  }

  class Height extends BaseProperty {
    // TODO
  }

  class Href extends BaseProperty {
    // TODO
  }

  class Hreflang extends BaseProperty {
    // TODO
  }

  class PartOf extends BaseProperty {
    // TODO
  }

  class Latitude extends BaseProperty {
    // TODO
  }

  class Longitude extends BaseProperty {
    // TODO
  }

  class MediaType extends BaseProperty {
    // TODO
  }

  class EndTime extends BaseProperty {
    // TODO
  }

  class Published extends BaseProperty {
    // TODO
  }

  class StartTime extends BaseProperty {
    // TODO
  }

  class Radius extends BaseProperty {
    // TODO
  }

  class Rel extends BaseProperty {
    // TODO
  }

  class StartIndex extends BaseProperty {
    // TODO
  }

  class Summary extends BaseProperty {
    // TODO
  }

  class TotalItems extends BaseProperty {
    // TODO
  }

  class Units extends BaseProperty {
    // TODO
  }

  class Updated extends BaseProperty {
    // TODO
  }

  class Width extends BaseProperty {
    // TODO
  }

  class Subject extends BaseProperty {
    // TODO
  }

  class Relationship extends BaseProperty {
    // TODO
  }

  class Describes extends BaseProperty {
    // TODO
  }

  class FormerType extends BaseProperty {
    // TODO
  }

  class Deleted extends BaseProperty {
    // TODO
  }

  class ContentMap extends BaseProperty {
    // TODO
  }

  class NameMap extends BaseProperty {
    // TODO
  }

  class SummaryMap extends BaseProperty {
    // TODO
  }

  class OrderedItems extends BaseProperty {
    // TODO
  }

  const properties = [
    Actor,
    Attachment,
    AttributedTo,
    Audience,
    Bcc,
    Bto,
    Cc,
    Context,
    Current,
    First,
    Generator,
    Icon,
    Id,
    Image,
    InReplyTo,
    Instrument,
    Last,
    Location,
    Items,
    OneOf,
    AnyOf,
    Closed,
    Origin,
    Next,
    ObjectProperty,
    Prev,
    Preview,
    Result,
    Replies,
    Tag,
    Target,
    To,
    Type,
    Url,
    Accuracy,
    Altitude,
    Content,
    Name,
    Duration,
    Height,
    Href,
    Hreflang,
    PartOf,
    Latitude,
    Longitude,
    MediaType,
    EndTime,
    Published,
    StartTime,
    Radius,
    Rel,
    StartIndex,
    Summary,
    TotalItems,
    Units,
    Updated,
    Width,
    Subject,
    Relationship,
    Describes,
    FormerType,
    Deleted,
    ContentMap,
    NameMap,
    SummaryMap,
    OrderedItems
  ]

  for (const Property of properties) {
    API.addProperty(Property)
  }

  /*
   **********
   * MODELS *
   **********
   */

  class ObjectModel extends BaseObject {
    static get type () {
      return this.name === 'ObjectModel' ? 'Object' : this.name
    }

    static properties = [
      API.properties.attachment,
      API.properties.attributedTo,
      API.properties.audience,
      API.properties.content,
      API.properties.context,
      API.properties.contentMap,
      API.properties.name,
      API.properties.nameMap,
      API.properties.endTime,
      API.properties.generator,
      API.properties.icon,
      API.properties.id,
      API.properties.image,
      API.properties.inReplyTo,
      API.properties.location,
      API.properties.preview,
      API.properties.published,
      API.properties.replies,
      API.properties.startTime,
      API.properties.summary,
      API.properties.summaryMap,
      API.properties.tag,
      API.properties.updated,
      API.properties.url,
      API.properties.to,
      API.properties.bto,
      API.properties.cc,
      API.properties.bcc,
      API.properties.mediaType,
      API.properties.duration
    ]
  }

  class Link extends BaseObject {
    static properties = [
      API.properties.href,
      API.properties.rel,
      API.properties.mediaType,
      API.properties.name,
      API.properties.hreflang,
      API.properties.height,
      API.properties.width,
      API.properties.preview
    ]

    static required = [
      API.properties.href
    ]

    constructor (href, opts = {}) {
      super({ ...opts, href })
    }
  }

  class Activity extends ObjectModel {
    static properties = ObjectModel.properties.concat([
      API.properties.actor,
      API.properties.object,
      API.properties.target,
      API.properties.result,
      API.properties.origin,
      API.properties.instrument
    ])
  }

  class IntransitiveActivity extends ObjectModel {
    static properties = Activity.properties.filter((prop) => {
      return prop.propName !== API.properties.object
    })
  }

  class Collection extends ObjectModel {
    static properties = ObjectModel.properties.concat([
      API.properties.totalItems,
      API.properties.current,
      API.properties.first,
      API.properties.last,
      API.properties.items
    ])
  }

  class OrderedCollection extends Collection {
    static properties = Collection.properties.concat([
      API.properties.orderedItems
    ])
  }

  class CollectionPage extends Collection {
    static properties = Collection.properties.concat([
      API.properties.partOf,
      API.properties.next,
      API.properties.prev
    ])
  }

  class OrderedCollectionPage extends CollectionPage {
    static properties = CollectionPage.properties.concat([
      API.properties.orderedItems,
      API.properties.startIndex
    ])
  }

  const models = [
    ObjectModel,
    Link,
    Activity,
    IntransitiveActivity,
    Collection,
    OrderedCollection,
    CollectionPage,
    OrderedCollectionPage
  ]

  API.addContext(BaseObject.context, { models, properties })
}
