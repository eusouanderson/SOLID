import fs from "fs";

export class UserRepository {
  constructor(filename = "users.json") {
    this.filename = filename;

    if (!fs.existsSync(this.filename)) {
      fs.writeFileSync(this.filename, JSON.stringify([]));
    }
  }
  saveUser(name) {
    const users = this.getAllUsers();
    users.push(name);
    fs.writeFileSync(this.filename, JSON.stringify(users, null, 2));
  }
  getAllUsers() {
    const data = fs.readFileSync(this.filename);
    return JSON.parse(data);
  }
}
