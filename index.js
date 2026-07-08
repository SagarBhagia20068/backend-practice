require('dotenv').config()

const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('!sdfs')
})

app.get('github',(req,res)=>{
    res.send('!github')
})

app.listen(process.env.PORT|| 5000, () => {
  console.log(`Example app listening on port ${port}`)
}
)