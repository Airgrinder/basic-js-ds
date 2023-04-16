const {NotImplementedError} = require('../extensions/index.js');

function removeKFromList(l, k) {

    while (l.value === k) {
        l = l.next
    }

    let currentItem = l
    while (currentItem.next) {
        if (currentItem.next.value === k) {
            currentItem.next = currentItem.next.next
        } else {
            currentItem = currentItem.next
        }
    }
    return l
}

module.exports = {
    removeKFromList
};
