import express from 'express'
import {
   getAllUser,
   getUserById,
   addUser,
   updateUser,
   deleteUser
} from '../controllers/user_controllers.js'


const app = express()
app.use(express.json())

app.get('/', getAllUser)
app.get('/userId/:id', getUserById)
app.post('/addUser', addUser)
app.put('/upUser:id', updateUser)
app.delete('/delUser:id', deleteUser)

export default app