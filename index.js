
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors =require('cors') 
const home = require('./Data/Chaf.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Chafe recipe server  in running')
})
 app.get('/home', (req, res) => {
  
  res.send(home)
}) 
 
app.get('/home/:id',(req,res)=>{
  const id = req.params.id
  const selectedInfo = home.find(n=>n.id === id) 
  res.send(selectedInfo)
})

app.listen(port, () => {
  console.log(`Chafe recipe server  ${port}`)
})