const express = require('express');

const app = express();
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
        link:'/admin',name:'Add Book'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter)

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    });
});

app.get('/login',function(req,res){
    res.render("login",
    {
        nav,
        title: 'Library'
    });
});

app.get('/signup',function(req,res){
    res.render("signup",
    {
        nav,
        title: 'Library'
    });
});

app.get('/admin',function(req,res){
    res.render("adminLogin",
    {
        nav,
        title: 'Library'
    });
});

app.get('/addBook',function(req,res){
    res.render("addBook",
    {
        nav,
        title: 'Library'
    });
});
app.listen(5000);