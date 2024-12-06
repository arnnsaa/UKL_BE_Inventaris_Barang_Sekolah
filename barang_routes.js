import express from 'express'
import {
   getAllBarang,
   getBarangById,
   addBarang,
   updateBarang,
   deleteBarang
} from '../controllers/barang_controllers.js'
import { authorize } from '../controllers/auth_controllers.js'
import { IsAdmin } from '../middleware/role_valitadion.js'
import { IsMember } from '../middleware/role_valitadion.js'

const app = express()
app.use(express.json())

app.get('/', getAllBarang)
app.get('/BarangId/:id', getBarangById)
app.post('/addBarang', authorize, [IsAdmin], addBarang)
app.put('/upBarang/:id', authorize, [IsAdmin], [IsMember], updateBarang)
app.delete('/delBarang/:id', deleteBarang)

export default app