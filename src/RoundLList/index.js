/**
 * @双向链表
 */
export function RNode(element) {
  this.element = element;
  this.next = null;
  this.pervious = null;
}
/**
 * @name RoundLList
 * @function find 查找链表中的一个节点
 * @function insert 向链表中插入一个节点
 * @function remove 删除链表中的一个节点
 * @function display 显示链表中的元素
 * @function findLast 查找链表中的最后一个节点
 * @function dispReverse 反序显示双向链表中的元素
 * 双向链表
 */
export function RoundLList() {
  this.head = new RNode("head");
}
/**
 * @name find
 * @param {RNode} item 节点
 * 查找链表中的一个节点，查找到匹配的节点则返回节点，若未匹配到节点，则返回null
 */
RoundLList.prototype.find = function (item) {
  let currentNode = this.head;
  while (currentNode && currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};
/**
 * @name insert
 * @param {RNode} item 节点
 * 向链表中插入一个节点（注意：如果未找到前置节点，则不插入）
 */
RoundLList.prototype.insert = function (newElement, item) {
  const newNode = new RNode(newElement);
  let currentNode = this.find(item);
  if (currentNode !== null) {
    newNode.next = currentNode.next;
    newNode.pervious = currentNode;
    currentNode.next && (currentNode.next.pervious = newNode); // 排除当前节点为末尾节点的情况
    currentNode.next = newNode;
  }
  return this;
};
/**
 * @name remove
 * @param {RNode} item 节点
 * 删除链表中的一个节点
 */
RoundLList.prototype.remove = function (item) {
  let currentNode = this.find(item);
  if (currentNode !== null) {
    currentNode.pervious.next = currentNode.next;
    currentNode.next.pervious = currentNode.pervious;
    currentNode.next = null;
    currentNode.pervious = null;
  }
  return this;
};
/**
 * @name display
 * 显示链表中的元素
 */
RoundLList.prototype.display = function () {
  let currentNode = this.head;
  while (currentNode.next !== null) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
};
/**
 * @name findLast
 * 查找双向链表中的最后一个节点
 */
RoundLList.prototype.findLast = function () {
  let currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};
/**
 * @name dispReverse
 * 反序显示链表中的元素
 */
RoundLList.prototype.dispReverse = function () {
  let currentNode = this.findLast();
  while (currentNode.pervious !== null) {
    console.log(currentNode.element);
    currentNode = currentNode.pervious;
  }
};
