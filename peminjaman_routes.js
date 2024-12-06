import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   getUsageAnalysis,
   analyzeItems
} from '../controllers/peminjaman_controllers.js'
import { authorize } from '../controllers/auth_controllers.js'
import { IsAdmin } from '../middleware/role_valitadion.js'

const app = express()
app.use(express.json())

app.get('/', getAllPeminjaman)
app.get('/PeminjamanId/:id', getPeminjamanById)
app.post('/addPeminjaman', addPeminjaman)
app.post('/pengembalian', pengembalianBarang)
app.post('/usage-report',authorize,[IsAdmin], getUsageAnalysis)
app.post('/borrow-analysis', authorize,[IsAdmin],analyzeItems)

export default app

