const { Pool } = require("pg");
const { database } = require("pg/lib/defaults");

const pool = new Pool({
  //connectionString: "postgres://anthonyclay:password@host:5432/reports_db" , // TODO: Replace with process.env.DATABASE_URL
  host: "localhost",
  user: "anthonyclay",
  database: "reports_db",
  port: 5432,
  password:"",
//process.env.DATABASE_URL
});
// const pool = 'postgres://anthonyclay:password@host:5432/example_db'

module.exports = pool;