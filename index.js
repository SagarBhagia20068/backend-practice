require('dotenv').config()

const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('!sdfs')
})
const github_data = {
  "id": 1,
  "name": "John Doe",
  "age": 24,
  "email": "john@example.com",
  "isStudent": true
}

app.get('/github',(req,res)=>{
    res.json(github_data)
})

app.listen(process.env.PORT|| 5000, () => {
  console.log(`Example app listening on port ${port}`)
}
)