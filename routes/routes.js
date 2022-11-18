import express from 'express'
import isAuth from '../middlewares/auth.js'
import {
  getMedicamentos,
  getMedicamentoById,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento
} from '../controllers/Medicamentos.js'

const Router = express.Router();

Router.get('/medicamentos', isAuth, getMedicamentos);

Router.get('/medicamentos/:id', isAuth, getMedicamentoById);

Router.post('/medicamentos', isAuth, createMedicamento);

Router.put('/medicamentos/:id', isAuth, updateMedicamento);

Router.delete('/medicamentos/:id', isAuth, deleteMedicamento);

export default Router
