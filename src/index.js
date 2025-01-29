import express from 'express'

const PORT = 5000

const app = new express()

app.use(express.json())

app.listen(PORT, () => console.log('Server started on port ' + PORT))
