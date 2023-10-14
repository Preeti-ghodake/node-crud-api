const userRoute = require('express').Router()
const{ getAllUser, getSingleUser, createUser, updateUser, deleteUser } = require('../controller/userController')

userRoute.get(`/`, getAllUser)
userRoute.get(`/single/:id`, getSingleUser)

userRoute.post(`/add`, createUser)

userRoute.patch(`/update/:id`, updateUser)

userRoute.delete(`/delete/:id`, deleteUser)

module.exports = userRoute