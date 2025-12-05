const fs = require('fs');
const path = require('path');

class Wheel {
  static getAll() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/wheels.json')));
  }

  static save(wheel) {
    const wheels = this.getAll();
    wheel.id = Date.now(); // Simple ID
    wheels.push(wheel);
    fs.writeFileSync(path.join(__dirname, '../data/wheels.json'), JSON.stringify(wheels));
    return wheel;
  }

  static export(id) {
    const wheels = this.getAll();
    return wheels.find(w => w.id == id);
  }
}

module.exports = Wheel;
