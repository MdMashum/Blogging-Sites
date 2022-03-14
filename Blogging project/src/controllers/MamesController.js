let axios = require("axios");

//https://api.imgflip.com/get_memes
let getMames = async function(req,res) {

let options = {
  method: "get",
  url: "https://api.imgflip.com/get_memes"
}
let result = await axios(options);
res.status(201).send({msg:result.data})

}
//https://api.imgflip.com/caption_image 
let MamesId = async function (req, res) {

 try {let option = {
     method :"post",
     url:'https://api.imgflip.com/caption_image?template_id=181913649&text0=this is first Mames&text1=Not Be the last& username=GauravPatel&password=Gaurav@123'
 }
 let result = await axios(option);
res.status(201).send({msg:result.data})
 }catch(error){
     console.log(error)
 }
}


module.exports.getMames = getMames;
module.exports.MamesId = MamesId;
