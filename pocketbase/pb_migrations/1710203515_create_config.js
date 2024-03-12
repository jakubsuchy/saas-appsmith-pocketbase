migrate((db) => {
    const dao = new Dao(db);

    const collection = dao.findCollectionByNameOrId("configuration")

    const record = new Record(collection)
    record.set("id", "1n2dmwqn5nvo4uh")
    record.set("appname", "SaaS App")
    record.set("active", true)
    record.set("menu", '[ { "id": "Homepage", "name": "Homepage", "icon": "home" }, { "id": "Data", "name": "Data", "icon": "chart" }, { "id": "Account", "name": "Account", "icon": "user" } ]')

    dao.saveRecord(record)
}, (db) => { // optional revert
})
