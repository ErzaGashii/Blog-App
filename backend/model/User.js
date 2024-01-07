const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    }
})
//Exportimi i modelit ku percaktohet emri i collection dhe UserSchema
// export default mongoose.model("User", userSchema);
const User = mongoose.model("User", userSchema);

module.exports = User;