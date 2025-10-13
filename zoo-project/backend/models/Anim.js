
// JSON-backed Pet "model" mimicking a subset of Mongoose model methods.
const { readDb, writeDb, ensureDb } = require("../utils/jsonDb");
const { randomUUID } = require("crypto");

ensureDb();

class Pet {
  constructor(data) {
    this._id = data._id || randomUUID();
    this.name = data.name;
    this.type = data.type;
    this.age = data.age;
    this.breed = data.breed;
    this.status = data.status || "Available";
  }

  static async find() {
    const db = readDb();
    return db.anims;
  }

  async save() {
    const db = readDb();
    const existsIdx = db.anims.findIndex(p => p._id === this._id);
    if (existsIdx === -1) {
      db.anims.push(this);
    } else {
      db.anims[existsIdx] = this;
    }
    writeDb(db);
    return this;
  }

  static async findByIdAndUpdate(id, updates, opts = { new: true }) {
    const db = readDb();
    const idx = db.anims.findIndex(p => p._id === id);
    if (idx === -1) return null;
    db.anims[idx] = { ...db.anims[idx], ...updates, _id: id };
    writeDb(db);
    return opts && opts.new ? db.anims[idx] : null;
  }

  static async findByIdAndDelete(id) {
    const db = readDb();
    const idx = db.anims.findIndex(p => p._id === id);
    if (idx === -1) return null;
    const removed = db.anims[idx];
    db.anims.splice(idx, 1);
    writeDb(db);
    return removed;
  }
}

module.exports = Pet;
