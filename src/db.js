import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "supermarket",
});

/**
export const admin = new pg.Pool({
  port: 5432,
  hots: "localhost",
  user: "lksdjf",
  password: "pas",
  database: "supermarket"
}) 

 */

pool.on("connect", () => {
  console.log("Database connected");
});
