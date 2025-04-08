const mongoose=require('mongoose')

//table name is UserSchema
const UserSchema=mongoose.Schema({
    user:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}

})

module.exports=mongoose.model('User',UserSchema)