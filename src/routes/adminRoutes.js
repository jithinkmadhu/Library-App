const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const services = require('../services/render');
const controller = require('../controller/controller');

adminRouter.use(express.static('./public'));

function router(nav){

    adminRouter.get('/add-book',services.add_book);

    adminRouter.get('/update-book',services.update_book);

    // adminRouter.get('/',function(req,res){
    //     res.render('addBook',{
    //         nav,
    //         title : 'Library'
    //     });
    // });

    //API
    adminRouter.post('/api/books',controller.create);
    adminRouter.get('/api/books',controller.find);
    adminRouter.put('/api/books/:id',controller.update);
    adminRouter.delete('/api/books/:id',controller.delete);


    return adminRouter;

}

module.exports = router;