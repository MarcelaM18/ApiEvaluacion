const { Schema, model } = require('mongoose');

const HurtoSchema = Schema({
  direccion: {
    type: String,
    required: [true, 'La dirección es obligatoria']
  },
  latitud: {
    type: String,
    required: [true, 'La latitud es obligatoria'],
    max: [6.217, 'El valor mínimo es 6.217'],
    min: [6.13, 'El valor máximo es 6.13']
  },
  longitud: {
    type: String,
    required: [true, 'La longitud es obligatoria'],
    max: [-75.34, 'El valor mínimo es -75.34'],
    min: [-75.567, 'El valor máximo es -75.567']
  },
  descripcion: {
    type: String,
    required: [true, 'EL campo descripcion es requerido']
    
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: [true, 'La fecha es obligatoria']
  }
});

module.exports = model('Hurto', HurtoSchema);
