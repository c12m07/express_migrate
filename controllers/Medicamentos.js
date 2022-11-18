import Medicamentos from '../models/medicamentos.js'

export const getMedicamentos = async (req, res) => {
  try {
    const medicamento = await Medicamentos.findAll();
    res.send(medicamento);
  } catch (err) {
    console.log(err);
  }
};

export const getMedicamentoById = async (req, res) => {
  try {
    const medicamento = await Medicamentos.findByPk(req.params.id);
    if (!medicamento) {
      res.status(404).send({
        message: `Medicamento con la id ${req.params.id} no encontrado`,
      });
    }
    res.send(medicamento);
  } catch (err) {
    console.log(err);
  }
};

export const createMedicamento = async (req, res) => {
  try {
    await Medicamentos.create(req.body); // Utilizar modelo
    res.json({
      message: 'Medicamento Creado',
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateMedicamento = async (req, res) => {
  try {
    const medicamento = await Medicamentos.findByPk(req.params.id);
    if (!medicamento) {
      res.status(404).send({
        message: `Medicamento con la id ${req.params.id} no encontrado`,
      });
      return;
    }
    await Medicamentos.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Medicamento actualizado',
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMedicamento = async (req, res) => {
  try {
    const medicamento = await Medicamentos.findByPk(req.params.id);
    if (!medicamento) {
      // Utilizar modelo
      res.status(404).send({
        message: `Medicamento con la id ${req.params.id} no encontrado`,
      });
      return;
    }
    await Medicamentos.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Medicamento eliminado',
    });
  } catch (err) {
    console.log(err);
  }
};