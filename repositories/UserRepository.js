
const Repository = require("./GeneralRepository");
const UserModel = require("../models/User");
const MessageModel = require("../models/Message")

class UserRepository extends Repository {
    constructor() {
        super();
        this.model = UserModel;
    }

    findContacts(id, callback) {
        let userModel = this.model;

        MessageModel.find({ senderId: id }).distinct('receiverId').exec((err, data) => {
            let ids = data;
            userModel.find({ _id: { $in: ids } }, callback);
        });
    }
}

module.exports = new UserRepository();
