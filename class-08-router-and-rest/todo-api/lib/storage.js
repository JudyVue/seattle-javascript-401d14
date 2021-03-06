'use strict';

const data = {};

const storage = module.exports = {};

storage.setItem = function(name, item){
  if (!data[name]) data[name] = {};
  data[name][item.id] = item;

  // on success resolve the item that was stored
  return Promise.resolve(item);
}

storage.getItem = function(name, id){
  if (!data[name] || !data[name][id]) {
    let err = new Error('item not found');
    err.status = 404;
    return Promise.reject(err);
  }

  return Promise.resolve(data[name][id]);
}

storage.deleteItem = function(name, id){
  if (!data[name] || !data[name][id]) {
    let err = new Error('item not found');
    err.status = 404;
    return Promise.reject(err);
  }

  delete data[name][id];
  return Promise.resolve();
}

//storage.setItem('notes', {id: 'lulwat' ...})

