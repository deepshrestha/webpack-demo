const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors()) // middleware function

app.get('/data', (req, res) => {
    res.send(
        [
            {
              "itemName": "Apple", 
              "id": 1
            }, 
            {
              "itemName": "Banana", 
              "id": 2
            }, 
            {
              "itemName": "Kiwi", 
              "id": 3
            }, 
            {
              "itemName": "Orange", 
              "id": 4
            }, 
            {
              "itemName": "Water Melon", 
              "id": 5
            }, 
            {
              "itemName": "Apricots", 
              "id": 6
            }, 
            {
              "itemName": "Blackberries", 
              "id": 7
            }, 
            {
              "itemName": "Blueberries", 
              "id": 8
            }, 
            {
              "itemName": "Blackcurrant", 
              "id": 9
            }, 
            {
              "itemName": "Avocado", 
              "id": 10
            }
          ]
    )
})

app.listen(3000, (err) => {
    if(err)
        console.log("Server error!")
    console.log("Server is running on port 3000")
})