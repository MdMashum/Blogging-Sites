const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const cowincontroler = require("../controllers/cowinController")
const weatherController = require("../controllers/weathercontroller")
const MamesControler = require("../controllers/MamesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})









// Q1 Cowin Apies
router.get("/getStates",cowincontroler.getStates);
router.get("/getDistricts/:stateId",cowincontroler.getDistricts);   
router.get("/getByPin/gitPin",cowincontroler.getByPin); 
router.get("/getBydistrictId",cowincontroler.getDistrictByDate)

// Q2 Weather Apis
router.get("/getWeather", weatherController.getWeather);
router.get("/getTemprature", weatherController.getTemprature);

//Memes Apis


router.get("/getMames", MamesControler.getMames);
router.post("/MamesId",MamesControler.MamesId)











module.exports = router;