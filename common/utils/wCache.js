class wCache {
  constructor(enable) {
    if (enable) {
      this.store = {}
    }
  }
  getCache(key) {
    if (!key || !this.store) return
    return this.store[key]
  }
  updateCache(key, data) {
    if (!this.store) return
    if (!key) {
      this.store = data
      return
    }
    this.store[key] = data
  }
}
export default new wCache(typeof window === 'object')
