migrate((db) => {
  const collection = new Collection({
    "id": "zjuw6dnqemdobir",
    "created": "2023-01-26 02:49:17.250Z",
    "updated": "2023-01-26 02:49:17.250Z",
    "name": "employees",
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
  const collection = dao.findCollectionByNameOrId("zjuw6dnqemdobir");

  return dao.deleteCollection(collection);
})
