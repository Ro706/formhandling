import express from "express"
import cors from "cors"
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json()) // Add this line to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // To parse URL-encoded bodies

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("Received data successfully!")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})