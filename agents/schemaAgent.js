const db = require("../config/db");

let schemaCache = {};

async function loadSchema() {

    schemaCache = {};

    try {

        const tables = await db.query("SHOW TABLES");

        for (const row of tables) {

            const tableName = Object.values(row)[0];

            const columns = await db.query(`SHOW COLUMNS FROM ${tableName}`);

            schemaCache[tableName] = {

                columns: columns.map(col => ({
                    name: col.Field,
                    type: col.Type
                }))

            };

        }

        console.log("\n=========== DATABASE KNOWLEDGE ===========");

        console.log(JSON.stringify(schemaCache, null, 2));

        console.log("==========================================\n");

    }

    catch(err){

        console.error("Schema Agent:",err.message);

    }

}

function getSchema(){

    return schemaCache;

}

function getTables(){

    return Object.keys(schemaCache);

}

function getColumns(table){

    if(!schemaCache[table]) return [];

    return schemaCache[table].columns;

}

module.exports={

    loadSchema,
    getSchema,
    getTables,
    getColumns

};