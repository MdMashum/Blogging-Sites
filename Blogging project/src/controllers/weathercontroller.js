let axios = require("axios");


//http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId> 
let getWeather  =  async function ( req, res){
  let place = req.query.place;
  let id = req.query.id;
console.log(place,id)
let option = {
    method:"get",
    url:`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
    
}
let result = await axios(option);
let tempResult = result.data.main.temp;
res.status(200).send({msg: tempResult})

}

let getTemprature = async function (req,res){
let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
let id = req.query.id;
console.log(id)
let resultTemp = []

for (let i = 0; i < cities.length; i++) {


    let option = {
        method:"get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
        
    }
    let result = await axios(option);
    let tempResult = result.data.main.temp;
    resultTemp.push(tempResult);

    
}

let sortTemp = resultTemp.sort((a, b) => a - b);

res.status(200).send(sortTemp);



}

module.exports.getWeather =getWeather;
module.exports.getTemprature = getTemprature;