migrate((db) => {
  const collection = new Collection({
    "id": "hs6j77fzmnx31h5",
    "created": "2023-01-26 17:35:08.149Z",
    "updated": "2023-01-26 17:35:08.149Z",
    "name": "departments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "imxjjmra",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hs6j77fzmnx31h5");

  return dao.deleteCollection(collection);
})
