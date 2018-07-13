const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: callback => {
        MessageRepository.getAll((err, data) => {
            callback(err, data);
        })
    },

    findOne: (id, callback) => {
        MessageRepository.getById(id, (err, data) => {
            callback(err, data);
        })
    },

    putMessage: (data, callback) => {
        let { senderId, receiverId, text } = data;
        let newMessage = { senderId: senderId, receiverId: receiverId, text: text };

        MessageRepository.put(newMessage, (err) => {
            callback(err);
        })
    },

    deleteData: (id, callback) => {
        MessageRepository.deleteData(id, (err) => {
            callback(err);
        })
    },

    updateData: (id, data, callback) => {
        MessageRepository.updateData(id, data, (err, data) => {
            callback(err, data);
        })
    },
}