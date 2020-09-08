const express = require('express')
const router = express.Router()
const Article = require('../models/article')


router.get('/', async(req,res) => {
    try{
           const articles = await Article.find()
           res.json(articles)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const article = await Article.findById(req.params.id)
           res.json(article)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const article = new Article({
        author: req.body.author,
        title: req.body.title,
        abstract: req.body.abstract,
        body: req.body.body,
        imageUrl: req.body.imageUrl,
    })

    try{
        const a1 =  await article.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const article = await Article.findById(req.params.id) 
        article.body = req.body.body
        const a1 = await article.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router