const mongoose = require("mongoose");

const  messageSchema = mongoose.Schema({
    senderId: String,
    receiverId: String,
    text: String    
})

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;