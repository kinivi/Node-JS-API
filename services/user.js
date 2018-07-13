const UserRepository = require("../repositories/UserRepository");

module.exports = {
    findAll: callback => {
        UserRepository.getAll((err, data) => {
            callback(err, data);
        })
    },

    findOne: (id, callback) => {
        UserRepository.getById(id, (err, data) => {
            callback(err, data);
        })
    },

    findContacts: (id, callback) => {
        UserRepository.findContacts(id, (err, data) => {
            callback(err, data);
        })
    },

    putUser: (data, callback) => {
        let { name, age, email } = data;
        let newUser = { name: name, age: age, email: email };

        UserRepository.put(newUser, (err) => {
            callback(err);
        })
    },

    deleteData: (id, callback) => {
        UserRepository.deleteData(id, (err) => {
            callback(err);
        })
    },

    updateData: (id, data, callback) => {
        UserRepository.updateData(id, data, (err, data) => {
            callback(err, data);
        })
    },
}