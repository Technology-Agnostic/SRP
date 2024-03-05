class Cache {
    constructor() {
        this.cache = null;
        this.isInvalidCache = false;
    }

    getData() {
        return this.cache;
    }

    setData(data) {
        this.cache = data;
    }

    isValid() {
        return this.cache !== null && !this.isInvalidCache;
    }
}

module.exports = Cache;