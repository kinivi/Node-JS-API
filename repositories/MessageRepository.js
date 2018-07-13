
const Repository = require("./GeneralRepository");
const MessageModel = require("../models/Message");

class MessageRepository extends Repository {
    constructor(){
        super();
        this.model = MessageModel;
    }
}

module.exports = new MessageRepository();
