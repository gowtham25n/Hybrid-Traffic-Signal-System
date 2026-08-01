require("dotenv").config();

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function query(sql, paramsOrCallback, maybeCallback) {

    let params;
    let callback;

    if (typeof paramsOrCallback === "function") {
        callback = paramsOrCallback;
        params = [];
    } else {
        params = paramsOrCallback || [];
        callback = maybeCallback;
    }

    try {

        const [rows] = await pool.query(sql, params);

        if (callback) {
            return callback(null, rows);
        }

        return rows;

    } catch (err) {

        console.error("Database Error:", err);

        if (callback) {
            return callback(err);
        }

        throw err;
    }
}

module.exports = {
    query
};