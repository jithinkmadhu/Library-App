var Bookdata = require('../model/Bookdata');

//create and save new data
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }

    //new book
    const book = new Bookdata({
        title : req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        image : req.body.image
    })

    //save data
    book
        .save(book)
        .then(data=>{
            //res.send(data)
            res.redirect('/books')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occured"
            });
        });
}

//retrive and return all user/single user
exports.find = (req,res)=>{
    
}

//update 
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
    }

    const id= req.params.id;
    Bookdata.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Update book with ${id}, Maybe book not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:`Error update book information`})
        })
}

//delete
exports.delete = (req,res)=>{
    const id= req.params.id;
    Bookdata.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot delete with id ${id}, maybe id i wrong`})
            }else{
                res.send({
                    message:"user was deleted successfully"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:'could not delete book with id=' + id
            });
        });
}