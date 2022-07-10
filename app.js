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
        link:'/admin/add-book',name:'Add Book'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

// app.use('/admin',require('./src/routes/adminRoutes'));

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    });
});

app.listen(5000,()=>{console.log(`Server is running on http://localhost:${5000}`)});