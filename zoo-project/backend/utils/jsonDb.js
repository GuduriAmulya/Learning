
// A tiny JSON file DB helper.
// Ensures { "pets": [] } by default and provides simple read/write helpers.
const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "db.json");

function ensureDb() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ pets: [] }, null, 2), "utf-8");
  } else {
    try {
      const raw = fs.readFileSync(DB_PATH, "utf-8");
      JSON.parse(raw);
    } catch (e) {
      fs.writeFileSync(DB_PATH, JSON.stringify({ pets: [] }, null, 2), "utf-8");
    }
  }
}

function readDb() {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

module.exports = { DB_PATH, ensureDb, readDb, writeDb };
