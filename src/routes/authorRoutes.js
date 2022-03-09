const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name: 'Joseph Barbera',
            born: 'March 24, 1911',
            years_active: '1932-2006',
            img: 'tomandjerry.jpg'
        },
        {
            name: 'J K Rowling',
            born: 'July 31, 1965',
            years_active: '1997-present',
            img: 'Harry.jpg'
        },
        {
            name: 'Basheer',
            born: 'January 21, 1908',
            years_active: '1928-1994',
            img: 'PathummayudeAadu.jpg'
        }
        
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title: 'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title: 'Library',
            author: authors[id]
        });
    });

    return authorsRouter;
}

module.exports = router;