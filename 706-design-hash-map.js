const MyHashMap = function () {
  this.tabSize = 1e4;
  this.buckets = new Array(this.tabSize);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const bucketIndex = this._hash(key);

  if (!this.buckets[bucketIndex]) {
    this.buckets[bucketIndex] = [];
  }

  const bucket = this.buckets[bucketIndex];

  this._addToBucket(bucket, key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const bucketIndex = this._hash(key);
  const bucket = this.buckets[bucketIndex];
  if (!bucket) {
    return -1;
  }

  const item = bucket.find((x) => x.key === key);
  if (!item) {
    return -1;
  }

  return item.value;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const bucketIndex = this._hash(key);
  const bucket = this.buckets[bucketIndex];
  if (!bucket) {
    return;
  }

  this._removeFromBucket(bucket, key);
};

MyHashMap.prototype._hash = function (key) {
  return (key & 0x7fffffff) % this.tabSize;
};

// the following two function can be implemented more effectively
MyHashMap.prototype._addToBucket = function (bucket, key, value) {
  const itemIndex = bucket.findIndex((x) => x.key === key);
  if (itemIndex === -1) {
    bucket.push({ key, value });
  } else {
    bucket[itemIndex].value = value;
  }
};

MyHashMap.prototype._removeFromBucket = function (bucket, key) {
  const itemIndex = bucket.findIndex((x) => x.key === key);
  if (itemIndex === -1) {
    return;
  }

  bucket.splice(itemIndex, 1);
};

// tests
const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
