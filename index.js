
const express = require('express')
const app = express()
const port = 5000
const cors = ('cors') 
app.use(cors)

app.get('/', (req, res) => {
  res.send('Chafe recipe server  in running')
})

app.listen(port, () => {
  console.log(`Chafe recipe server  ${port}`)
})