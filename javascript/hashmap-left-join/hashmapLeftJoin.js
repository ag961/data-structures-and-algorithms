'use strict';

function leftJoin(hashmap1, hashmap2){

  let result = [];
  hashmap1.table.forEach(element => {
    if (element){
      let current = element.head
      while(current){
        let key = Object.keys(current.value)[0]
        let combined = [key, hashmap1.get(key), hashmap2.get(key)]
        result.push(combined)
        current = current.next
      }
    }
  })

  return result;
}

module.exports = leftJoin;
