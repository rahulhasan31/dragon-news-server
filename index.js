 const express= require('express');
 const app= express();
 const cors= require('cors')
 const port= process.env.PORT || 5000;
const categories= require('./Data/Categories.json')
const news= require('./Data/News.json')

app.use(cors())

 app.get('/',(req, res)=>{
   res.send('hello word')
 })

 app.get('/news/:id', (req, res)=>{
  const id= req.params.id;
  const selectedNews=news.find(n=> n._id=== id)
  
  res.send(selectedNews)
 })

 app.get('/category/:id', (req, res)=>{
  const id= req.params.id;
  if(id=== "08"){
    res.send(news)
  }else{
    const category_news= news.filter(n=> n.category_id== id);
    res.send(category_news);
  }

 })

 app.get('/news', (req, res)=>{
  res.send(news)
 })
 app.get('/news-category', (req, res)=>{
   res.send(categories)
 } )

app.listen(port, ()=>{
    console.log('new server running', port);
})