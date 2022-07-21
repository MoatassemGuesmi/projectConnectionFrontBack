const router =require("express").Router()

const models =require("../models/user")
router.get("/api/user",models.getOneuser)

module.exports={userrouter:router}