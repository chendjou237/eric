migrate((db) => {
  const collection = new Collection({
    "id": "t201rinkul7m7ud",
    "created": "2023-02-08 18:13:27.212Z",
    "updated": "2023-02-08 18:13:27.212Z",
    "name": "superAdmin",
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
  const collection = dao.findCollectionByNameOrId("t201rinkul7m7ud");

  return dao.deleteCollection(collection);
})
