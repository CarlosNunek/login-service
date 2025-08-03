const { validarCredenciales } = require('../services/loginService');

async function loginController(req, res) {
  const { cedula, password } = req.body;

  if (!cedula || !password) {
    return res.status(400).json({ error: 'Cédula y contraseña requeridos' });
  }

  const resultado = await validarCredenciales(cedula, password);
  return res.status(resultado.status).json(resultado);
}

module.exports = { loginController };
