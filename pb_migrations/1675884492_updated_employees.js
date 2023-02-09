migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjuw6dnqemdobir")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c32hr30b",
    "name": "full_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjuw6dnqemdobir")

  // remove
  collection.schema.removeField("c32hr30b")

  return dao.saveCollection(collection)
})
