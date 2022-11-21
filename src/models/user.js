const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: StaticRange, requires: true},
    password: { type: string}
},{
    timestamps: true
});

UserSchema.methods.encrypPassword = async password =>{
    const salt = await bcrypt.genSalt(20);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password){
    await bcript.compare(password, this.password)
}

module.exports = model('user', UserScheme);


