import sStorage from './sStorage'

class wCache {
  constructor(enable) {
    if (enable) {
      this.store = {}
    }
  }
  getCache(key) {
    if (!key || !this.store) return
    return this.store[key] || sStorage.getObject(key) || sStorage.get(key)
  }
  updateCache(key, data) {
    if (!this.store) return
    if (!key) {
      this.store = data
      return
    }
    this.store[key] = data
    sStorage.set(key, data)
  }
}
export default new wCache(typeof window === 'object')
