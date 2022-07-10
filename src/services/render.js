const axios = require('axios');
// var Bookdata = require('../model/Bookdata');

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Log In'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/admin/add-book',name:'Add Book'
    }
];
// exports.homeRoutes = (req,res)=>{
//     axios.get
//     res.render('');
// }

exports.add_book = (req,res)=>{
    res.render('addBook',{
        nav,
        title : 'Library'
        });
}

exports.update_book = (req,res)=>{
    // axios.get('http://localhost:5000/admin/api/books/:id',{params:{id:req.query.id}})
    // const id = req.params.id
    // Bookdata.findOne({_id:id})
    //     .then(function(book){
    //         res.render('updateBook',{
    //             book,
    //             // : book.data,
    //             nav,
    //             title : 'Library'
    //             });
    //     })
    //     .catch(err=>{
    //         res.send(err);
    //     })
    axios.get('http://localhost:5000/admin/api/books',{params:{id:req.query.id}})
        .then(function(Bookdata){
            res.render('updateBook',{
                book : Bookdata.data,
                nav,
                title : 'Library'
            });
        })
        .catch(err=>{
            res.send(err);
        })
}