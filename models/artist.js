const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = (callback) => {
    db.get().collection('artists').find().toArray((err, docs) => {
        callback(err, docs);
    });
};

exports.findById = (id, callback) => {
    db.get().collection('artists').findOne({_id: ObjectID(id)}, (err, doc) => {
        callback(err, doc);
    });
};

exports.create = (artist, callback) => {
    db.get().collection('artists').insert(artist, (err, result) => {
        callback(err, result);
    });
};

exports.update = (id, data, callback) => {
    db.get().collection('artists').updateOne(
        {_id: ObjectID(id)},
        {$set: data},
        (err, result) => callback(err, result)
    );
};

exports.delete = (id, callback) => {
    db.get().collection('artists').deleteOne(
        {_id: ObjectID(id)},
        (err, result) => callback(err, result)
    );
};