const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/users')
//untuk menampilkan semua data user
    router.get('/users', usercontroller.index )
//menampilkan data berdasarkan id
    router.get('/user/:id', usercontroller.show)

//untuk menyimpan data
    router.post('/user',usercontroller.store)

//menyimpan perubahan data dengan id tertentu
    router.put('/user/:id', usercontroller.update)

//menghapus data user dengan id tertentu
    router.delete('/user/:id', usercontroller.delete)

    module.exports = router
