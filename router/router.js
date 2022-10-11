const express = require('express')
const uploderRouter =express.Router()
const {saveImage,getImage}=require("../controller/controller")

uploderRouter.post('/saveImage',saveImage)
uploderRouter.get('/getImage/:id',getImage)
module.exports= uploderRouter