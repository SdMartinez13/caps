'use strict';

class Queue {
  constructor() {
    this.data = {};
  }
  store(key, value) {
    this.data[key] = value;
    return this.data[key];
  }
  read(key) {
    return this.data[key];
  }
  remove(key) {
    console.log('been removed');
    let value = this.data[key];
    return value;
  }
}

module.exports = Queue;