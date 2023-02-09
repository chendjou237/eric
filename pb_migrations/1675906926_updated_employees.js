migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjuw6dnqemdobir")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuvgaycj",
    "name": "home_address",
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
  collection.schema.removeField("kuvgaycj")

  return dao.saveCollection(collection)
})
