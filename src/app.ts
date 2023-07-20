import express from 'express'
import config from 'config'
import router from './router'

const app = express()

// JSON middleware
app.use(express.json())

// Routes
app.use('/api', router)

// app port 
const port = config.get<number>("port")

app.listen(port, async () => {
    console.log(`Server running on port ${port}`)
})