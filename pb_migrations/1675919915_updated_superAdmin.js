migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t201rinkul7m7ud")

  collection.name = "superAdmins"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t201rinkul7m7ud")

  collection.name = "superAdmin"

  return dao.saveCollection(collection)
})
