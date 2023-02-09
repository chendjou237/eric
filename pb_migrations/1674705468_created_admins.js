migrate((db) => {
  const collection = new Collection({
    "id": "j5utq9wly4yeihb",
    "created": "2023-01-26 03:57:48.356Z",
    "updated": "2023-01-26 03:57:48.356Z",
    "name": "admins",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j5utq9wly4yeihb");

  return dao.deleteCollection(collection);
})
