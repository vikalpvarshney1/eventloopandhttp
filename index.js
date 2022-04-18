
const express = require("express");

const app = express()
let port = 8000
// app.use((req, res, next) => {
//     console.log("middleWate")
//     next()
// })
// app.get(path,callback)

app.get("/", (req, res) => {
    console.log("hello")
    res.send("hello world")

})
const data = {
    book1: "alfa",
    book2: "bita",
    book3: "gama",
    book4: "physic",
}
app.get("/books", (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`listing the port at ${port}`)
})