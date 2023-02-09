migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjuw6dnqemdobir")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgpxjvn1",
    "name": "department",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "hs6j77fzmnx31h5",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjuw6dnqemdobir")

  // remove
  collection.schema.removeField("bgpxjvn1")

  return dao.saveCollection(collection)
})
