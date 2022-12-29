const express = require('express')
const uploderRouter =express.Router()
const {createUser,updateUser ,deleteUser,uploadFile }=require("../controller/controller")

uploderRouter.post('/uploadFile',uploadFile )
uploderRouter.post('/createUser',createUser)
uploderRouter.patch('/updateUser',updateUser)
uploderRouter.delete('/deleteUser',deleteUser)
module.exports= uploderRouter