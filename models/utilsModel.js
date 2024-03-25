import mongoose, { Schema } from "mongoose"

const utilSchema = mongoose.Schema({
departMent:{
    type:Array
}
})


const Utils = mongoose.model('Utils',utilSchema)
 