/**
 * @队列 - 排队结账
 * 队列是一种列表，不同的是列表只能在队尾插入元素，在队首删除元素。
 * 队列用于存储按顺序排列的数据，先进先出。
 */

/**
 * 队列
 * @property {number} length 队列的长度
 * @function enqueue 向队尾添加一个元素
 * @function dequeue 删除队首的元素
 * @function front 读取队首的元素
 * @function back 读取队尾的元素
 * @function clear 清空整个队列
 * @function toString 读取整个队列的元素
 * @function empty 判断队列是否为空
 */
export default function Queue() {
  this.dataStore = [];
  this.length = 0;
}
/**
 * @name enqueue
 * @param {any} element
 * 向队尾添加一个元素
 */
Queue.prototype.enqueue = function (element) {
  this.dataStore[this.length++] = element;
  return this;
};
/**
 * @name dequeue
 * 删除队首的元素
 */
Queue.prototype.dequeue = function () {
  this.length--;
  return this.dataStore.shift();
};
/**
 * @name front
 * 读取队首的元素
 */
Queue.prototype.front = function () {
  return this.dataStore[0];
};
/**
 * @name back
 * 读取队尾的元素
 */
Queue.prototype.back = function () {
  return this.dataStore[this.length - 1];
};
/**
 * @name clear
 * 清空整个队列
 */
Queue.prototype.clear = function () {
  this.dataStore = [];
  this.length = 0;
  return this;
};
/**
 * @name toString
 * 读取整个队列的元素
 */
Queue.prototype.toString = function () {
  return this.dataStore.toString();
};
/**
 * @name empty
 * @returns {boolean}
 * 判断队列是否为空
 */
Queue.prototype.empty = function () {
  if (this.length === 0) return true;
  return false;
};
