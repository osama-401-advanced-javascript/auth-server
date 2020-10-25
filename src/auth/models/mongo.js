'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  get(record) {
    const query = record ?  record  : {};
    return this.model.find(query);
  }

  create(record) {
    const newRecord = new this.model(record);
    return newRecord.save();
  }
  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = Collection;
