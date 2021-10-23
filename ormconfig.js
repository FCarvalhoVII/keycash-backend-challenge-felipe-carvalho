// eslint-disable-next-line
const dotenv = require('dotenv');
dotenv.config();

const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME
} = process.env;

module.exports = {
    "type": "mysql",
    "host": DATABASE_HOST,
    "port": DATABASE_PORT,
    "username": DATABASE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": DATABASE_NAME,
    "synchronize": false,
    "migrations": [process.env.NODE_ENV ? "src/database/migrations/*.ts" : "dist/src/database/migrations/*.js"],
    "entities": [process.env.NODE_ENV ? "src/entities/*.ts" : "dist/src/entities/*.js"],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
}