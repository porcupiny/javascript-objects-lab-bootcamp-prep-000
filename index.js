var recipes = {  }

function updateObjectWithKeyAndValue(object, key, value) {
   return object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function  deleteFromObjectByKey(object, key) {
  delete object.key; // true
 return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
  return object;
}