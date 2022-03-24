function forEach(array, callback) {

  for (let i = 0; i < array.length; i++){
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const arr = [];

  for (let i = 0; i < array.length; i++){
    arr[i] = callback(array[i]);
  }

  return arr;
}

function filter(array, callback) {
  const arr = [];

  for (let i = 0; i < array.length; i++){
    if (callback(array[i])){
      arr.push(array[i]);
    }
  }

  return arr;
}

function every(array, callback) {
  
  for (let num of array){
    if (!callback(num)){
      return false;
    }
  }

  return true;
}

function some(array, callback) {
  for (let num of array){
    if (callback(num)){
      return true;
    }
  }

  return false;
}

function majority(array, callback) {
  let major = 0;
  let minor = 0;

  for (let i in array){ 

    if((callback(i))){
      major++;
    }else{
      minor++;
    }
  }
  return (major > minor);
}

function once(callback) {

  let first = false;
  let num;


  return (function(){

    if (first){
      return num;
    }

    first = true;
    num = callback.apply(this,arguments);
    callback = null;
    return num;
  });
}

function groupBy(array, callback) {
  
  const obj = {};
  let arr = [];
 
  for(let i = 0; i < array.length; i++){
  
    obj[callback(array[i])] = arr;
    arr.push(array[i]);

    if (callback(array[i + 1]) !== callback(array[i])){
      arr = [];
    }
    
  }

  return obj;
}

function arrayToObject(array, callback) {
  
  const arr = {};

  for(let i in array){
    arr[array[i]] = callback(array[i]);
  }

  return arr;
}


module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
