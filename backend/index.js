require('dotenv').config()

const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('!sdfs')
})


app.get('/github',(req,res)=>{
    github_data = {
  "students": [
    {
      "id": 1,
      "name": "Ali Khan",
      "age": 20,
      "department": "Computer Science",
      "semester": 4,
      "cgpa": 3.45,
      "email": "ali.khan@example.com"
    },
    {
      "id": 2,
      "name": "Sara Ahmed",
      "age": 21,
      "department": "Software Engineering",
      "semester": 6,
      "cgpa": 3.82,
      "email": "sara.ahmed@example.com"
    },
    {
      "id": 3,
      "name": "Usman Tariq",
      "age": 22,
      "department": "Artificial Intelligence",
      "semester": 5,
      "cgpa": 3.67,
      "email": "usman.tariq@example.com"
    },
    {
      "id": 4,
      "name": "Ayesha Malik",
      "age": 19,
      "department": "Data Science",
      "semester": 3,
      "cgpa": 3.91,
      "email": "ayesha.malik@example.com"
    },
    {
      "id": 5,
      "name": "Hamza Raza",
      "age": 23,
      "department": "Computer Engineering",
      "semester": 7,
      "cgpa": 3.25,
      "email": "hamza.raza@example.com"
    }
  ]
}
    res.json(github_data)
})

app.listen(process.env.PORT|| 5000, () => {
  console.log(`Example app listening on port ${port}`)
}
)