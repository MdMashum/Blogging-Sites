const mongoose = require ("mongoose")

const createBlog = new mongoose.Schema({

title: {type:String,trim:true}, 
body: {type:String,trim:true}, 
authorId: {required:true, type:mongoose.Types.ObjectId,refs:'Author'}, 
tags: [{type:String,trim:true}],
category: [{type:String, required:true, trim:true}],
 subcategory:[{type:String,trim:true}], 
 deletedAt: {type:String,default:null}, 
 isDeleted: {type:Boolean, default: false},
 publishedAt: {type:String,default:false},
 isPublished: {type:Boolean, default: false}
},{timestamps:true})


module.exports = mongoose.model("Blog", createBlog)