const { GoodsEntity } = require('../entities');
const { GoodsRepository } = require('../repositories');

class GoodsService {
  constructor(repository = new GoodsRepository()) {
    this.repository = repository;
  }

  findAll() {
    return this.repository.findAll();
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.repository.findById(id);
  }

  /**
   * @param {GoodsEntity} data
   */
  create(data) {
    return this.repository.create(data);
  }

  /**
   * @param {string} id
   * @param {GoodsEntity} data
   */
  replace(id, data) {
    return this.repository.replace(id, data);
  }

  /**
   * @param {string} id
   * @param {GoodsEntity} data
   */
  update(id, data) {
    return this.repository.update(id, data);
  }

  /**
   * @param {string} id
   */
  delete(id) {
    return this.repository.delete(id);
  }
}

module.exports = GoodsService;
