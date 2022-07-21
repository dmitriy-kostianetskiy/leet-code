const MyHashSet = function () {
  this.tabSize = 1e4;
  this.buckets = new Array(this.tabSize);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const bucketIndex = this._hash(key);

  if (!this.buckets[bucketIndex]) {
    this.buckets[bucketIndex] = [];
  }

  const bucket = this.buckets[bucketIndex];

  this._addToBucket(bucket, key);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.contains = function (key) {
  const bucketIndex = this._hash(key);
  const bucket = this.buckets[bucketIndex];
  if (!bucket) {
    return false;
  }

  return bucket.findIndex((x) => x === key) !== -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const bucketIndex = this._hash(key);
  const bucket = this.buckets[bucketIndex];
  if (!bucket) {
    return;
  }

  this._removeFromBucket(bucket, key);
};

MyHashSet.prototype._hash = function (key) {
  return (key & 0x7fffffff) % this.tabSize;
};

// the following two function can be implemented more effectively
MyHashSet.prototype._addToBucket = function (bucket, key) {
  const itemIndex = bucket.findIndex((x) => x === key);
  if (itemIndex === -1) {
    bucket.push(key);
  }
};

MyHashSet.prototype._removeFromBucket = function (bucket, key) {
  const itemIndex = bucket.findIndex((x) => x === key);
  if (itemIndex === -1) {
    return;
  }

  bucket.splice(itemIndex, 1);
};

// tests
const myHashSet = new MyHashSet();
myHashSet.add(1); // set = [1]
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.contains(1)); // return True
console.log(myHashSet.contains(3)); // return False, (not found)
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.contains(2)); // return True
myHashSet.remove(2); // set = [1]
console.log(myHashSet.contains(2)); // return False, (already removed)
